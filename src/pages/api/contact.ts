import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }), { status: 400 });
  }

  const serviceLabel = service || 'Nicht angegeben';

  const { error } = await resend.emails.send({
    from: 'Koeln-Fuehrerschein <noreply@koeln-fuehrerschein.de>',
    to: ['contact@koeln-fuehrerschein.de'],
    replyTo: email,
    subject: `Neue Anfrage: ${serviceLabel} – ${name}`,
    html: `
      <h2>Neue Kontaktanfrage über die Website</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;width:140px">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">E-Mail</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${serviceLabel}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;vertical-align:top">Nachricht</td><td style="padding:8px">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Nachricht konnte nicht gesendet werden.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
