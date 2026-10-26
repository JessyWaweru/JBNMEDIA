import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBand from '../components/CtaBand';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import CountUp from '../components/reactbits/CountUp';
import LightRays from '../components/reactbits/LightRays';
import { Arrow } from '../components/Icons';
import { goherbal, revenue, revenueFigure as figure } from '../data/work';
import NotFound from './NotFound';

export default function Results() {
  if (figure === null) return <NotFound />;
  return (
    <>
      <Seo
        title="Results"
        description="Revenue paid through the checkouts and payment systems JBN Media has built for Kenyan businesses."
      />

      <PageHero
        eyebrow="Results"
        title="Money in our clients' accounts"
        lead="We judge our work by what it earns. This is the total paid through the checkouts and payment systems we've built."
        background={<LightRays raysOrigin="top-center" raysColor="#25d366" lightMode raysSpeed={0.8} lightSpread={0.8} rayLength={2.2} />}
      />

      <section className="section pt-0">
        <div className="container narrow">
          <Reveal>
            <div className="results-card">
              {revenue.kes === null && <span className="placeholder-badge">Placeholder · dev only</span>}
              <p className="results-figure">
                <span className="results-currency">KES</span>
                <CountUp to={figure} separator="," duration={1.6} />
              </p>
              <p className="results-label">
                paid by customers through sites and systems we&rsquo;ve built{revenue.asOf ? `, as of ${revenue.asOf}` : ''}
              </p>
              <Link to={goherbal.path} className="text-link">See how GoHerbal gets paid <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want your share of that?" message="Hi JBN Media, I'd like M-Pesa payments on my site." />
    </>
  );
}
