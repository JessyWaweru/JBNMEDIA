import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PhoneVideo from '../components/PhoneVideo';
import WaButton from '../components/WaButton';
import Reveal from '../components/fx/Reveal';
import GlowCard from '../components/fx/GlowCard';
import DotGrid from '../components/reactbits/DotGrid';
import GlareHover from '../components/reactbits/GlareHover';
import Silk from '../components/reactbits/Silk';
import SplitText from '../components/reactbits/SplitText';
import { useFinePointer } from '../hooks/useFinePointer';
import { mailLink } from '../config';
import { MPESA, goherbal, goherbalWhatsapp as gw } from '../data/work';
import { Arrow, Card, Chat, Check, Globe, Mail, Pin, Users } from '../components/Icons';

const tags = ['WhatsApp Business API', 'AI replies', 'English, Swahili & Sheng', 'M‑Pesa prompt', 'Delivery by location pin'];

const before =
  'GoHerbal’s customers already message them on WhatsApp. But the same questions came in all day and late at night: what helps with sleep, how much is it, do you deliver to my area, how do I pay. Every reply, every delivery price and every M‑Pesa payment needed someone on the phone, and slow replies meant lost orders.';

const built = [
  {
    icon: <Chat />,
    title: 'Answers in plain words',
    text: 'Customers ask the way they talk, like “anything for digestive issues?”, and get a suggestion from GoHerbal’s real products and prices. It never makes up a product or a price.',
    points: ['Knows all 14 GoHerbal products', 'Remembers the customer’s name', 'Suggests seeing a doctor when symptoms persist'],
    wide: true,
  },
  {
    icon: <Globe />,
    title: 'English, Swahili or Sheng',
    text: 'It replies in the language the customer writes in, and keeps to it for the whole chat.',
  },
  {
    icon: <Pin />,
    title: 'Delivery priced by location',
    text: 'The customer drops a pin and the assistant works out the rider fee from the distance, before they pay.',
    points: ['Pick-up in town: KES 50', 'Nairobi rider: KES 150–500 by distance', 'Pickup agent: KES 200'],
  },
  {
    icon: <Card />,
    title: `${MPESA} in the chat`,
    text: 'A tap on “Pay with M‑Pesa” sends the PIN prompt to the customer’s phone. Once it’s paid, the customer gets a PDF receipt and the shop gets the order with a map link for the rider.',
  },
  {
    icon: <Users />,
    title: 'Hands over to a person',
    text: 'Complaints, “I want to talk to someone” or a question it isn’t sure about go straight to the GoHerbal team, with the chat attached.',
  },
];

const steps = [
  { n: '01', title: 'Ask a question', text: <>The customer writes <q>Anything for digestive issues?</q> and gets two teas with prices.</> },
  { n: '02', title: 'Pick delivery', text: 'They tap a delivery option. For a rider, they send a location pin and see the fee straight away.' },
  { n: '03', title: 'Check the order', text: 'An order summary card shows the tea, the delivery fee and the total. One tap uses their saved name.' },
  { n: '04', title: `Pay with ${MPESA}`, text: <>They tap <q>Pay with M‑Pesa</q>, enter their PIN, and get a paid receipt in the same chat.</> },
];

const offerPoints = [
  'Replies to customers straight away, day or night',
  `Takes the order and sends the ${MPESA} prompt in the chat`,
  'Passes the chat to you when a person is needed',
];

const OFFER_WA = "Hi JBN Media, I'd like a WhatsApp AI assistant like GoHerbal's";

