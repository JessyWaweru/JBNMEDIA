import Seo from '../components/Seo';
import PlanCard from '../components/PlanCard';
import WaButton from '../components/WaButton';
import CtaBand from '../components/CtaBand';
import Faq from '../components/Faq';
import { monthlyPlans, projects, care, terms, faqs } from '../data/plans';
import { Check, Wrench } from '../components/Icons';

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="JBN Media pricing: Online Presence KES 8,000/month, Growth KES 15,000/month, Content Clips from KES 6,000/month, Business Website with M-Pesa from KES 25,000, M-Pesa Integration from KES 12,000, Chama/SACCO System from KES 40,000."
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Clear prices for growing businesses</h1>
          <p className="lead">
            Every package has a WhatsApp button. Tap it and we'll reply with everything you need to get started.
          </p>
          <nav className="pill-nav" aria-label="Jump to section">
            <a href="#monthly">Monthly marketing</a>
            <a href="#projects">Websites & systems</a>
            <a href="#care">Website care</a>
            <a href="#how-we-work">How we work</a>
          </nav>
        </div>
      </section>

      <section className="section pt-0" id="monthly">
        <div className="container">
          <div className="group-head">
            <h2>Monthly marketing plans</h2>
            <p>Get found on Google, Facebook, Instagram, TikTok and WhatsApp. Month to month, cancel anytime.</p>
          </div>
          <div className="plans plans-3">
            {monthlyPlans.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="projects">
        <div className="container">
          <div className="group-head">
            <h2>Websites & business systems</h2>
            <p>One-off projects. You own what we build. 50% deposit to start, balance on handover.</p>
          </div>
          <div className="plans plans-3">
            {projects.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
        </div>
      </section>

      <section className="section" id="care">
        <div className="container">
          <div className="care">
            <div className="care-copy">
              <span className="icon-box"><Wrench /></span>
              <div>
                <h2>{care.name}</h2>
                <p>{care.blurb}</p>
                <ul className="ticks ticks-inline">
                  {care.features.map((f) => (<li key={f}><Check /> {f}</li>))}
                </ul>
              </div>
            </div>
            <div className="care-price">
              <div className="plan-price">
                <span className="plan-currency">KES</span>
                <span className="plan-amount">{care.price}</span>
                <span className="plan-unit">{care.unit}</span>
              </div>
              <WaButton message={care.wa} className="btn-block">Add Website Care</WaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="how-we-work">
        <div className="container">
          <div className="group-head center">
            <h2>How we work</h2>
            <p>Straightforward terms, paid the way you already pay for everything else.</p>
          </div>
          <div className="terms-grid">
            {terms.map((t) => (
              <div key={t.title} className="term">
                <span className="term-check"><Check /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">Pricing questions</span>
            <h2>Good to know</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Not sure which package fits?"
        text="Tell us about your business on WhatsApp and we'll recommend the right one. Free, no obligation."
        message="Hi JBN Media, I'm not sure which package fits my business. Can you help?"
      />
    </>
  );
}
