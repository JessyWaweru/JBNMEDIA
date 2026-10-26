// Case studies, partners and results. Kept free of browser/Vite globals so vite.config.js
// can read it too and bake each page's link-preview tags into static HTML.

// "M-Pesa" with a non-breaking hyphen (U+2011), for headings and buttons so it never splits across lines.
export const MPESA = 'M‑Pesa';

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
  confirmed: '/case-studies/goherbal/goherbal-order-confirmed.webp',
  confirmedSize: { width: 390, height: 844 },
};

// The businesses we work with. Entries marked `placeholder` are examples to show the layout:
// they render in `npm run dev` only and never on the live site. Replace them with real clients.
export const partners = [
  {
    name: 'GoHerbal',
    sector: 'Herbal teas & wellness',
    location: 'Nairobi',
    work: 'Online shop with M-Pesa and card checkout, delivery options and live order tracking.',
    url: goherbal.url,
    urlDisplay: goherbal.urlDisplay,
    caseStudy: goherbal.path,
  },
  { name: 'Sample Salon & Spa', sector: 'Beauty', location: 'Westlands', work: 'Booking website with M-Pesa deposits.', placeholder: true },
  { name: 'Sample Hardware Ltd', sector: 'Retail', location: 'Thika', work: 'Google Business Profile and monthly social media.', placeholder: true },
  { name: 'Sample Welfare Chama', sector: 'Chama', location: 'Nakuru', work: 'Contribution and loan tracking with member statements.', placeholder: true },
];

// Total KES paid through checkouts and systems we've built for clients.
// Leave `kes` as null until you have the real figure. While it's null, /results shows `sample`
// in `npm run dev` only, and on the live site the page is a 404 and its links are hidden.
export const revenue = {
  kes: null,
  sample: 1250000,
  asOf: null, // e.g. 'October 2026'
};

// Placeholders show only in `npm run dev`. (`?.` because vite.config.js imports this file outside Vite.)
const isDev = Boolean(import.meta.env?.DEV);
export const visiblePartners = partners.filter((p) => !p.placeholder || isDev);
export const revenueFigure = revenue.kes ?? (isDev ? revenue.sample : null);
