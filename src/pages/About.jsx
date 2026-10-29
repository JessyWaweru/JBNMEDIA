import Seo from '../components/Seo';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import CircularText from '../components/reactbits/CircularText';
import DecryptedText from '../components/reactbits/DecryptedText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import GlowCard from '../components/fx/GlowCard';
import Threads from '../components/reactbits/Threads';
import Waves from '../components/reactbits/Waves';
import { FOUNDER, companyFaqs, faqJsonLd } from '../data/company';
import { Check, Phone, Card, Shield, Handshake, Users, Chart } from '../components/Icons';

const edge = [
  { icon: <Users />, title: 'Group finance', text: 'Chama and SACCO loans, interest and repayment schedules modelled the way a financial institution would.' },
  { icon: <Chart />, title: 'Marketing ROI', text: 'Campaigns measured on cost per enquiry and tested properly, so your budget goes where it pays back.' },
  { icon: <Card />, title: 'Fair, sustainable pricing', text: 'We price our own packages with the same care, so they stay affordable for you and viable for us.' },
];

const story = [
  'Too many great Kenyan businesses are invisible online. Customers search on Google, scroll Instagram and ask on WhatsApp, and they end up buying from whoever shows up first.',
  "At the same time, the tools that could help are often built for other markets. They don't talk to M-Pesa, they're slow on a phone, or they're priced for big corporates.",
  'JBN Media brings software and marketing together for small and growing businesses: websites and systems built around M-Pesa, plus the content and ads that bring customers to them.',
];

const values = [
  { icon: <Phone />, title: 'Mobile first, always', text: 'Your customers live on their phones. Everything we make is designed for a phone screen first.' },
  { icon: <Card />, title: 'Get paid easily', text: 'If a customer wants to pay you, nothing should get in the way. That is why M-Pesa is built into what we make.' },
  { icon: <Shield />, title: 'Honest and clear', text: 'Published prices, written quotes and plain-English reports. No jargon, no hidden costs.' },
  { icon: <Handshake />, title: 'Partners, not vendors', text: 'We are measured by whether your business grows, not by how many features we ship.' },
];

const FAQ_LD = faqJsonLd();

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description={`JBN Media is a Kenyan software and marketing company founded by ${FOUNDER.name} (${FOUNDER.role}), helping Kenyan businesses, chamas and SACCOs get found online and paid via M-Pesa.`}
        jsonLd={FAQ_LD}
      />

      <PageHero
        eyebrow="About JBN Media"
        title="Helping Kenyan businesses win online"
        lead="We're a Kenyan software and marketing company. Our job is simple: get your business found online and make it easy for customers to pay you."
        background={<Waves lineColor="#b9dccb" accentColor="#ffb703" lightMode spacing={14} amplitude={28} speed={0.6} fade={0.4} opacity={0.8} />}
      />

      <section className="section pt-0">
        <div className="container split">
          <div>
            <h2>Why we started</h2>
            {story.map((para) => (
              <ScrollReveal key={para.slice(0, 20)} as="p" containerClassName="story-reveal" textClassName="story-text" baseOpacity={0.15} blurStrength={3} baseRotation={0}>
                {para}
              </ScrollReveal>
            ))}
          </div>
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="edge">
            <Threads className="edge-threads" color={[1, 0.72, 0.01]} amplitude={1.2} distance={0.2} lineCount={40} opacity={0.35} />
            <div className="edge-copy">
              <span className="eyebrow eyebrow-light">The founder's edge</span>
              <h2>
                <DecryptedText
                  text="Where actuarial science meets your business"
                  animateOn="view"
                  sequential
                  speed={30}
                  characters="0123456789%+−×÷=KES"
                  encryptedClassName="decrypt-enc"
                />
              </h2>
              <p className="founder-line">
                <b>{FOUNDER.name}</b>
                <span>{FOUNDER.role}</span>
              </p>
              <p>
                JBN Media was founded by {FOUNDER.name}, an actuarial science graduate. Actuaries are trained to price risk, model interest
                and make decisions from data, for banks, insurers and pension funds. We use that same training for
                Kenyan businesses that can't afford to guess.
              </p>
              <div className="edge-badge" aria-hidden="true">
                <CircularText text="PRICE ✦ RISK ✦ INTEREST ✦ DATA ✦ " size={120} fontSize={12} spinDuration={20} color="#ffb703" />
              </div>
            </div>
            <Reveal className="edge-list" stagger={0.12}>
              {edge.map((e) => (
                <div key={e.title} className="edge-item">
                  <span className="icon-box icon-box-dark">{e.icon}</span>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we believe</span>
            <h2>How we work with you</h2>
          </div>
          <Reveal className="mini-grid" stagger={0.1}>
            {values.map((v) => (
              <GlowCard key={v.title} className="mini" theme="light" spotlightColor="#0b6e4f" intensity={0.3}>
                <span className="icon-box">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">In-house + partners</span>
            <h2>A small team with a big network</h2>
          </div>
          <ScrollReveal as="p" containerClassName="prose-center" textClassName="story-text" baseOpacity={0.15} blurStrength={3} baseRotation={0}>
            Our in-house team builds the software and runs content, clips and Meta ads day to day. When a project needs more, such as video production, influencer campaigns or large ad budgets, we bring in specialist partner agencies and manage them for you. You get agency-level reach with a single, accountable point of contact.
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">Quick answers</span>
            <h2>About JBN Media in brief</h2>
          </div>
          <Faq items={companyFaqs} />
        </div>
      </section>

      <CtaBand title="Let's grow your business together" />
    </>
  );
}
