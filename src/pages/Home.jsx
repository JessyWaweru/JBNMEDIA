import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import ServiceCard from '../components/ServiceCard';
import CtaBand from '../components/CtaBand';
import { CaseStudyCard } from '../components/CaseStudyTeaser';
import Faq from '../components/Faq';
import { aiFaqs } from '../data/plans';
import { services } from '../data/services';
import { MPESA, upcomingWork } from '../data/work';
import { faqJsonLd } from '../data/company';
import Aurora from '../components/reactbits/Aurora';
import BlurText from '../components/reactbits/BlurText';
import CircularText from '../components/reactbits/CircularText';
import DecryptedText from '../components/reactbits/DecryptedText';
import GlareHover from '../components/reactbits/GlareHover';
import ScrollVelocity from '../components/reactbits/ScrollVelocity';
import Threads from '../components/reactbits/Threads';
import Reveal from '../components/fx/Reveal';
import GradientText from '../components/reactbits/GradientText';
import LogoLoop from '../components/reactbits/LogoLoop';
import Magnet from '../components/reactbits/Magnet';
import RotatingText from '../components/reactbits/RotatingText';
import GlowCard from '../components/fx/GlowCard';
import { useFinePointer } from '../hooks/useFinePointer';
import { WhatsAppIcon, Arrow, Check, Card, Map, Chart, Handshake, Shield, Users } from '../components/Icons';

const HERO_WA = "Hi JBN Media, I'd like an AI assistant for my business.";

const edge = [
  {
    icon: <Users />,
    title: 'Chama & SACCO loans, right to the shilling',
    text: 'Reducing balance, flat rate and repayment schedules modelled properly, so members trust the numbers.',
  },
  {
    icon: <Chart />,
    title: 'Statements turned into numbers you can use',
    text: `Receipts, invoices and ${MPESA} statements pulled into one sheet, so you see where the money went.`,
  },
  {
    icon: <Card />,
    title: 'Payment records that reconcile',
    text: `Every ${MPESA} payment is matched and recorded, so your books and your till always agree.`,
  },
];

const steps = [
  { n: '01', title: 'Free 15-minute call', text: 'Tell us what you sell and what customers usually ask. No cost and no obligation.' },
  { n: '02', title: 'We build and test it on your products', text: 'We load your products and prices, then test it with real questions until the answers are right.' },
  { n: '03', title: 'It goes live, you pay monthly', text: 'It starts answering on your WhatsApp or your website. You pay a monthly fee to keep it running.' },
];

const reasons = [
  { icon: <Shield />, title: 'A person is always in charge', text: 'Your assistant hands over to you when it is stuck, and every post we make is checked by a person.' },
  { icon: <Card />, title: `${MPESA} built in`, text: 'Get paid the way Kenyans actually pay. STK Push, Till or Paybill, with records you can trust.' },
  { icon: <Map />, title: 'Local & reachable', text: 'Kenyan, and always on WhatsApp. You talk to the people doing the work.' },
  { icon: <Check />, title: 'Clear, fair pricing', text: 'Published prices in shillings, with a clear quote before any work starts.' },
  { icon: <Chart />, title: 'Numbers done properly', text: 'Founded by an actuarial science graduate. Loans, payments and ad results are calculated, not guessed.' },
  { icon: <Handshake />, title: 'One point of contact', text: 'Need bigger campaigns? We bring in partner agencies and manage them for you.' },
];

const audiences = ['shops', 'restaurants', 'salons', 'pharmacies', 'chamas', 'clinics', 'schools'];

const trustItems = ['WhatsApp Business', `${MPESA} STK Push`, 'Till & Paybill', 'Website chat', 'Google Business', 'Facebook & Instagram', 'TikTok'].map(
  (t) => ({ node: <span className="trust-item">{t}</span>, title: t })
);

const FAQ_LD = faqJsonLd(aiFaqs);

function Heading({ children }) {
  return <BlurText as="h2" text={children} className="blur-heading" delay={60} />;
}

