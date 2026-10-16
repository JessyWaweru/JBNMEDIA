import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import PlanCard from '../components/PlanCard';
import CtaBand from '../components/CtaBand';
import Faq from '../components/Faq';
import { monthlyPlans, projects, faqs } from '../data/plans';
import { WhatsAppIcon, Arrow, Check, Code, Megaphone, Phone, Card, Map, Chart, Handshake, Shield, Users } from '../components/Icons';

const pillars = [
  {
    icon: <Code />,
    title: 'Software for your business',
    text: 'Websites that take M-Pesa, payment integrations for your existing systems, and Chama / SACCO software with loan maths built by an actuarial science graduate.',
    points: ['Business websites with M-Pesa', 'M-Pesa STK Push, Till & Paybill', 'Chama / SACCO systems'],
    link: '/services#software',
  },
  {
    icon: <Megaphone />,
    title: 'Marketing that brings enquiries',
    text: 'Social media content, short-form clips, Google Business Profile, WhatsApp catalogs and Meta ads, judged on the enquiries they bring in, not likes.',
    points: ['Social media posts & short-form clips', 'Google Business Profile', 'Facebook & Instagram (Meta) ads'],
    link: '/services#marketing',
  },
];

const edge = [
  {
    icon: <Users />,
    title: 'Chama & SACCO loans, right to the shilling',
    text: 'Reducing balance, flat rate and repayment schedules modelled properly, so members trust the numbers.',
  },
  {
    icon: <Chart />,
    title: 'Marketing judged on data, not likes',
    text: 'We track cost per enquiry and test what works, then put your budget where it pays back.',
  },
  {
    icon: <Card />,
    title: 'Payment records that reconcile',
    text: 'Every M-Pesa payment is matched and recorded, so your books and your till always agree.',
  },
];

const steps = [
  { n: '01', title: 'Chat on WhatsApp', text: 'Tell us about your business and what you need. No forms, no long meetings.' },
  { n: '02', title: 'Get a clear quote', text: 'You get a fixed price and timeline in writing before anything starts.' },
  { n: '03', title: 'Pay 50% to start', text: 'Pay the deposit via M-Pesa and we get to work right away.' },
  { n: '04', title: 'Launch & grow', text: 'We hand over, you pay the balance, and we keep helping you grow.' },
];

const reasons = [
  { icon: <Phone />, title: 'Built for phones', text: 'Your customers are on their phones, so everything we build works perfectly on mobile first.' },
  { icon: <Card />, title: 'M-Pesa built in', text: 'Get paid the way Kenyans actually pay. STK Push, Till or Paybill, with records you can trust.' },
  { icon: <Map />, title: 'Local & reachable', text: 'Nairobi-based and on WhatsApp. You talk to the people doing the work.' },
  { icon: <Shield />, title: 'Clear, fair pricing', text: 'Published prices, 50% to start, monthly plans you can cancel anytime.' },
  { icon: <Chart />, title: 'Numbers done properly', text: 'Founded by an actuarial science graduate. Loans, payments and ad results are calculated, not guessed.' },
  { icon: <Handshake />, title: 'One point of contact', text: 'Need bigger campaigns? We bring in partner agencies and manage them for you.' },
];

export default function Home() {
  return (
    <>
      <Seo description="JBN Media gets Nairobi businesses found online and paid via M-Pesa. Websites, M-Pesa integration, Chama/SACCO systems and monthly social media marketing." />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Software & marketing · Nairobi</span>
            <h1>
              Get your business <span className="hl">found online</span> and <span className="hl-gold">paid via M-Pesa</span>.
            </h1>
            <p className="lead">
              We build websites and business systems with M-Pesa built in, and we run the social media and ads that bring
              customers to your door.
            </p>
            <div className="hero-actions">
              <WaButton size="lg" message="Hi JBN Media, I'd like to get my business online.">
                Chat on WhatsApp
              </WaButton>
              <Link to="/pricing" className="btn btn-outline btn-lg">
                See pricing <Arrow />
              </Link>
            </div>
            <ul className="hero-ticks">
              <li><Check /> Websites from KES 10,000</li>
              <li><Check /> Marketing from KES 8,000/month</li>
              <li><Check /> Cancel monthly plans anytime</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="mock-site">
                  <div className="mock-bar"><span className="mock-dot" /> yourbusiness.co.ke</div>
                  <div className="mock-hero">
                    <b>Your Business</b>
                    <span>Order lunch, pay with M-Pesa</span>
                  </div>
                  <div className="mock-row"><span>Pilau & kachumbari</span><b>KES 450</b></div>
                  <div className="mock-row"><span>Fish & ugali</span><b>KES 650</b></div>
                  <div className="mock-pay">Pay with M-Pesa</div>
                </div>
              </div>
            </div>
            <div className="float-card float-pay">
              <span className="fc-icon fc-green"><Check /></span>
              <div><b>Payment received</b><small>KES 1,100 · M-Pesa</small></div>
            </div>
            <div className="float-card float-msg">
              <span className="fc-icon fc-wa"><WhatsAppIcon size={18} /></span>
              <div><b>New enquiry</b><small>"Do you deliver to Westlands?"</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-inner">
          <span>M-Pesa STK Push</span>
          <span>Till & Paybill</span>
          <span>Google Business</span>
          <span>WhatsApp Business</span>
          <span>Facebook & Instagram</span>
          <span>TikTok</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>One team for your software and your marketing</h2>
            <p>Build the tools that run your business, then get customers using them.</p>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.title} className="pillar">
                <span className="icon-box">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="ticks">
                  {p.points.map((pt) => (<li key={pt}><Check /> {pt}</li>))}
                </ul>
                <Link to={p.link} className="text-link">Learn more <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="edge">
            <div className="edge-copy">
              <span className="eyebrow eyebrow-light">Our unfair advantage</span>
              <h2>Built by an actuarial science graduate</h2>
              <p>
                Actuarial science is the maths of money, interest and risk that banks, insurers and pension funds run on.
                We bring that same discipline to small businesses and groups.
              </p>
            </div>
            <ul className="edge-list">
              {edge.map((e) => (
                <li key={e.title}>
                  <span className="icon-box icon-box-dark">{e.icon}</span>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Popular packages</span>
            <h2>Simple prices. No surprises.</h2>
            <p>Tap any package to chat with us about it on WhatsApp.</p>
          </div>
          <div className="plans plans-3">
            <PlanCard plan={monthlyPlans[0]} />
            <PlanCard plan={projects[0]} />
            <PlanCard plan={monthlyPlans[1]} />
          </div>
          <div className="center mt-32">
            <Link to="/pricing" className="btn btn-outline">View all pricing <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From first message to launch</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-light">Why JBN Media</span>
            <h2>Built for how Kenyan businesses really work</h2>
          </div>
          <div className="reasons">
            {reasons.map((r) => (
              <div key={r.title} className="reason">
                <span className="icon-box icon-box-dark">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked</h2>
          </div>
          <Faq items={faqs.slice(0, 4)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
