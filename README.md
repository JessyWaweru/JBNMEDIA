# JBN Media website

Marketing site for **jbnmedia.org**: React + Vite, deployed as a static site on Render.

Pages: `/` · `/services` · `/pricing` · `/about` · `/contact` · `/privacy` · `/terms`

## Edit your details

- **WhatsApp number, email, hours:** `src/config.js` (every WhatsApp button reads from here)
- **Prices and package contents:** `src/data/plans.js`

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
```

## Deploy on Render (static site)

1. Render dashboard → **New → Static Site** → connect this GitHub repo.
2. Build command: `npm ci && npm run build` · Publish directory: `dist`
3. **Redirects/Rewrites** tab → add rule: Source `/*`, Destination `/index.html`, Action **Rewrite**
   (needed so `/pricing` etc. work when opened directly). If you deploy via **New → Blueprint**, `render.yaml` sets this up for you.
4. **Settings → Custom Domains** → add `jbnmedia.org` and `www.jbnmedia.org`.
5. In **Namecheap → Domain List → Manage → Advanced DNS**, add the records Render shows you, typically:
   - `A` record, host `@`, value `216.24.57.1`
   - `CNAME` record, host `www`, value `<your-site>.onrender.com`
   Remove Namecheap's default parking records first. Render issues the HTTPS certificate automatically.
