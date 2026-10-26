import { useEffect, useRef, useState } from 'react';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import Reveal from '../components/fx/Reveal';
import GlowCard from '../components/fx/GlowCard';
import DotGrid from '../components/reactbits/DotGrid';
import GlareHover from '../components/reactbits/GlareHover';
import Silk from '../components/reactbits/Silk';
import SplitText from '../components/reactbits/SplitText';
import { useFinePointer } from '../hooks/useFinePointer';
import { mailLink } from '../config';
import { MPESA, goherbal } from '../data/work';
import { Arrow, Basket, Card, Check, Mail, Pause, Play, Refresh, Route, Truck } from '../components/Icons';

const tags = ['M-Pesa STK push', 'Card payments', 'Paystack', 'Delivery options', 'Order tracking'];

const before =
  'Before the shop, GoHerbal took orders in WhatsApp and Instagram chats: customers asked for prices, sent money to the till and then a screenshot, and every payment had to be checked by hand before an order could go out.';

const built = [
  {
    icon: <Basket />,
    title: 'A full online shop',
    text: 'Everything a customer expects from an online shop, so people can browse, save favourites and come back to reorder.',
    points: ['Product catalogue', 'Basket', 'Wishlist', 'Customer accounts and order history'],
    wide: true,
  },
  {
    icon: <Truck />,
    title: 'Delivery priced at checkout',
    text: 'Customers choose how to get their order and see the fee before they pay.',
    points: ['Pick-up in town: KES 50', 'Same-day Nairobi rider: from KES 150', 'Pickup agent: KES 200'],
  },
  {
    icon: <Card />,
    title: `Pay by ${MPESA} or card`,
    text: 'An M-Pesa PIN prompt straight to the customer’s phone, or card payment through Paystack.',
  },
  {
    icon: <Refresh />,
    title: 'Automatic confirmation',
    text: 'The order page updates by itself once M-Pesa confirms. Nobody has to send or check a screenshot.',
  },
  {
    icon: <Route />,
    title: 'Live order tracking',
    text: 'Customers and the shop see every order move along the same path.',
    stages: ['Placed', 'Paid', 'Prepared', 'Ready', 'Collected'],
  },
];

const steps = [
  { n: '01', title: 'Pick products and delivery', text: 'Add products to the basket, then choose pick-up in town, a same-day rider or a pickup agent.' },
  { n: '02', title: 'Tap to pay', text: <>Enter the M-Pesa number and tap <q>Place order and pay with {MPESA}</q>.</> },
  { n: '03', title: 'Enter the PIN', text: 'An M-Pesa prompt pops up on the phone. The customer enters their PIN, just like paying a till.' },
  { n: '04', title: 'Payment confirmed', text: <>The page shows <q>Payment confirmed</q> by itself, and the shop gets a paid order.</> },
];

const offerPoints = [
  'Customers pay with a PIN prompt on their own phone',
  'You get confirmed, paid orders instead of chasing screenshots',
  'Delivery fees, receipts and order tracking set up for how you actually sell',
];

const OFFER_WA = "Hi JBN Media, I'd like M-Pesa payments on my site";

function CheckoutVideo() {
  const ref = useRef(null);
  // Respect reduced motion: show the poster and let people press play themselves.
  const [reduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [playing, setPlaying] = useState(!reduced);

  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="device device-main">
      <video
        ref={ref}
        src={goherbal.video}
        poster={goherbal.poster}
        width={goherbal.posterSize.width}
        height={goherbal.posterSize.height}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Screen recording of GoHerbal's checkout: choosing delivery, entering an M-Pesa number, and the order page confirming payment."
      />
      <button type="button" className="device-toggle" onClick={toggle} aria-label={playing ? 'Pause video' : 'Play video'}>
        {playing ? <Pause /> : <Play />}
      </button>
    </div>
  );
}

