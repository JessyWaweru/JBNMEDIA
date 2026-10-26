import { Link } from 'react-router-dom';
import Logo from './Logo';
import CurvedLoop from './reactbits/CurvedLoop';
import ShinyText from './reactbits/ShinyText';
import { SITE, waLink, telLink, mailLink } from '../config';
import { goherbal, revenueFigure } from '../data/work';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-loop" aria-hidden="true">
        <CurvedLoop
          marqueeText="Get found online ✦ Get paid via M-Pesa ✦ Grow with JBN Media ✦ "
          speed={1.2}
          curveAmount={120}
          fontSize={64}
          fontWeight={800}
          color="rgba(255, 255, 255, 0.9)"
          interactive
        />
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p><ShinyText text={SITE.tagline} color="rgba(255, 255, 255, 0.75)" shineColor="#ffb703" speed={3} /></p>
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
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to={goherbal.path}>Case study: GoHerbal</Link></li>
            {revenueFigure !== null && <li><Link to="/results">Results</Link></li>}
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
