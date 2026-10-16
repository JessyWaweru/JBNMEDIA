import { Link } from 'react-router-dom';
import WaButton from './WaButton';

export default function CtaBand({
  title = 'Ready to get your business found online?',
  text = 'Send us a WhatsApp message. We reply fast, and the first chat is free with no obligation.',
  message,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <WaButton message={message} size="lg">Chat on WhatsApp</WaButton>
            <Link to="/pricing" className="btn btn-ghost-light btn-lg">See pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