export default function WorkGoHerbalWhatsApp() {
  const finePointer = useFinePointer();
  return (
    <>
      <Seo title={gw.seoTitle} description={gw.seoDescription} image={{ src: gw.poster, ...gw.posterSize, alt: gw.posterAlt }} />

      <section className="page-hero page-hero-fx case-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <DotGrid
            dotSize={4}
            gap={22}
            baseColor="#f3d9e0"
            activeColor="#7a1d3f"
            proximity={120}
            shockRadius={220}
            mouseInteraction={finePointer}
            fade={0.5}
          />
        </div>
        <div className="container case-hero-grid">
          <div className="case-hero-copy">
            <span className="eyebrow">Case study · WhatsApp AI assistant</span>
            <SplitText
              tag="h1"
              text={gw.title}
              textAlign="left"
              splitType="words"
              delay={70}
              duration={0.9}
              rootMargin="0px"
              className="page-hero-title"
            />
            <p className="lead">
              After the online shop, we gave GoHerbal an assistant on WhatsApp. It answers customers in English, Swahili or
              Sheng, suggests the right tea, prices delivery from a location pin and sends the M‑Pesa prompt. The whole
              order happens in the chat.
            </p>
            <ul className="case-tags" aria-label="What we built">
              {tags.map((t) => (<li key={t}>{t}</li>))}
            </ul>
            <Link className="text-link" to={goherbal.path}>
              See GoHerbal&rsquo;s online shop <Arrow />
            </Link>
          </div>

          <figure className="case-media">
            <div className="case-phones">
              <PhoneVideo
                media={gw}
                label="Screen recording of a WhatsApp chat with the GoHerbal assistant: asking for digestive teas, choosing rider delivery, sending a location pin, and getting an order summary with a Pay with M-Pesa button."
              />
              <div className="device device-back">
                <img
                  src={gw.summary}
                  width={gw.summarySize.width}
                  height={gw.summarySize.height}
                  loading="lazy"
                  decoding="async"
                  alt="WhatsApp order summary card from the GoHerbal assistant: 1 Licorice Soothe Tea KES 420, rider delivery KES 200, total KES 620, with Pay with M-Pesa and Cancel buttons."
                />
              </div>
            </div>
            <figcaption>A real chat with the assistant, recorded on WhatsApp&rsquo;s test number with a test payment.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="case-problem">
            <span className="eyebrow">The problem</span>
            <h2>Every order needed someone on the phone</h2>
            <p>{before}</p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="group-head">
            <span className="eyebrow">What we built</span>
            <h2>An assistant that answers and takes the order</h2>
          </div>
          <Reveal className="case-built" stagger={0.08}>
            {built.map((b) => (
              <GlowCard key={b.title} className={`mini${b.wide ? ' case-built-wide' : ''}`} theme="light" spotlightColor="#7a1d3f" intensity={0.3}>
                <span className="icon-box">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                {b.points && (
                  <ul className="ticks case-built-list">
                    {b.points.map((p) => (<li key={p}><Check /> {p}</li>))}
                  </ul>
                )}
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How a customer orders</span>
            <h2>From question to paid order in one chat</h2>
          </div>
          <Reveal className="steps" stagger={0.12}>
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
        </div>
      </section>

      <section className="section pt-0" id="assistant-offer">
        <div className="container">
          <Reveal>
            <div className="cta-band offer">
              <Silk className="cta-silk" color="#7a1d3f" sheenColor="#e8a83b" speed={3} scale={1.2} sheen={0.35} glow={0.25} />
              <div>
                <h2>Get an assistant like this on your WhatsApp</h2>
                <p>We set it up with your products, prices and delivery areas, and connect it to your {MPESA}.</p>
                <ul className="ticks offer-ticks">
                  {offerPoints.map((p) => (<li key={p}><Check /> {p}</li>))}
                </ul>
              </div>
              <div className="offer-side">
                <p className="offer-price">
                  <span>Setup</span> <b>KES 30,000</b>
                  <small>then KES 6,000 a month</small>
                </p>
                <div className="cta-actions offer-actions">
                  <WaButton message={OFFER_WA} size="lg">I want one</WaButton>
                  <a className="btn btn-lg btn-ghost-light" href={mailLink('WhatsApp AI assistant', "Hi JBN Media,\n\nI'd like a WhatsApp AI assistant like GoHerbal's.\n\n")}>
                    <Mail /> <span>Email us</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
