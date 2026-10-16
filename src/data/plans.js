export const monthlyPlans = [
  {
    id: 'online-presence',
    name: 'Online Presence',
    price: '8,000',
    unit: '/month',
    blurb: 'Get your business showing up where customers are looking.',
    features: [
      '12 social media posts a month (design + captions)',
      'Google Business Profile set up and kept updated',
      'WhatsApp Business catalog',
      "Monthly one-page report: reach, enquiries, what's next",
    ],
    wa: "Hi, I'm interested in the Online Presence plan (KES 8,000/month)",
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '15,000',
    unit: '/month',
    featured: true,
    badge: 'Most popular',
    blurb: 'More content, paid ads and your website kept fresh.',
    features: [
      'Everything in Online Presence',
      '20 posts a month plus short videos',
      'Ad campaign management (ad spend paid separately)',
      'Website updates included',
    ],
    wa: "Hi, I'm interested in the Growth plan (KES 15,000/month)",
  },
];

export const projects = [
  {
    id: 'website',
    name: 'Business Website with M-Pesa',
    from: true,
    price: '25,000',
    unit: 'one-off',
    featured: true,
    badge: 'Best value',
    blurb: 'A professional site that takes payments from day one.',
    features: [
      'Up to 5 pages, mobile-friendly, your own domain',
      'WhatsApp button and enquiry form',
      'M-Pesa payments (STK Push or Till)',
      'Ready in 2 to 3 weeks',
    ],
    wa: "Hi, I'm interested in the Business Website with M-Pesa (from KES 25,000)",
  },
  {
    id: 'mpesa',
    name: 'M-Pesa Integration',
    from: true,
    price: '12,000',
    unit: 'one-off',
    blurb: 'Already have a website or app? Start collecting M-Pesa.',
    features: [
      'Add M-Pesa payments to your existing website or app',
      'Payment confirmations and records',
      'Ready in about 1 week',
    ],
    wa: "Hi, I'm interested in M-Pesa Integration for my website/app (from KES 12,000)",
  },
  {
    id: 'chama',
    name: 'Chama / SACCO System',
    from: true,
    price: '40,000',
    unit: 'one-off',
    blurb: 'Stop chasing spreadsheets. Run your group properly.',
    features: [
      'Member contributions tracked automatically',
      'Loans with correct interest schedules (reducing balance or flat rate)',
      'M-Pesa contributions and member statements',
    ],
    wa: "Hi, I'm interested in a Chama / SACCO System (from KES 40,000)",
  },
];

export const care = {
  id: 'website-care',
  name: 'Website Care',
  price: '3,000',
  unit: '/month',
  blurb: 'Hosting, updates and fixes, so you never have to think about it.',
  features: ['Hosting', 'Content updates', 'Fixes and security updates'],
  wa: "Hi, I'm interested in Website Care (KES 3,000/month)",
};

export const terms = [
  { title: '50% deposit to start', text: 'The balance is paid on handover, once you are happy.' },
  { title: 'Pay via M-Pesa', text: 'Simple, fast and you get a confirmation every time.' },
  { title: 'Month to month', text: 'Monthly plans have no contract. Cancel anytime.' },
];

export const faqs = [
  {
    q: 'Do I need to already have a domain name?',
    a: 'No. We can register a .co.ke or .com for you and set everything up. If you already have one, we will use it.',
  },
  {
    q: 'Is the ad spend included in the Growth plan?',
    a: 'No. The plan covers planning, creating and managing your campaigns. The ad budget itself is paid directly to Meta or Google, so you stay in control of how much you spend.',
  },
  {
    q: 'Which M-Pesa options do you support?',
    a: 'STK Push (the customer gets a prompt on their phone to enter their PIN), Till numbers (Buy Goods) and Paybill. We help you get set up with Safaricom if you are not yet.',
  },
  {
    q: 'Why do some prices say "from"?',
    a: 'Every business is a little different. The "from" price covers the standard package. If you need more pages, features or integrations, we will give you a clear fixed quote before we start.',
  },
  {
    q: 'Can I cancel a monthly plan?',
    a: 'Yes. Monthly plans run month to month. Just let us know before your next month starts.',
  },
  {
    q: 'Who does the marketing work?',
    a: 'Our in-house team handles content and day-to-day management. For bigger campaigns such as video shoots, influencer work or large ad budgets, we bring in trusted partner agencies and manage them for you, so you still have one point of contact.',
  },
];
