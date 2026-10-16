import Seo from '../components/Seo';
import { SITE } from '../config';

export default function Terms() {
  return (
    <>
      <Seo title="Terms of service" description="JBN Media terms of service: payments, deposits, monthly plans and project delivery." />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">Legal</span><h1>Terms of service</h1><p className="muted">Last updated: October 2026</p></div></section>
      <section className="section pt-0">
        <div className="container narrow prose">
          <p>These terms apply to services provided by JBN Media. By paying a deposit or subscribing to a monthly plan, you agree to them.</p>
          <h2>Quotes and pricing</h2>
          <p>Prices on our website are in Kenya Shillings. Prices marked "from" are starting prices for the standard package; your final price is confirmed in a written quote before work begins.</p>
          <h2>One-off projects</h2>
          <ul>
            <li>A 50% deposit is required to start. The balance is due on handover.</li>
            <li>Timelines start once we receive the deposit and the content we need from you.</li>
            <li>Once paid in full, you own the website or system we built for you, including your domain.</li>
            <li>Changes outside the agreed scope are quoted separately.</li>
          </ul>
          <h2>Monthly plans</h2>
          <ul>
            <li>Monthly plans (Online Presence, Growth, Website Care) are paid in advance each month.</li>
            <li>They run month to month. You can cancel anytime before your next month starts.</li>
            <li>Advertising spend is not included and is paid directly to the ad platform.</li>
          </ul>
          <h2>Payments</h2>
          <p>Payments are made via M-Pesa. Work may be paused if a payment is overdue.</p>
          <h2>Third-party services</h2>
          <p>Our work may rely on services such as Safaricom M-Pesa, Meta (Facebook, Instagram, WhatsApp), Google and hosting providers. We are not responsible for outages or policy changes on those platforms, but we will help you work around them.</p>
          <h2>Results</h2>
          <p>We work hard to grow your reach and enquiries, but we cannot guarantee specific sales results.</p>
          <h2>Contact</h2>
          <p>Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
