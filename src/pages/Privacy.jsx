import Seo from '../components/Seo';
import { SITE } from '../config';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy policy" description="How JBN Media collects, uses and protects your personal information." />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">Legal</span><h1>Privacy policy</h1><p className="muted">Last updated: October 2026</p></div></section>
      <section className="section pt-0">
        <div className="container narrow prose">
          <p>JBN Media ("we", "us") respects your privacy and handles personal data in line with the Kenya Data Protection Act, 2019. This policy explains what we collect and how we use it.</p>
          <h2>What we collect</h2>
          <ul>
            <li>Details you give us when you contact us: name, business name, phone number, email and your message.</li>
            <li>Information you share while we work together, such as content for your website or marketing.</li>
            <li>Payment confirmations for M-Pesa payments made to us.</li>
          </ul>
          <p>This website does not use advertising cookies or require you to create an account. The enquiry form does not store your details on our servers; it opens WhatsApp or your email app so you can send the message yourself.</p>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and prepare quotes.</li>
            <li>To deliver the services you have paid for and send you reports.</li>
            <li>To keep records required for accounting and tax.</li>
          </ul>
          <p>We do not sell your data. When we work with a partner agency on your project, we only share what they need to do the work, and only with your agreement.</p>
          <h2>Your customers' data</h2>
          <p>Where we build a system that handles your customers' or members' data (for example a Chama/SACCO system or M-Pesa payments), you remain the data controller and we act as a processor on your instructions.</p>
          <h2>Your rights</h2>
          <p>You can ask to see, correct or delete the personal data we hold about you at any time by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Third parties</h2>
          <p>WhatsApp (Meta), Safaricom M-Pesa and our email and hosting providers process data under their own privacy policies.</p>
        </div>
      </section>
    </>
  );
}
