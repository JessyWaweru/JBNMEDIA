// ─── Edit your contact details here. Everything on the site reads from this file. ───
export const SITE = {
  name: 'JBN Media',
  url: 'https://jbnmedia.org',
  domain: 'jbnmedia.org',
  tagline: 'We get Nairobi businesses found online and paid via M-Pesa.',
  // WhatsApp number in international format: digits only, no "+", no spaces, no leading 0.
  whatsapp: '254703261126',
  whatsappDisplay: '0703 261 126',
  // Number for normal phone calls.
  phone: '+254115393779',
  phoneDisplay: '0115 393 779',
  email: 'hello@jbnmedia.org',
  location: 'Nairobi, Kenya',
  hours: 'Mon to Sat, 8am to 6pm',
};

export const waLink = (message = "Hi JBN Media, I'd like to know more about your services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${SITE.phone}`;

export const mailLink = (subject = 'Enquiry from jbnmedia.org', body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
