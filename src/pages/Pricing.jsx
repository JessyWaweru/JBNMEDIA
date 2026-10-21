import Seo from '../components/Seo';
import PlanCard from '../components/PlanCard';
import WaButton from '../components/WaButton';
import CtaBand from '../components/CtaBand';
import Faq from '../components/Faq';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import CountUp from '../components/reactbits/CountUp';
import DotGrid from '../components/reactbits/DotGrid';
import GlareHover from '../components/reactbits/GlareHover';
import ShinyText from '../components/reactbits/ShinyText';
import { useFinePointer } from '../hooks/useFinePointer';
import { monthlyPlans, projects, care, terms, faqs } from '../data/plans';
import { Check, Wrench } from '../components/Icons';

export default function Pricing() {
  const finePointer = useFinePointer();
  return (
    <>
      <Seo
        title="Pricing"
        description="JBN Media pricing: business websites from KES 10,000, website maintenance from KES 10,000, M-Pesa integration from KES 12,000, Chama/SACCO systems from KES 40,000, marketing plans from KES 6,000/month."
      />

      <PageHero
        eyebrow="Pricing"
        title="Clear prices for growing businesses"
        lead="Every package has a WhatsApp button. Tap it and we'll reply with everything you need to get started."
        background={
          <DotGrid
            dotSize={4}
            gap={22}
            baseColor="#d3ebe0"
            activeColor="#0b6e4f"
            proximity={120}
            shockRadius={220}
            mouseInteraction={finePointer}
            fade={0.5}
          />
        }
      >
        <nav className="pill-nav" aria-label="Jump to section">
          <a href="#monthly">Monthly marketing</a>
          <a href="#projects">Websites & systems</a>
          <a href="#care">Website care</a>
          <a href="#how-we-work">How we work</a>
        </nav>
      </PageHero>

      <section className="section pt-0" id="monthly">
        <div className="container">
          <div className="group-head">
            <h2>Monthly marketing plans</h2>
            <p>Get found on Google, Facebook, Instagram, TikTok and WhatsApp. Month to month, cancel anytime.</p>
          </div>
          <Reveal className="plans plans-3" stagger={0.12}>
            {monthlyPlans.map((p) => <PlanCard key={p.id} plan={p} />)}
          </Reveal>
        </div>
      </section>

      <section className="section section-tint" id="projects">
        <div className="container">
          <div className="group-head">
            <h2>Websites & business systems</h2>
            <p>One-off projects. You own what we build. 50% deposit to start, balance on handover.</p>
          </div>
          <Reveal className="plans plans-2" stagger={0.1}>
            {projects.map((p) => <PlanCard key={p.id} plan={p} />)}
          </Reveal>
        </div>
      </section>

      <section className="section" id="care">
        <div className="container">
          <Reveal>
          <GlareHover className="care-glare" mode="loop" interval={4} glareColor="#ffffff" glareOpacity={0.7} borderRadius="18px" background="transparent">
          <div className="care">
            <div className="care-copy">
              <span className="icon-box"><Wrench /></span>
              <div>
                <h2><ShinyText text={care.name} color="#0f1d17" shineColor="#ffb703" speed={2.5} /></h2>
                <p>{care.blurb}</p>
                <ul className="ticks ticks-inline">
                  {care.features.map((f) => (<li key={f}><Check /> {f}</li>))}
                </ul>
              </div>
            </div>
            <div className="care-price">
              <div className="plan-price">
                <span className="plan-from">from</span>
                <span className="plan-currency">KES</span>
                <span className="plan-amount">
                  <CountUp to={Number(care.price.replace(/,/g, ''))} separator="," duration={1.2} />
                </span>
                <span className="plan-unit">{care.unit}</span>
              </div>
              <WaButton message={care.wa} className="btn-block">Add Website Care</WaButton>
            </div>
          </div>
          </GlareHover>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint" id="how-we-work">
        <div className="container">
          <div className="group-head center">
            <h2>How we work</h2>
            <p>Straightforward terms, paid the way you already pay for everything else.</p>
          </div>
          <Reveal className="terms-grid" stagger={0.12}>
            {terms.map((t) => (
              <div key={t.title} className="term">
                <span className="term-check"><Check /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </Reveal>
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
