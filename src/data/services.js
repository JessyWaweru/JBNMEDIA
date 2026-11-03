// The services list on the home page, in the order we sell them. Kept free of JSX and browser
// globals so vite.config.js can list the same prices in llms.txt. Icons are picked by `icon` in ServiceCard.
import { MPESA } from './work.js';
import { monthlyPlans } from './plans.js';

const clips = monthlyPlans.find((p) => p.id === 'content-clips');

export const services = [
  {
    id: 'whatsapp-assistant',
    icon: 'whatsapp',
    lead: true,
    badge: 'Start here',
    title: 'WhatsApp AI assistant',
    text: 'Replies to your customers on WhatsApp straight away, day or night, so you stop losing sales to slow replies.',
    points: [
      'Answers questions about your products and prices',
      'Takes orders in the chat',
      `Sends the ${MPESA} prompt to the customer’s phone`,
      'Hands the chat to you when it gets stuck',
      'Weekly summary of what your customers asked',
    ],
    prices: [
      { label: 'One-time setup', amount: 'KES 30,000' },
      { label: 'Every month', amount: 'KES 6,000' },
    ],
    wa: "Hi JBN Media, I'd like a WhatsApp AI assistant for my business (KES 30,000 setup + KES 6,000/month).",
  },
  {
    id: 'website-chat',
    icon: 'chat',
    title: 'Website AI chat',
    text: 'The same assistant as a chat bubble on your website, so visitors get answers and order without leaving.',
    points: ['Answers, orders and payment prompts, right on your site', 'Hands the chat to you when it gets stuck'],
    prices: [
      { label: 'One-time setup', amount: 'KES 15,000' },
      { label: 'Every month', amount: 'KES 3,000' },
    ],
    wa: "Hi JBN Media, I'd like the AI chat on my website (KES 15,000 setup + KES 3,000/month).",
  },
  {
    id: 'ai-marketing',
    icon: 'megaphone',
    title: 'AI marketing retainer',
    text: 'Posts, captions and short video clips for your pages, made faster with AI and checked by a person before anything goes out.',
    points: ['Posts and captions for Facebook, Instagram and TikTok', 'Short video clips', 'Every post checked by a person'],
    prices: [{ label: 'Every month', amount: 'KES 8,000 to 15,000' }],
    link: { to: '/pricing#monthly', label: 'Compare the plans' },
    wa: "Hi JBN Media, I'm interested in the AI marketing retainer (KES 8,000 to 15,000/month).",
  },
  {
    id: 'websites',
    icon: 'globe',
    title: `Websites, ${MPESA} payments and chama systems`,
    text: `A website that sends customers to your WhatsApp, ${MPESA} payments on the site you already have, or a system that tracks your chama’s contributions and loans.`,
    prices: [
      { label: 'Website', amount: 'from KES 25,000' },
      { label: `${MPESA} payments on your site`, amount: 'KES 12,000' },
      { label: 'Chama management system', amount: 'KES 40,000' },
    ],
    note: 'Each can add an AI assistant.',
    link: { to: '/services#software', label: 'See what’s included' },
    wa: "Hi JBN Media, I'd like to talk about a website, M-Pesa payments or a chama system.",
  },
  {
    id: 'document-automation',
    icon: 'report',
    title: 'Document and statement automation',
    text: `Stop typing receipts into a spreadsheet. We pull the numbers from your receipts, invoices or ${MPESA} statements into a sheet or dashboard.`,
    points: [`Receipts, invoices and ${MPESA} statements`, 'Into a sheet or dashboard you can read at a glance'],
    prices: [{ label: 'Price', amount: 'from KES 25,000' }],
    wa: "Hi JBN Media, I'd like to automate my receipts, invoices or M-Pesa statements (from KES 25,000).",
  },
  {
    id: 'clips',
    icon: 'video',
    title: 'Clip bundles for creators',
    text: clips.blurb,
    points: clips.features.slice(0, 3),
    prices: [
      { label: '15 clips a month', amount: `from KES ${clips.price}` },
      { label: 'Up to 20 clips a month', amount: 'up to KES 10,000' },
    ],
    wa: clips.wa,
  },
];

export const serviceById = (id) => services.find((s) => s.id === id);
