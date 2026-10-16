import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function Seo({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | JBN Media` : 'JBN Media | Websites, M-Pesa & Marketing for Nairobi Businesses';
    const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, pathname]);
  return null;
}
