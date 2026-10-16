import Seo from '../components/Seo';
import CtaBand from '../components/CtaBand';
import { Check, Phone, Card, Shield, Handshake, Users, Chart } from '../components/Icons';

const edge = [
  { icon: <Users />, title: 'Group finance', text: 'Chama and SACCO loans, interest and repayment schedules modelled the way a financial institution would.' },
  { icon: <Chart />, title: 'Marketing ROI', text: 'Campaigns measured on cost per enquiry and tested properly, so your budget goes where it pays back.' },
  { icon: <Card />, title: 'Fair, sustainable pricing', text: 'We price our own packages with the same care, so they stay affordable for you and viable for us.' },
];

const values = [
  { icon: <Phone />, title: 'Mobile first, always', text: 'Your customers live on their phones. Everything we make is designed for a phone screen first.' },
  { icon: <Card />, title: 'Get paid easily', text: 'If a customer wants to pay you, nothing should get in the way. That is why M-Pesa is built into what we make.' },
  { icon: <Shield />, title: 'Honest and clear', text: 'Published prices, written quotes and plain-English reports. No jargon, no hidden costs.' },
  { icon: <Handshake />, title: 'Partners, not vendors', text: 'We are measured by whether your business grows, not by how many features we ship.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="JBN Media is a Nairobi software and marketing company, founded by an actuarial science graduate, helping Kenyan businesses, chamas and SACCOs get found online and paid via M-Pesa."
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About JBN Media</span>
          <h1>Helping Kenyan businesses win online</h1>
          <p className="lead">
            We're a Nairobi-based software and marketing company. Our job is simple: get your business found online and
            make it easy for customers to pay you.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container split">
          <div>
            <h2>Why we started</h2>
            <p>
              Too many great Kenyan businesses are invisible online. Customers search on Google, scroll Instagram and ask
              on WhatsApp, and they end up buying from whoever shows up first.
            </p>
            <p>
              At the same time, the tools that could help are often built for other markets. They don't talk to M-Pesa,
              they're slow on a phone, or they're priced for big corporates.
            </p>
            <p>
              JBN Media brings software and marketing together for small and growing businesses: websites and systems
              built around M-Pesa, plus the content and ads that bring customers to them.
            </p>
          </div>
          <div className="about-card">
            <h3>Who we work with</h3>
            <ul className="ticks">
              <li><Check /> Shops, boutiques & online sellers</li>
              <li><Check /> Restaurants, cafés & caterers</li>
              <li><Check /> Salons, barbers & spas</li>
              <li><Check /> Clinics, pharmacies & schools</li>
              <li><Check /> Service businesses & professionals</li>
              <li><Check /> Chamas, SACCOs & community groups</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="edge">
            <div className="edge-copy">
              <span className="eyebrow eyebrow-light">The founder's edge</span>
              <h2>Where actuarial science meets your business</h2>
              <p>
                JBN Media was founded by an actuarial science graduate. Actuaries are trained to price risk, model interest
                and make decisions from data, for banks, insurers and pension funds. We use that same training for
                Kenyan businesses that can't afford to guess.
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
            <span className="eyebrow">What we believe</span>
            <h2>How we work with you</h2>
          </div>
          <div className="mini-grid">
            {values.map((v) => (
              <div key={v.title} className="mini">
                <span className="icon-box">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">In-house + partners</span>
            <h2>A small team with a big network</h2>
          </div>
          <p className="prose-center">
            Our in-house team builds the software and runs content, clips and Meta ads day to day. When a project needs more, such as video
            production, influencer campaigns or large ad budgets, we bring in specialist partner agencies and manage them
            for you. You get agency-level reach with a single, accountable point of contact.
          </p>
        </div>
      </section>

      <CtaBand title="Let's grow your business together" />
    </>
  );
}
