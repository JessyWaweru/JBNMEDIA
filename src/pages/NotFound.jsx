import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="page-hero notfound">
        <div className="container narrow center">
          <span className="eyebrow">404</span>
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
