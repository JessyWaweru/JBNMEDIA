import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config';

const DEFAULT_IMAGE = {
  src: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'JBN Media: your business answers customers and takes M-Pesa orders, even at 2am.',
};

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps tags right for in-app navigation. Link-preview crawlers don't run JavaScript, so pages
// that need their own preview also get static HTML at build time (see vite.config.js).
// Page-level structured data (e.g. an FAQ), alongside the site-wide graph that's always in index.html.
// The build bakes the same tag into the pages listed in vite.config.js; this replaces it, never duplicates it.
function setJsonLd(data) {
  let el = document.head.querySelector('script[data-page-ld]');
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.dataset.pageLd = '';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data });
}

export default function Seo({ title, description, image = DEFAULT_IMAGE, jsonLd }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | JBN Media` : 'JBN Media | AI Assistants, Websites & M-Pesa for Kenyan Businesses';
    const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', `${SITE.url}${image.src}`);
    setMeta('meta[property="og:image:width"]', 'content', String(image.width));
    setMeta('meta[property="og:image:height"]', 'content', String(image.height));
    setMeta('meta[property="og:image:alt"]', 'content', image.alt || '');
    setMeta('link[rel="canonical"]', 'href', url);
    setJsonLd(jsonLd);
  }, [title, description, pathname, image.src, image.width, image.height, image.alt, jsonLd]);
  return null;
}
