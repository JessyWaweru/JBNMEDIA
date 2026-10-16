import { Link } from 'react-router-dom';
import Logo from './Logo';
import { SITE, waLink, telLink, mailLink } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{SITE.tagline}</p>
          <p className="muted-light">Software and marketing founded by an actuarial science graduate. Numbers you can trust.</p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services#websites">Business websites</Link></li>
            <li><Link to="/services#mpesa">M-Pesa integration</Link></li>
            <li><Link to="/services#chama">Chama / SACCO systems</Link></li>
            <li><Link to="/services#marketing">Social media marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4>Talk to us</h4>
          <ul>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></li>
            <li><a href={telLink()}>Call: {SITE.phoneDisplay}</a></li>
            <li><a href={mailLink()}>{SITE.email}</a></li>
            <li>{SITE.location}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} JBN Media. All rights reserved.</span>
        <span>{SITE.domain}</span>
      </div>
    </footer>
  );
}