export default function Home() {
  const finePointer = useFinePointer();
  return (
    <>
      <Seo
        description="AI assistants that answer your customers on WhatsApp and take M-Pesa orders, even at 2am. Plus websites and M-Pesa payments for Kenyan businesses."
        jsonLd={FAQ_LD}
      />

      <section className="hero">
        <Aurora
          className="hero-aurora"
          colorStops={['#7a1d3f', '#c0456b', '#e8a83b']}
          lightMode
          amplitude={1}
          blend={0.6}
          height={0.6}
          speed={0.6}
          opacity={0.85}
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI agency · Kenya</span>
            <h1>
              Your business answers customers and takes <span className="hl-gold">{MPESA} orders</span>,{' '}
              <GradientText className="hl" colors={['#7a1d3f', '#c0456b', '#7a1d3f']} animationSpeed={6}>
                even at 2am
              </GradientText>
            </h1>
            <p className="lead">
              AI assistants, websites and {MPESA} payments for Kenyan businesses. Customers get answers and pay on your
              WhatsApp or website while you sleep, and you step in whenever a person is needed.
            </p>
            <div className="hero-for">
              <span>Built for Kenyan</span>
              <RotatingText
                texts={audiences}
                mainClassName="hero-rotate"
                staggerDuration={0.025}
                staggerFrom="last"
                rotationInterval={2200}
                splitBy="characters"
              />
            </div>
            <div className="hero-actions">
              <Magnet padding={60} magnetStrength={4} disabled={!finePointer} wrapperClassName="hero-magnet">
                <WaButton size="lg" message={HERO_WA}>
                  Chat with us on WhatsApp
                </WaButton>
              </Magnet>
              <a href="#work" className="btn btn-outline btn-lg">
                See our work <Arrow />
              </a>
            </div>
            <ul className="hero-ticks">
              <li><Check /> Runs on your own WhatsApp number</li>
              <li><Check /> Hands over to you when stuck</li>
              <li><Check /> Live in about 1 to 2 weeks</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="mock-chat">
                  <div className="mock-chat-head">
                    <span className="mock-avatar">YS</span>
                    <div><b>Your Shop</b><small>Assistant · replies any time</small></div>
                  </div>
                  <div className="mock-msgs">
                    <span className="mock-note">You are chatting with an assistant</span>
                    <div className="mock-msg mock-in">Do you have the black sneakers in size 42?<small>2:04 am</small></div>
                    <div className="mock-msg mock-out">Yes! KES 3,500, plus KES 200 delivery to Westlands. Shall I order?<small>2:04 am</small></div>
                    <div className="mock-msg mock-in">Yes please<small>2:05 am</small></div>
                    <div className="mock-msg mock-out">Done. Check your phone for the {MPESA} prompt.<small>2:05 am</small></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card float-pay">
              <span className="fc-icon fc-green"><Check /></span>
              <div><b>Payment received</b><small>KES 3,700 · {MPESA}</small></div>
            </div>
            <div className="float-card float-msg">
              <span className="fc-icon fc-wa"><WhatsAppIcon size={18} /></span>
              <div><b>New order</b><small>Sneakers, size 42 · 2:05 am</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <LogoLoop
          logos={trustItems}
          speed={50}
          gap={40}
          logoHeight={24}
          pauseOnHover
          fadeOut
          ariaLabel="Platforms we work with"
          className="trust-loop"
        />
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <Heading>Answer every customer. Get paid on time.</Heading>
            <p>Start with a WhatsApp assistant, or pick what your business needs. Prices are in shillings, with no surprises.</p>
          </div>
          <Reveal className="offers" stagger={0.1}>
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </Reveal>
          <div className="center mt-32">
            <Link to="/pricing" className="btn btn-outline">See all pricing <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <Heading>Live on your WhatsApp in about 1 to 2 weeks</Heading>
          </div>
          <Reveal className="steps steps-3" stagger={0.12}>
            {steps.map((s) => (
              <GlareHover key={s.n} className="step" glareColor="#e8a83b" glareOpacity={0.35} borderRadius="18px" blendMode="multiply">
                <div className="step-inner">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </GlareHover>
            ))}
          </Reveal>
          <div className="center mt-32">
            <WaButton message="Hi JBN Media, I'd like to book the free 15-minute call.">Book the free call</WaButton>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our work</span>
            <h2 id="work-title">See it working for a real business</h2>
          </div>
          <Reveal className="work-list" stagger={0.12}>
            <CaseStudyCard as="h3" />
            {upcomingWork.map((w) =>
              w.comingSoon ? (
                <div key={w.id} className="work-soon">
                  <span className="icon-box icon-box-wa"><WhatsAppIcon size={24} /></span>
                  <div>
                    <h3>{w.name} <span className="sr-only">(coming soon)</span></h3>
                    <p>{w.teaser}</p>
                  </div>
                  <span className="placeholder-badge" aria-hidden="true">Coming soon</span>
                </div>
              ) : (
                <Link key={w.id} to={w.path} className="work-soon">
                  <span className="icon-box icon-box-wa"><WhatsAppIcon size={24} /></span>
                  <div>
                    <h3>{w.name}</h3>
                    <p>{w.teaser}</p>
                  </div>
                  <span className="text-link">Read the case study <Arrow /></span>
                </Link>
              )
            )}
          </Reveal>
        </div>
      </section>

      <section className="velocity-band" aria-hidden="true">
        <ScrollVelocity
          texts={[`WhatsApp assistants ✦ Website chat ✦ ${MPESA} ✦`, 'Websites ✦ Chama systems ✦ Clips ✦ Marketing ✦']}
          velocity={40}
          className="velocity-text"
          outlineAlternate
          numCopies={4}
          skewWithVelocity={6}
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="edge">
            <Threads className="edge-threads" color={[0.91, 0.66, 0.23]} amplitude={1.2} distance={0.2} lineCount={40} opacity={0.35} />
            <div className="edge-copy">
              <span className="eyebrow eyebrow-light">Our unfair advantage</span>
              <h2>
                <DecryptedText
                  text="Built by an actuarial science graduate"
                  animateOn="view"
                  sequential
                  speed={30}
                  characters="0123456789%+−×÷=KES"
                  encryptedClassName="decrypt-enc"
                />
              </h2>
              <p>
                Actuarial science is the maths of money, interest and risk that banks, insurers and pension funds run on.
                We bring that same discipline to small businesses and groups.
              </p>
              <div className="edge-badge" aria-hidden="true">
                <CircularText text="NUMBERS ✦ DONE ✦ RIGHT ✦ " size={120} fontSize={13} spinDuration={18} color="#e8a83b" />
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

      <section className="section section-dark section-aurora">
        <Aurora
          className="dark-aurora"
          colorStops={['#3d0d20', '#c0456b', '#e8a83b']}
          amplitude={0.8}
          blend={0.55}
          speed={0.5}
          opacity={0.45}
          mouseInteraction={false}
        />
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-light">Why JBN Media</span>
            <Heading>Built for how Kenyan businesses really work</Heading>
          </div>
          <Reveal className="reasons" stagger={0.08}>
            {reasons.map((r) => (
              <GlowCard key={r.title} className="reason" spotlightColor="#e8a83b" intensity={0.3} borderGlow={1} spotlightSize={300}>
                <span className="icon-box icon-box-dark">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <Heading>Frequently asked</Heading>
          </div>
          <Reveal>
            <Faq items={aiFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
