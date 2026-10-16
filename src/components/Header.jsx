import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import WaButton from './WaButton';
import { Menu, Close } from './Icons';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="JBN Media home">
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <WaButton className="btn-sm">WhatsApp us</WaButton>
        </div>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          <NavLink to="/" end className="nav-mobile-link">Home</NavLink>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-mobile-link">
              {l.label}
            </NavLink>
          ))}
        </nav>
        <WaButton size="lg" className="btn-block">Chat with us on WhatsApp</WaButton>
      </div>
    </header>
  );
}
