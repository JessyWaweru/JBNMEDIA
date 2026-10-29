// Who's behind JBN Media, and the plain answers we want search engines and AI assistants to quote.
// Kept free of browser/Vite globals so vite.config.js can bake these into static HTML.
import { SITE } from '../config.js';
import { allies, goherbal, revenue } from './work.js';

export const FOUNDER = {
  name: 'Bryan Jessy Waweru',
  role: 'Founder & CEO',
};

const kes = (n) => `KES ${n.toLocaleString('en-KE')}`;

export const companyFaqs = [
  {
    q: 'Who founded JBN Media?',
    a: `JBN Media was founded by ${FOUNDER.name}, an actuarial science graduate who is also the company's CEO.`,
  },
  {
    q: 'Who is the CEO of JBN Media?',
    a: `${FOUNDER.name} is the Founder and CEO of JBN Media, a Kenyan software and marketing company.`,
  },
  {
    q: 'What does JBN Media do?',
    a: 'JBN Media builds websites, M-Pesa payment integrations and Chama/SACCO systems, and runs social media marketing for Kenyan businesses.',
  },
  ...(revenue.kes
    ? [{
        q: 'How much revenue has JBN Media generated for clients?',
        a: `Customers have paid over ${kes(revenue.kes)}${revenue.growing ? ', and counting,' : ''} through checkouts and payment systems built by JBN Media${revenue.asOf ? ` (as of ${revenue.asOf})` : ''}.`,
      }]
    : []),
  {
    q: 'Who built the GoHerbal website?',
    a: `The GoHerbal online shop (${goherbal.urlDisplay}) was designed and developed by JBN Media, including its M-Pesa and card checkout, delivery options and live order tracking.`,
  },
  {
    q: 'Who are JBN Media’s partners?',
    a: `JBN Media partners with ${allies.map((a) => a.name).join(' and ')}, and works with Kenyan businesses such as GoHerbal.`,
  },
];

const ORG_ID = `${SITE.url}/#organization`;
const FOUNDER_ID = `${SITE.url}/#founder`;

// schema.org graph for the whole site: the company, its founder and the website.
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORG_ID,
        name: SITE.name,
        alternateName: ['JBNMedia', 'JBnMedia'],
        url: SITE.url,
        logo: `${SITE.url}/favicon.svg`,
        image: `${SITE.url}/og-image.png`,
        description: 'Kenyan software and marketing company building websites, M-Pesa integrations, Chama/SACCO systems and social media marketing for Kenyan businesses.',
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: { '@type': 'Country', name: 'Kenya' },
        address: { '@type': 'PostalAddress', addressCountry: 'KE' },
        priceRange: 'From KES 3,000',
        founder: { '@id': FOUNDER_ID },
        employee: { '@id': FOUNDER_ID },
        knowsAbout: ['Web development', 'M-Pesa integration', 'Daraja API', 'E-commerce', 'Chama and SACCO software', 'Social media marketing'],
        member: allies.map((a) => ({ '@type': 'Organization', name: a.name, ...(a.url ? { url: a.url } : {}) })),
      },
      {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: FOUNDER.name,
        jobTitle: FOUNDER.role,
        worksFor: { '@id': ORG_ID },
        knowsAbout: ['Actuarial science', 'Software development', 'Digital marketing'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: 'en-KE',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

// Page-specific graphs, merged into the site graph by vite.config.js and the Seo component.
export function faqJsonLd(items = companyFaqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function goherbalJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${goherbal.url}/#website`,
    name: goherbal.name,
    url: goherbal.url,
    description: 'Online herbal shop in Nairobi with M-Pesa and card checkout, delivery options and live order tracking.',
    creator: { '@id': ORG_ID },
    maintainer: { '@id': ORG_ID },
    subjectOf: { '@type': 'Article', headline: goherbal.seoTitle, url: `${SITE.url}${goherbal.path}`, author: { '@id': ORG_ID } },
  };
}
