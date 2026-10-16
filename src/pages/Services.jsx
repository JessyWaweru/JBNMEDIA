import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import CtaBand from '../components/CtaBand';
import { Arrow, Check, Globe, Card, Users, Megaphone, Map, Chart, Handshake, Wrench, Video, Report, Shield } from '../components/Icons';

const software = [
  {
    id: 'websites',
    icon: <Globe />,
    title: 'Business websites',
    price: 'from KES 10,000',
    text: 'A fast, professional website on your own domain that works perfectly on phones and sends customers straight to your WhatsApp. Add M-Pesa payments whenever you are ready.',
    points: ['Up to 5 pages, mobile-friendly', 'Your own domain', 'WhatsApp button and enquiry form', 'Optional M-Pesa payments (from KES 12,000)', 'Ready in 2 to 3 weeks'],
    wa: "Hi, I'm interested in a Business Website (from KES 10,000)",
  },
  {
    id: 'mpesa',
    icon: <Card />,
    title: 'M-Pesa integration',
    price: 'from KES 12,000',
    text: 'Already have a website, online shop or app? We connect it to M-Pesa so customers can pay in a few taps and you get instant confirmation.',
    points: ['STK Push, Till (Buy Goods) or Paybill', 'Automatic payment confirmations', 'Payment records you can download', 'Ready in about 1 week'],
    wa: "Hi, I'm interested in adding M-Pesa to my website or app",
  },
  {
    id: 'chama',
    icon: <Users />,
    title: 'Chama & SACCO systems',
    price: 'from KES 40,000',
    text: 'Replace the notebook and spreadsheet with a system that tracks every contribution and gives members their own statements. The loan maths is designed by an actuarial science graduate, so interest and repayment schedules are right to the shilling.',
    points: ['Automatic contribution tracking', 'Loans on reducing balance or flat rate', 'Correct interest and repayment schedules', 'M-Pesa contributions', 'Member statements'],
    wa: "Hi, I'm interested in a Chama / SACCO System",
  },
  {
    id: 'custom',
    icon: <Wrench />,
    title: 'Custom business software',
    price: 'from KES 50,000',
    text: 'Booking systems, stock and sales tracking, school fee portals, customer dashboards. If your business runs on it, we can build it.',
    points: ['Built around how you already work', 'Works on phone and computer', 'M-Pesa where you need it', 'Fixed quote before we start'],
    wa: "Hi, I'd like a quote for custom software for my business (from KES 50,000)",
  },
  {
    id: 'maintenance',
    icon: <Shield />,
    title: 'Website maintenance',
    price: 'from KES 10,000',
    text: 'Website broken, slow, insecure or out of date? We fix and update existing websites, including ones we did not build.',
    points: ['Fix errors, broken pages and forms', 'Speed, security and mobile fixes', 'Content, price and design updates', 'Free check of your site before we quote'],
    wa: "Hi, I'd like Website Maintenance for my existing website (from KES 10,000)",
  },
];

const marketing = [
  { icon: <Megaphone />, title: 'Social media management', text: 'Designed posts, captions and short videos for Facebook, Instagram and TikTok, made from photos you send us, graphics and AI visuals. No shoots needed.' },
  { icon: <Map />, title: 'Google Business Profile', text: 'Show up on Google Maps and search when people nearby look for what you sell, with photos, hours and reviews.' },
  { icon: <Card />, title: 'WhatsApp Business catalog', text: 'Your products and prices neatly set up in WhatsApp so customers can browse and order in the chat.' },
  { icon: <Video />, title: 'Content clips', text: 'We cut your lives, videos and podcasts into short captioned clips for TikTok, Reels, Shorts and WhatsApp Status. From KES 6,000/month for 15 clips.' },
  { icon: <Chart />, title: 'Meta ad campaigns', text: 'Targeted Facebook and Instagram ads. We test, measure cost per enquiry and move budget to what works, the way an actuarial mind treats money.' },
  { icon: <Report />, title: 'Monthly reports', text: 'A one-page report every month in plain English: reach, enquiries, cost per enquiry and what we will do next. Real analysis, not screenshots of likes.' },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Business websites, M-Pesa integration, Chama/SACCO systems, custom software, social media management, Google Business Profile and ad campaigns for Kenyan businesses."
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Software and marketing, under one roof</h1>
          <p className="lead">
            We build the digital tools your business runs on, then help customers find them. One team, one WhatsApp chat.
          </p>
          <nav className="pill-nav" aria-label="Jump to section">
            <a href="#software">Software</a>
            <a href="#marketing">Marketing</a>
            <a href="#partners">Partner agencies</a>
          </nav>
        </div>
      </section>

      <section className="section pt-0" id="software">
        <div className="container">
          <div className="group-head">
            <h2>Software for your business</h2>
            <p>Built for Kenyan businesses, with M-Pesa at the centre.</p>
          </div>
          <div className="services">
            {software.map((s) => (
              <article key={s.id} id={s.id} className="service">
                <div className="service-top">
                  <span className="icon-box">{s.icon}</span>
                  <span className="service-price">{s.price}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="ticks">
                  {s.points.map((p) => (<li key={p}><Check /> {p}</li>))}
                </ul>
                <WaButton message={s.wa} className="btn-block mt-auto">Ask about this</WaButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="marketing">
        <div className="container">
          <div className="group-head">
            <h2>Marketing that brings enquiries</h2>
            <p>
              Available as monthly plans from KES 8,000. You get a one-page report every month showing reach, enquiries and
              what we'll do next.
            </p>
          </div>
          <div className="mini-grid mini-grid-3">
            {marketing.map((m) => (
              <div key={m.title} className="mini">
                <span className="icon-box">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <div className="center mt-32">
            <Link to="/pricing#monthly" className="btn btn-primary">See marketing plans <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Partner agency network</span>
              <h2>Bigger campaigns, same single point of contact</h2>
              <p>
                Some jobs need specialists: a professional video shoot, an influencer campaign, radio, outdoor or a large
                paid-ads budget. For these we work with trusted marketing agencies in our network.
              </p>
              <p>
                You don't have to find, brief or chase anyone. We match you with the right partner, agree the price with you
                upfront, and manage the work and reporting on your behalf.
              </p>
              <WaButton message="Hi JBN Media, I'd like to talk about a bigger marketing campaign." className="mt-16">
                Talk about a campaign
              </WaButton>
            </div>
            <div className="partner-card">
              <span className="icon-box"><Handshake /></span>
              <ul className="ticks">
                <li><Check /> Photo & video production</li>
                <li><Check /> Influencer campaigns</li>
                <li><Check /> Brand identity & logo design</li>
                <li><Check /> Google, TikTok & large-budget advertising</li>
                <li><Check /> Events & activations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Have a project in mind?" message="Hi JBN Media, I have a project in mind for my business." />
    </>
  );
}
