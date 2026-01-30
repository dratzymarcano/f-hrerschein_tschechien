export async function GET() {
  const site = import.meta.env.SITE ?? 'https://koeln-fuehrerschein.de';

  const pages = Object.keys(import.meta.glob('./**/*.astro'));

  const routes = pages
    .map((path) => {
      const cleaned = path.replace(/^\.\//, '').replace(/\.astro$/, '');
      if (cleaned === 'index') return '/';
      if (cleaned.endsWith('/index')) {
        return `/${cleaned.replace(/\/index$/, '')}`;
      }
      return `/${cleaned}`;
    })
    .filter((route) => route !== '/sitemap.xml')
    .map((route) => {
      if (route === '/') return route;
      return route.endsWith('/') ? route : `${route}/`;
    })
    .sort();

  const urls = routes
    .map((route) => `<url><loc>${new URL(route, site).href}</loc></url>`)
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8'
    }
  });
}
