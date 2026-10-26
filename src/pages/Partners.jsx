import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBand from '../components/CtaBand';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import GlowCard from '../components/fx/GlowCard';
import Waves from '../components/reactbits/Waves';
import { Arrow } from '../components/Icons';
import { visiblePartners as visible } from '../data/work';

const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export default function Partners() {
  return (
    <>
      <Seo
        title="Our partners"
        description="Kenyan businesses that work with JBN Media on websites, M-Pesa payments and marketing, including GoHerbal's online herbal shop."
      />

      <PageHero
        eyebrow="Partners"
        title="Businesses we work with"
        lead="Kenyan businesses that trust us with their websites, payments and marketing."
        background={<Waves lineColor="#b9dccb" accentColor="#ffb703" lightMode spacing={14} amplitude={28} speed={0.6} fade={0.4} opacity={0.8} />}
      />

      <section className="section pt-0">
        <div className="container">
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