export default function WorkGoHerbal() {
  const finePointer = useFinePointer();
  return (
    <>
      <Seo
        title={goherbal.seoTitle}
        description={goherbal.seoDescription}
        image={{ src: goherbal.poster, ...goherbal.posterSize }}
      />

      <section className="page-hero page-hero-fx case-hero">
        <div className="page-hero-bg" aria-hidden="true">
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
        </div>
        <div className="container case-hero-grid">
          <div className="case-hero-copy">
            <span className="eyebrow">Case study · E-commerce · Payments</span>
            <SplitText
              tag="h1"
              text={goherbal.title}
              textAlign="left"
              splitType="words"
              delay={70}
              duration={0.9}
              rootMargin="0px"
              className="page-hero-title"
            />
            <p className="lead">
              GoHerbal sells herbal teas and wellness products in Nairobi. We built them a shop where customers pick a
              product, choose how to get it, and pay with an M-Pesa prompt on their phone. No screenshots, no
              &lsquo;I&rsquo;ve sent it&rsquo; messages.
            </p>
            <ul className="case-tags" aria-label="What we built">
              {tags.map((t) => (<li key={t}>{t}</li>))}
            </ul>
            <a className="text-link" href={goherbal.url} target="_blank" rel="noopener noreferrer">
              Visit {goherbal.urlDisplay} <Arrow />
            </a>
          </div>

          <figure className="case-media">
            <div className="case-phones">
              <CheckoutVideo />
              <div className="device device-back">
                <img
                  src={goherbal.confirmed}
                  width={goherbal.confirmedSize.width}
                  height={goherbal.confirmedSize.height}
                  loading="lazy"
                  decoding="async"
                  alt="GoHerbal order page reading 'Thank you for your order!' for Holy Basil Stress-Relief Tea, total Ksh 450, with 'Order placed' and 'Payment confirmed' ticked."
                />
              </div>
            </div>
            <figcaption>The checkout and order page on GoHerbal&rsquo;s shop, recorded with a test payment.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="case-problem">
            <span className="eyebrow">The problem</span>
            <h2>Orders in the chat, payments on trust</h2>
            <p>{before}</p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="group-head">
            <span className="eyebrow">What we built</span>
            <h2>A shop that takes the order and the money</h2>
          </div>
          <Reveal className="case-built" stagger={0.08}>
            {built.map((b) => (
              <GlowCard key={b.title} className={`mini${b.wide ? ' case-built-wide' : ''}`} theme="light" spotlightColor="#0b6e4f" intensity={0.3}>
                <span className="icon-box">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                {b.points && (
                  <ul className="ticks case-built-list">
                    {b.points.map((p) => (<li key={p}><Check /> {p}</li>))}
                  </ul>
                )}
                {b.stages && (
                  <ol className="case-stages" aria-label="Order stages">
                    {b.stages.map((s) => (<li key={s}>{s}</li>))}
                  </ol>
                )}
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How a customer pays</span>
            <h2>From basket to paid order in four steps</h2>
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

      <section className="section pt-0" id="mpesa-offer">
        <div className="container">
          <Reveal>
            <div className="cta-band offer">
              <Silk className="cta-silk" color="#0b6e4f" sheenColor="#ffb703" speed={3} scale={1.2} sheen={0.35} glow={0.25} />
              <div>
                <h2>Take {MPESA} on your site</h2>
                <p>
                  We add M-Pesa and card payments to the website you already have, or build you a shop around them, like
                  GoHerbal&rsquo;s.
                </p>
                <ul className="ticks offer-ticks">
                  {offerPoints.map((p) => (<li key={p}><Check /> {p}</li>))}
                </ul>
              </div>
              <div className="offer-side">
                <p className="offer-price">
                  <span>From</span> <b>KES 12,000</b>
                  <small>Ready in about 1 week</small>
                </p>
                <div className="cta-actions offer-actions">
                  <WaButton message={OFFER_WA} size="lg">Add {MPESA} to my site</WaButton>
                  <a className="btn btn-lg btn-ghost-light" href={mailLink('M-Pesa payments on my site', "Hi JBN Media,\n\nI'd like M-Pesa payments on my site.\n\n")}>
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
