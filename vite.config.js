import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE } from './src/config.js';
import { goherbal } from './src/data/work.js';

// Link-preview crawlers (WhatsApp, Facebook, X, LinkedIn) don't run JavaScript, so they only see the
// tags in the HTML file. For pages that need their own preview, write a copy of index.html with
// those tags filled in at dist/<route>/index.html. render.yaml points each route at its file.
const previews = [
  {
    route: goherbal.path,
    title: `${goherbal.seoTitle} | JBN Media`,
    description: goherbal.seoDescription,
    type: 'article',
    image: { src: goherbal.poster, ...goherbal.posterSize },
  },
  {
    route: '/partners',
    title: 'Our partners | JBN Media',
    description: "Kenyan businesses that work with JBN Media on websites, M-Pesa payments and marketing, including GoHerbal's online herbal shop.",
  },
];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setTag(html, attr, key, value) {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${key}">`);
  return html.replace(re, `$1${escape(value)}$2`);
}

function previewPages() {
  return {
    name: 'preview-pages',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist');
      const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
      for (const p of previews) {
        const url = `${SITE.url}${p.route}`;
        let html = base.replace(/<title>[^<]*<\/title>/, `<title>${escape(p.title)}</title>`);
        html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
        html = setTag(html, 'name', 'description', p.description);
        html = setTag(html, 'property', 'og:type', p.type || 'website');
        html = setTag(html, 'property', 'og:title', p.title);
        html = setTag(html, 'property', 'og:description', p.description);
        html = setTag(html, 'property', 'og:url', url);
        if (p.image) {
          html = setTag(html, 'property', 'og:image', `${SITE.url}${p.image.src}`);
          html = setTag(html, 'property', 'og:image:width', String(p.image.width));
          html = setTag(html, 'property', 'og:image:height', String(p.image.height));
        }
        const out = path.join(dist, p.route, 'index.html');
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), previewPages()],
});
