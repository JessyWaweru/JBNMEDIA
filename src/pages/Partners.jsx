import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBand from '../components/CtaBand';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import GlowCard from '../components/fx/GlowCard';
import ElectricBorder from '../components/reactbits/ElectricBorder';
import GradientText from '../components/reactbits/GradientText';
import Waves from '../components/reactbits/Waves';
import { Arrow } from '../components/Icons';
import { allies, visiblePartners as visible } from '../data/work';

const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
// One-word names like "ShopCrawl" take their capitals: "SC".
const allyMark = (name) => (name.match(/[A-Z]/g) || [name[0]]).slice(0, 2).join('');

function AllyNode({ ally }) {
  const inner = (
    <div className="ally">
      <span className="ally-mark" aria-hidden="true">{allyMark(ally.name)}</span>
      <div>
        <h3 className="ally-name">{ally.name}</h3>
        <p className="ally-tag">{ally.tag}</p>
        {ally.blurb && <p className="ally-blurb">{ally.blurb}</p>}
      </div>
    </div>
  );
  return (
    <ElectricBorder className="alliance-node" color="#ffb703" theme="dark" borderRadius={20} speed={0.7} chaos={0.3} thickness={1.4} glow={0.8}>
      {ally.url ? <a href={ally.url} target="_blank" rel="noopener noreferrer" className="ally-link">{inner}</a> : inner}
    </ElectricBorder>
  );
}

export default function Partners() {
  return (
    <>
      <Seo
        title="Our partners"
        description="JBN Media's partner network, including ShopCrawl and DocRank, and the Kenyan businesses we build websites, M-Pesa payments and marketing for, like GoHerbal."
      />

      <PageHero
        eyebrow="Partners"
        title="Businesses we work with"
        lead="Kenyan businesses that trust us with their websites, payments and marketing."
        background={<Waves lineColor="#b9dccb" accentColor="#ffb703" lightMode spacing={14} amplitude={28} speed={0.6} fade={0.4} opacity={0.8} />}
      />

      <section className="section pt-0">
        <div className="container">
          <div className="alliance">
            <div className="alliance-head">
              <span className="eyebrow eyebrow-light">Partner network</span>
              <h2>
                <GradientText colors={['#ffb703', '#25d366', '#ffb703']} animationSpeed={6}>Stronger together</GradientText>
              </h2>
              <p>The companies we team up with to build, launch and grow faster for our clients.</p>
            </div>
            <Reveal className="alliance-map" stagger={0.15}>
              <AllyNode ally={allies[0]} />
              <span className="alliance-link" aria-hidden="true" />
              <div className="alliance-hub" aria-label="JBN Media">JBN</div>
              <span className="alliance-link" aria-hidden="true" />
              {allies.slice(1).map((a) => <AllyNode key={a.name} ally={a} />)}
            </Reveal>
          </div>

          <div className="group-head partners-clients-head">
            <span className="eyebrow">Clients</span>
            <h2>Who we build for</h2>
          </div>
          <Reveal className="partners" stagger={0.1}>
            {visible.map((p) => (
              <GlowCard key={p.name} className="mini partner" theme="light" spotlightColor="#0b6e4f" intensity={0.3}>
                <div className="partner-top">
                  <span className="partner-mark" aria-hidden="true">{initials(p.name)}</span>
                  {p.placeholder && <span className="placeholder-badge">Placeholder · dev only</span>}
                </div>
                <h2 className="partner-name">{p.name}</h2>
                <p className="partner-meta">{p.sector} · {p.location}</p>
                <p>{p.work}</p>
                {(p.caseStudy || p.url) && (
                  <div className="partner-links">
                    {p.caseStudy && <Link to={p.caseStudy} className="text-link">Read the case study <Arrow /></Link>}
                    {p.url && <a href={p.url} className="text-link" target="_blank" rel="noopener noreferrer">{p.urlDisplay} <Arrow /></a>}
                  </div>
                )}
              </GlowCard>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want to be next?" message="Hi JBN Media, I'd like to work with you on my business." />
    </>
  );
}
