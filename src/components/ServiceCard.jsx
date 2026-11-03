import { Link } from 'react-router-dom';
import WaButton from './WaButton';
import GlowCard from './fx/GlowCard';
import { WhatsAppIcon, Chat, Megaphone, Globe, Report, Video, Check, Arrow } from './Icons';

const icons = {
  whatsapp: <WhatsAppIcon size={24} />,
  chat: <Chat />,
  megaphone: <Megaphone />,
  globe: <Globe />,
  report: <Report />,
  video: <Video />,
};

// One service from src/data/services.js, with its price list and a WhatsApp button.
// The `lead` service gets the dark, highlighted treatment.
export default function ServiceCard({ service: s }) {
  return (
    <GlowCard
      id={s.id}
      className={`offer ${s.lead ? 'offer-lead' : ''}`}
      theme={s.lead ? undefined : 'light'}
      spotlightColor={s.lead ? '#ffb703' : '#0b6e4f'}
      intensity={0.3}
    >
      <div className="offer-main">
        {s.badge && <span className="plan-badge">{s.badge}</span>}
        <div className="offer-top">
          <span className={`icon-box ${s.lead ? 'icon-box-wa' : ''}`}>{icons[s.icon]}</span>
          <h3>{s.title}</h3>
        </div>
        <p className="offer-text">{s.text}</p>
        {s.points && (
          <ul className="ticks offer-ticks-list">
            {s.points.map((p) => (<li key={p}><Check /> <span>{p}</span></li>))}
          </ul>
        )}
        {s.note && <p className="offer-note"><Check /> {s.note}</p>}
        {s.link && <Link to={s.link.to} className="text-link offer-link">{s.link.label} <Arrow /></Link>}
      </div>
      {/* Prices and button sit at the bottom so they line up across a row. */}
      <div className="offer-side">
        <dl className="offer-prices">
          {s.prices.map((p) => (
            <div key={p.label}>
              <dt>{p.label}</dt>
              <dd>{p.amount}</dd>
            </div>
          ))}
        </dl>
        <WaButton message={s.wa} className="btn-block">Ask about this</WaButton>
      </div>
    </GlowCard>
  );
}
