import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE } from './src/config.js';
import { allies, goherbal, goherbalWhatsapp, revenue } from './src/data/work.js';
import { FOUNDER, companyFaqs, lowerFirst, faqJsonLd, goherbalJsonLd, siteJsonLd } from './src/data/company.js';
import { aiFaqs } from './src/data/plans.js';
import { services } from './src/data/services.js';

// Page copy uses a non-breaking hyphen in "M-Pesa"; plain text files and meta tags get the normal one.
const plain = (s) => s.replace(/\u2011/g, '-');

// Link-preview crawlers (WhatsApp, Facebook, X, LinkedIn) don't run JavaScript, so they only see the
// tags in the HTML file. For pages that need their own preview, write a copy of index.html with
// those tags filled in at dist/<route>/index.html. render.yaml points each route at its file.
const previews = [
  {
    route: goherbal.path,
    title: `${goherbal.seoTitle} | JBN Media`,
    description: goherbal.seoDescription,
    type: 'article',
    image: { src: goherbal.poster, ...goherbal.posterSize, alt: goherbal.posterAlt },
    jsonLd: goherbalJsonLd(),
  },
  {
    route: goherbalWhatsapp.path,
    title: `${goherbalWhatsapp.seoTitle} | JBN Media`,
    description: goherbalWhatsapp.seoDescription,
    type: 'article',
    image: { src: goherbalWhatsapp.poster, ...goherbalWhatsapp.posterSize, alt: goherbalWhatsapp.posterAlt },
  },
  {
    route: '/about',
    title: 'About us | JBN Media',
    description: `JBN Media is a Kenyan AI agency founded by ${FOUNDER.name} (${FOUNDER.role}), building AI assistants, websites and M-Pesa payments for Kenyan businesses, chamas and SACCOs.`,
    jsonLd: faqJsonLd(),
  },
  {
    route: '/results',
    title: 'Results | JBN Media',
    description: `Over KES ${revenue.kes?.toLocaleString('en-KE')} and counting paid through the checkouts and payment systems JBN Media has built for Kenyan businesses.`,
  },
  {
    route: '/partners',
    title: 'Our partners | JBN Media',
    description: "JBN Media's partner network, including ShopCrawl and DocRank, and the Kenyan businesses we build AI assistants, websites and M-Pesa payments for, like GoHerbal.",
  },
];

// "<" escaped so no string can close the script tag.
const ldScript = (data, attrs = '') => `<script type="application/ld+json"${attrs}>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

// The company/founder/website graph goes into every page, in dev too.
function structuredData() {
  return {
    name: 'structured-data',
    transformIndexHtml: (html) => html.replace('</head>', `    ${ldScript(siteJsonLd())}\n  </head>`),
  };
}

// A plain-text summary for AI assistants (https://llmstxt.org).
function llmsTxt() {
  const page = (label, route, note) => `- [${label}](${SITE.url}${route}): ${note}`;
  return [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} is a Kenyan AI agency founded by ${FOUNDER.name}, its ${FOUNDER.role}. It builds WhatsApp and website AI assistants that answer customers and take M-Pesa orders, plus websites, M-Pesa payments, Chama/SACCO systems, document automation and marketing for Kenyan businesses.`,
    '',
    '## Services and prices (KES)',
    ...services.map((s) => plain(`- ${s.title}: ${s.prices.map((p) => `${p.label} ${p.amount}`).join('; ')}${s.note ? `. ${s.note}` : ''}`)),
    '',
    '## Key facts',
    `- Founder and CEO: ${FOUNDER.name}`,
    ...(revenue.kes ? [`- Revenue paid through systems JBN Media built: over KES ${revenue.kes.toLocaleString('en-KE')} and counting${revenue.asOf ? ` (as of ${revenue.asOf})` : ''}`] : []),
    ...allies.map((a) => `- Partner: ${a.name}, ${lowerFirst(a.tag)}. ${a.name} is ${lowerFirst(a.blurb)}`),
    `- Built ${goherbal.name} (${goherbal.url}), an online herbal shop with M-Pesa and card checkout`,
    `- Built the ${goherbalWhatsapp.name}: it answers customers in English, Swahili or Sheng, prices rider delivery from a location pin and takes M-Pesa payments in the chat`,
    `- Contact: ${SITE.email}, WhatsApp ${SITE.whatsappDisplay}`,
    '',
    '## Common questions',
    ...[...companyFaqs, ...aiFaqs].flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Pages',
    page('Pricing', '/pricing', 'Published package prices in KES'),
    page('Services', '/services', 'WhatsApp and website AI assistants, websites, M-Pesa payments, Chama/SACCO systems, document automation and marketing'),
    page('GoHerbal case study', goherbal.path, goherbal.seoDescription),
    page('GoHerbal WhatsApp assistant case study', goherbalWhatsapp.path, goherbalWhatsapp.seoDescription),
    page('Partners', '/partners', 'Partner network and clients'),
    page('Results', '/results', 'Revenue paid through systems we built'),
    page('About', '/about', `Company story and founder, ${FOUNDER.name}`),
    page('Contact', '/contact', 'WhatsApp, phone and email'),
    '',
  ].join('\n');
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setTag(html, attr, key, value) {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${key}">`);
  return html.replace(re, `$1${escape(value)}$2`);
}

function previewPages() {
  return {
    name: 'preview-pages',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist');
      const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
      for (const p of previews) {
        const url = `${SITE.url}${p.route}`;
        let html = base.replace(/<title>[^<]*<\/title>/, `<title>${escape(p.title)}</title>`);
        html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
        html = setTag(html, 'name', 'description', p.description);
        html = setTag(html, 'property', 'og:type', p.type || 'website');
        html = setTag(html, 'property', 'og:title', p.title);
        html = setTag(html, 'property', 'og:description', p.description);
        html = setTag(html, 'property', 'og:url', url);
        if (p.image) {
          html = setTag(html, 'property', 'og:image', `${SITE.url}${p.image.src}`);
          html = setTag(html, 'property', 'og:image:width', String(p.image.width));
          html = setTag(html, 'property', 'og:image:height', String(p.image.height));
          html = setTag(html, 'property', 'og:image:alt', p.image.alt);
        }
        if (p.jsonLd) html = html.replace('</head>', `    ${ldScript({ '@context': 'https://schema.org', ...p.jsonLd }, ' data-page-ld')}\n  </head>`);
        const out = path.join(dist, p.route, 'index.html');
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, html);
      }
      fs.writeFileSync(path.join(dist, 'llms.txt'), llmsTxt());
    },
  };
}

export default defineConfig({
  plugins: [react(), structuredData(), previewPages()],
});
