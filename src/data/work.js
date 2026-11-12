// Case studies, partners and results. Kept free of browser/Vite globals so vite.config.js
// can read it too and bake each page's link-preview tags into static HTML.

// "M-Pesa" with a non-breaking hyphen (U+2011), for headings and buttons so it never splits across lines.
export const MPESA = 'M‑Pesa';

// For text kept with a plain hyphen (shared with meta tags, structured data and WhatsApp messages) but shown on the page.
export const keepMpesa = (s) => (typeof s === 'string' ? s.replace(/M-Pesa/g, MPESA) : s);

export const goherbal = {
  path: '/work/goherbal',
  name: 'GoHerbal',
  url: 'https://goherbal.health',
  urlDisplay: 'goherbal.health',
  // Plain-hyphen versions for <title>, meta tags and search results.
  seoTitle: 'GoHerbal case study: an online herbal shop paid by M-Pesa',
  seoDescription:
    'How JBN Media built an online shop for GoHerbal, a Nairobi herbal brand: customers pay with an M-Pesa PIN prompt or card via Paystack, choose delivery and track their order live.',
  title: `GoHerbal: an online herbal shop that gets paid by ${MPESA}`,
  teaser:
    'A Nairobi herbal shop where customers pick a product, choose delivery and pay with an M-Pesa prompt on their phone.',
  video: '/case-studies/goherbal/goherbal-checkout-web.mp4',
  poster: '/case-studies/goherbal/goherbal-checkout-poster.jpg',
  posterSize: { width: 780, height: 1688 },
  posterAlt: 'GoHerbal checkout on a phone, paid with M-Pesa',
  confirmed: '/case-studies/goherbal/goherbal-order-confirmed.webp',
  confirmedSize: { width: 390, height: 844 },
};

export const goherbalWhatsapp = {
  path: '/work/goherbal-whatsapp',
  name: 'GoHerbal WhatsApp assistant',
  seoTitle: 'GoHerbal WhatsApp assistant: answers customers and takes M-Pesa orders in the chat',
  seoDescription:
    'How JBN Media built an AI WhatsApp assistant for GoHerbal, a Nairobi herbal brand: it recommends products in English, Swahili or Sheng, prices rider delivery from a location pin and sends an M-Pesa prompt, all inside WhatsApp.',
  title: 'GoHerbal: a WhatsApp assistant that answers and takes the order',
  teaser:
    'Customers ask in their own words, get a product suggestion, drop a location pin for delivery and pay with an M-Pesa prompt, without leaving WhatsApp.',
  video: '/case-studies/goherbal-whatsapp/goherbal-whatsapp-web.mp4',
  poster: '/case-studies/goherbal-whatsapp/goherbal-whatsapp-poster.jpg',
  posterSize: { width: 384, height: 792 },
  posterAlt: "GoHerbal's WhatsApp assistant suggesting teas for a customer's stomach trouble",
  summary: '/case-studies/goherbal-whatsapp/goherbal-whatsapp-order-summary.webp',
  summarySize: { width: 384, height: 792 },
};

// More work for the home page, shown next to the GoHerbal shop case study.
// An entry with `comingSoon: true` (just `id`, `name`, `teaser`) shows as a "coming soon" card with no link;
// otherwise it is a full case-study card and needs `path`, `title`, `teaser`, `poster` and `posterSize`.
export const upcomingWork = [
  { id: 'goherbal-whatsapp', ...goherbalWhatsapp },
];

// The businesses we work with. Entries marked `placeholder` are examples to show the layout:
// they render in `npm run dev` only and never on the live site. Replace them with real clients.
export const partners = [
  {
    name: 'GoHerbal',
    sector: 'Herbal teas & wellness',
    location: 'Nairobi',
    work: 'Online shop with M‑Pesa and card checkout and live order tracking, plus a WhatsApp AI assistant that takes orders in the chat.',
    url: goherbal.url,
    urlDisplay: goherbal.urlDisplay,
    caseStudy: goherbal.path,
  },
  { name: 'Sample Salon & Spa', sector: 'Beauty', location: 'Westlands', work: 'Booking website with M-Pesa deposits.', placeholder: true },
  { name: 'Sample Hardware Ltd', sector: 'Retail', location: 'Thika', work: 'Google Business Profile and monthly social media.', placeholder: true },
  { name: 'Sample Welfare Chama', sector: 'Chama', location: 'Nakuru', work: 'Contribution and loan tracking with member statements.', placeholder: true },
];

// Partner companies we team up with (not clients). Shown as the "Partner network" on /partners
// and the home page. Add `url`/`urlDisplay` and a `blurb` once each partner signs off on the wording.
export const allies = [
  {
    name: 'ShopCrawl',
    logo: 'shopcrawl',
    tag: 'Product discovery partner',
    blurb: 'A shopping search engine that crawls online stores so buyers can find a product, compare prices and land on the shop that sells it.',
    together: 'Every shop we build ships with a clean product feed ShopCrawl can read, so your catalogue shows up where Kenyans compare before they buy.',
  },
  {
    name: 'DocRank',
    logo: 'docrank',
    tag: 'Search & AI visibility partner',
    blurb: 'A visibility platform that scores web pages and tracks where they rank on Google and how often AI assistants recommend them.',
    together: 'We run every client site through DocRank before launch and in our monthly reports, so you see how you rank, and we fix what holds you back.',
  },
];

// Total KES paid through checkouts and systems we've built for clients.
// Leave `kes` as null until you have the real figure. While it's null, /results shows `sample`
// in `npm run dev` only, and on the live site the page is a 404 and its links are hidden.
export const revenue = {
  kes: 217000,
  sample: 1250000,
  asOf: 'October 2026',
  growing: true, // adds "and counting" to the figure
};

// Placeholders show only in `npm run dev`. (`?.` because vite.config.js imports this file outside Vite.)
const isDev = Boolean(import.meta.env?.DEV);
export const visiblePartners = partners.filter((p) => !p.placeholder || isDev);
export const revenueFigure = revenue.kes ?? (isDev ? revenue.sample : null);
