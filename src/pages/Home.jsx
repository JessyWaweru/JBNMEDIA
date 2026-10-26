import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import PlanCard from '../components/PlanCard';
import CtaBand from '../components/CtaBand';
import CaseStudyTeaser from '../components/CaseStudyTeaser';
import Faq from '../components/Faq';
import { monthlyPlans, projects, faqs } from '../data/plans';
import Aurora from '../components/reactbits/Aurora';
import BlurText from '../components/reactbits/BlurText';
import CircularText from '../components/reactbits/CircularText';
import DecryptedText from '../components/reactbits/DecryptedText';
import GlareHover from '../components/reactbits/GlareHover';
import ScrollVelocity from '../components/reactbits/ScrollVelocity';
import StarBorder from '../components/reactbits/StarBorder';
import Threads from '../components/reactbits/Threads';
import Reveal from '../components/fx/Reveal';
import GradientText from '../components/reactbits/GradientText';
import LogoLoop from '../components/reactbits/LogoLoop';
import Magnet from '../components/reactbits/Magnet';
import RotatingText from '../components/reactbits/RotatingText';
import GlowCard from '../components/fx/GlowCard';
import { useFinePointer } from '../hooks/useFinePointer';
import { WhatsAppIcon, Arrow, Check, Code, Megaphone, Phone, Card, Map, Chart, Handshake, Shield, Users } from '../components/Icons';

const pillars = [
  {
    icon: <Code />,
    title: 'Software for your business',
    text: 'Professional websites, M-Pesa payment integrations for your existing systems, and Chama / SACCO software with loan maths built by an actuarial science graduate.',
    points: ['Business websites from KES 10,000', 'M-Pesa STK Push, Till & Paybill', 'Chama / SACCO systems'],
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
  { icon: <Map />, title: 'Local & reachable', text: 'Kenyan, and always on WhatsApp. You talk to the people doing the work.' },
  { icon: <Shield />, title: 'Clear, fair pricing', text: 'Published prices, 50% to start, monthly plans you can cancel anytime.' },
  { icon: <Chart />, title: 'Numbers done properly', text: 'Founded by an actuarial science graduate. Loans, payments and ad results are calculated, not guessed.' },
  { icon: <Handshake />, title: 'One point of contact', text: 'Need bigger campaigns? We bring in partner agencies and manage them for you.' },
];

const audiences = ['restaurants', 'salons', 'chamas', 'SACCOs', 'shops', 'clinics', 'schools'];

const trustItems = ['M-Pesa STK Push', 'Till & Paybill', 'Google Business', 'WhatsApp Business', 'Facebook & Instagram', 'TikTok'].map(
  (t) => ({ node: <span className="trust-item">{t}</span>, title: t })
);

function Heading({ children }) {
  return <BlurText as="h2" text={children} className="blur-heading" delay={60} />;
}

export default function Home() {
  const finePointer = useFinePointer();
  return (
    <>
      <Seo description="JBN Media gets Kenyan businesses found online and paid via M-Pesa. Websites, M-Pesa integration, Chama/SACCO systems and monthly social media marketing." />

      <section className="hero">
        <Aurora
          className="hero-aurora"
          colorStops={['#0b6e4f', '#25d366', '#ffb703']}
          lightMode
          amplitude={1}
          blend={0.6}
          height={0.6}
          speed={0.6}
          opacity={0.85}
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Software & marketing · Kenya</span>
            <h1>
              Get your business{' '}
              <GradientText className="hl" colors={['#0b6e4f', '#25d366', '#0b6e4f']} animationSpeed={6}>
                found online
              </GradientText>{' '}
              and <span className="hl-gold">paid via M-Pesa</span>.
            </h1>
            <p className="lead">
              We build websites and business systems with M-Pesa built in, and we run the social media and ads that bring
              customers to your door.
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
                <WaButton size="lg" message="Hi JBN Media, I'd like to get my business online.">
                  Chat on WhatsApp
                </WaButton>
              </Magnet>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <Heading>One team for your software and your marketing</Heading>
            <p>Build the tools that run your business, then get customers using them.</p>
          </div>
          <Reveal className="pillars" stagger={0.15}>
            {pillars.map((p) => (
              <GlowCard key={p.title} className="pillar" theme="light" spotlightColor="#0b6e4f" intensity={0.35}>
                <span className="icon-box">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="ticks">
                  {p.points.map((pt) => (<li key={pt}><Check /> {pt}</li>))}
                </ul>
                <Link to={p.link} className="text-link">Learn more <Arrow /></Link>
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="velocity-band" aria-hidden="true">
        <ScrollVelocity
          texts={['Websites ✦ M-Pesa ✦ Chama & SACCO systems ✦', 'Social media ✦ Content clips ✦ Google ✦ Meta ads ✦']}
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
            <Threads className="edge-threads" color={[1, 0.72, 0.01]} amplitude={1.2} distance={0.2} lineCount={40} opacity={0.35} />
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
                <CircularText text="NUMBERS ✦ DONE ✦ RIGHT ✦ " size={120} fontSize={13} spinDuration={18} color="#ffb703" />
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

      <CaseStudyTeaser />

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Popular packages</span>
            <Heading>Simple prices. No surprises.</Heading>
            <p>Tap any package to chat with us about it on WhatsApp.</p>
          </div>
          <Reveal className="plans plans-3" stagger={0.12}>
            <PlanCard plan={monthlyPlans[0]} />
            <PlanCard plan={projects[0]} />
            <PlanCard plan={monthlyPlans[1]} />
          </Reveal>
          <div className="center mt-32">
            <StarBorder as={Link} to="/pricing" className="btn star-btn" theme="light" color="#0b6e4f" radius={999} duration={4}>
              View all pricing <Arrow />
            </StarBorder>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <Heading>From first message to launch</Heading>
          </div>
          <Reveal className="steps" stagger={0.12}>
            {steps.map((s) => (
              <GlareHover key={s.n} className="step" glareColor="#ffb703" glareOpacity={0.35} borderRadius="18px" blendMode="multiply">
                <div className="step-inner">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </GlareHover>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-dark section-aurora">
        <Aurora
          className="dark-aurora"
          colorStops={['#063d2c', '#25d366', '#ffb703']}
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
              <GlowCard key={r.title} className="reason" spotlightColor="#ffb703" intensity={0.3} borderGlow={1} spotlightSize={300}>
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
            <Faq items={faqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
