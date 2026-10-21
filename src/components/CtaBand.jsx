import { Link } from 'react-router-dom';
import WaButton from './WaButton';
import Silk from './reactbits/Silk';
import StarBorder from './reactbits/StarBorder';
import Reveal from './fx/Reveal';

export default function CtaBand({
  title = 'Ready to get your business found online?',
  text = 'Send us a WhatsApp message. We reply fast, and the first chat is free with no obligation.',
  message,
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <Silk className="cta-silk" color="#0b6e4f" sheenColor="#ffb703" speed={3} scale={1.2} sheen={0.35} glow={0.25} />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="cta-actions">
              <WaButton message={message} size="lg">Chat on WhatsApp</WaButton>
              <StarBorder as={Link} to="/pricing" className="btn btn-lg star-btn" color="#ffb703" radius={999} duration={3} sparkle>
                See pricing
              </StarBorder>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
