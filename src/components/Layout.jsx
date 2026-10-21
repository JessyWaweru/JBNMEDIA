import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import ClickSpark from './reactbits/ClickSpark';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    // Pages are lazy-loaded, so the target may not exist yet: keep looking for up to ~2s.
    let raf = 0;
    let tries = 0;
    const find = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (tries++ < 120) raf = requestAnimationFrame(find);
    };
    if (!document.getElementById(hash.slice(1))) window.scrollTo(0, 0);
    raf = requestAnimationFrame(find);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <ClickSpark sparkColor="#ffb703" sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
      <ScrollManager />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div className="page-loading" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </ClickSpark>
  );
}
