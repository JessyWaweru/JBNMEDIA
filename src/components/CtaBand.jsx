import { Link } from 'react-router-dom';
import WaButton from './WaButton';
import Silk from './reactbits/Silk';
import StarBorder from './reactbits/StarBorder';
import Reveal from './fx/Reveal';

export default function CtaBand({
  title = 'Ready to stop missing customers?',
  text = 'Send us a WhatsApp message to book a free 15-minute call. No obligation.',
  message,
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <Silk className="cta-silk" color="#7a1d3f" sheenColor="#e8a83b" speed={3} scale={1.2} sheen={0.35} glow={0.25} />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="cta-actions">
              <WaButton message={message} size="lg">Chat on WhatsApp</WaButton>
              <StarBorder as={Link} to="/pricing" className="btn btn-lg star-btn" color="#e8a83b" radius={999} duration={3} sparkle>
                See pricing
              </StarBorder>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
