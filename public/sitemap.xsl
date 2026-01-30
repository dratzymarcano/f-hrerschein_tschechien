<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" indent="yes" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Koeln-Fuehrerschein Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; }
          h1 { font-size: 22px; }
          ul { list-style: none; padding: 0; }
          li { margin: 6px 0; }
          a { color: #1d4ed8; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .count { color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <div class="count">
          URLs: <xsl:value-of select="count(s:urlset/s:url)" />
        </div>
        <ul>
          <xsl:for-each select="s:urlset/s:url">
            <li>
              <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
