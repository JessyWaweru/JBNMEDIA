import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import FuzzyText from '../components/reactbits/FuzzyText';
import LightRays from '../components/reactbits/LightRays';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="page-hero notfound">
        <div className="page-hero-bg" aria-hidden="true">
          <LightRays raysOrigin="top-center" raysColor="#25d366" lightMode raysSpeed={0.8} lightSpread={0.8} rayLength={2.2} />
        </div>
        <div className="container narrow center">
          <div className="notfound-fuzz">
            <FuzzyText fontSize="clamp(5rem, 22vw, 11rem)" color="#0b6e4f" baseIntensity={0.15} hoverIntensity={0.45} glitchMode trigger="always">
              404
            </FuzzyText>
          </div>
          <h1>We couldn't find that page</h1>
          <p className="lead">The link may be old or mistyped. Try one of these instead.</p>
          <div className="hero-actions center-row">
            <Link to="/" className="btn btn-primary btn-lg">Go home</Link>
            <Link to="/pricing" className="btn btn-outline btn-lg">See pricing</Link>
          </div>
          <div className="mt-16"><WaButton>Ask us on WhatsApp</WaButton></div>
        </div>
      </section>
    </>
  );
}
