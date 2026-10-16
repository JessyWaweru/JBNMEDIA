export const monthlyPlans = [
  {
    id: 'online-presence',
    name: 'Online Presence',
    from: true,
    price: '8,000',
    unit: '/month',
    blurb: 'Get your business showing up where customers are looking.',
    features: [
      '12 social media posts a month (design + captions)',
      'Google Business Profile set up and kept updated',
      'WhatsApp Business catalog',
      "Monthly one-page report: reach, enquiries, what's next",
    ],
    wa: "Hi, I'm interested in the Online Presence plan (from KES 8,000/month)",
  },
  {
    id: 'growth',
    name: 'Growth',
    from: true,
    price: '15,000',
    unit: '/month',
    featured: true,
    badge: 'Most popular',
    blurb: 'More content, paid ads tracked by the numbers, and your website kept fresh.',
    features: [
      'Everything in Online Presence',
      '20 posts a month plus short videos',
      'Ad campaign management, measured by cost per enquiry (ad spend paid separately)',
      'Website updates included',
    ],
    wa: "Hi, I'm interested in the Growth plan (from KES 15,000/month)",
  },
  {
    id: 'content-clips',
    name: 'Content Clips',
    from: true,
    price: '6,000',
    unit: '/month',
    badge: 'New',
    blurb: 'Turn your long videos into short clips that get watched and shared.',
    features: [
      '15 short clips a month, cut from your videos, lives or podcasts',
      'Vertical format for TikTok, Reels, YouTube Shorts and WhatsApp Status',
      'Captions, strong hooks and your branding on every clip',
      'Need more? Up to 20 clips a month for up to KES 10,000',
    ],
    wa: "Hi, I'm interested in the Content Clips package (from KES 6,000/month)",
  },
];

export const projects = [
  {
    id: 'website',
    name: 'Business Website',
    from: true,
    price: '10,000',
    unit: 'one-off',
    featured: true,
    badge: 'Best value',
    blurb: 'A professional website that brings customers to your WhatsApp.',
    features: [
      'Up to 5 pages, mobile-friendly, your own domain',
      'WhatsApp button and enquiry form',
      'Set up so Google can find and list it',
      'Add M-Pesa payments anytime with M-Pesa Integration',
    ],
    wa: "Hi, I'm interested in a Business Website (from KES 10,000)",
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
      'Payment confirmations and records that reconcile to the shilling',
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
    badge: 'Actuarial-grade',
    blurb: 'Loan maths designed by an actuarial science graduate. Stop chasing spreadsheets.',
    features: [
      'Member contributions tracked automatically',
      'Loans with correct interest schedules (reducing balance or flat rate)',
      'M-Pesa contributions and member statements',
    ],
    wa: "Hi, I'm interested in a Chama / SACCO System (from KES 40,000)",
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    from: true,
    price: '10,000',
    unit: 'one-off',
    blurb: 'Got a website that is broken, slow or out of date? We fix it, even if we did not build it.',
    features: [
      'Fix errors, broken pages and forms',
      'Speed, security and mobile fixes',
      'Content, price and design updates',
      'Clear quote after a free check of your site',
    ],
    wa: "Hi, I'd like Website Maintenance for my existing website (from KES 10,000)",
  },
];

export const care = {
  id: 'website-care',
  name: 'Website Care',
  from: true,
  price: '3,000',
  unit: '/month',
  blurb: 'Hosting, updates and fixes, so you never have to think about it.',
  features: ['Hosting', 'Content updates', 'Fixes and security updates'],
  wa: "Hi, I'm interested in Website Care (from KES 3,000/month)",
};

export const terms = [
  { title: '50% deposit to start', text: 'The balance is paid on handover, once you are happy.' },
  { title: 'Pay via M-Pesa', text: 'Simple, fast and you get a confirmation every time.' },
  { title: 'Month to month', text: 'Monthly plans have no contract. Cancel anytime.' },
];

export const faqs = [
  {
    q: 'Do I need to already have a domain name?',
    a: 'No. We can register one for you and set everything up. If you already have one, we will use it.',
  },
  {
    q: 'Why does an actuarial science background matter to my business?',
    a: 'Actuarial science is the study of money, interest, risk and probability: the same maths banks, insurers and pension funds rely on. For you it means Chama and SACCO loans calculated correctly to the shilling, M-Pesa records that reconcile, and marketing judged on real numbers like cost per enquiry instead of likes.',
  },
  {
    q: 'Do I need to organise photo or video shoots?',
    a: 'No. We create your content from photos and videos you already have (just send them on WhatsApp), plus designed graphics and AI-assisted visuals and video. If you want a professional shoot, we can arrange one through a partner agency.',
  },
  {
    q: 'Why do prices say "from"?',
    a: 'Every business is a little different. The "from" price covers the standard package. If you need more pages, features or integrations, we will give you a clear fixed quote before we start.',
  },
  {
    q: 'Which M-Pesa options do you support?',
    a: 'STK Push (the customer gets a prompt on their phone to enter their PIN), Till numbers (Buy Goods) and Paybill. We help you get set up with Safaricom if you are not yet.',
  },
  {
    q: 'Is the ad spend included in the Growth plan?',
    a: 'No. The plan covers planning, creating and managing your campaigns. The ad budget itself is paid directly to Meta, so you stay in control of how much you spend. Every month we show you what each enquiry cost, so you know exactly what your money is doing.',
  },
  {
    q: 'What is Content Clips?',
    a: 'Send us your long videos, such as Instagram or TikTok lives, YouTube videos, podcasts, church services or event recordings. We cut out the best moments and turn them into short, captioned vertical clips ready to post. 15 clips a month from KES 6,000, or up to 20 clips for up to KES 10,000.',
  },
  {
    q: "What's the difference between Website Maintenance and Website Care?",
    a: 'Website Maintenance is a one-off job to fix or update any existing website, including ones we did not build. Website Care is an ongoing monthly plan for hosting, updates and fixes on a site we look after.',
  },
  {
    q: 'Can I cancel a monthly plan?',
    a: 'Yes. Monthly plans run month to month. Just let us know before your next month starts.',
  },
  {
    q: 'Who does the marketing work?',
    a: 'Our in-house team handles content, clips and Meta ads day to day. For bigger jobs such as professional shoots, influencer work or other ad platforms, we bring in trusted partner agencies and manage them for you, so you still have one point of contact.',
  },
];
