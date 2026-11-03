// ─── Edit your contact details here. Everything on the site reads from this file. ───
export const SITE = {
  name: 'JBN Media',
  url: 'https://jbnmedia.org',
  domain: 'jbnmedia.org',
  tagline: 'AI assistants, websites and M‑Pesa payments for Kenyan businesses.',
  // WhatsApp number in international format: digits only, no "+", no spaces, no leading 0.
  whatsapp: '254115393779',
  whatsappDisplay: '0115 393 779',
  // Number for normal phone calls.
  phone: '+254115393779',
  phoneDisplay: '0115 393 779',
  email: 'hello@jbnmedia.org',
  location: 'Kenya',
  hours: 'Mon to Sat, 8am to 6pm',
};

export const waLink = (message = "Hi JBN Media, I'd like to know more about your services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message).replace(/'/g, '%27')}`;

export const telLink = () => `tel:${SITE.phone}`;

export const mailLink = (subject = 'Enquiry from jbnmedia.org', body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
