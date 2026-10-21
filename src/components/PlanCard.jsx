import WaButton from './WaButton';
import CountUp from './reactbits/CountUp';
import ElectricBorder from './reactbits/ElectricBorder';
import { Check } from './Icons';

export default function PlanCard({ plan }) {
  const card = (
    <article className={`plan ${plan.featured ? 'plan-featured' : ''}`} id={plan.id}>
      {plan.badge && <span className="plan-badge">{plan.badge}</span>}
      <h3 className="plan-name">{plan.name}</h3>
      <p className="plan-blurb">{plan.blurb}</p>
      <div className="plan-price">
        {plan.from && <span className="plan-from">from</span>}
        <span className="plan-currency">KES</span>
        <span className="plan-amount">
          <CountUp to={Number(plan.price.replace(/,/g, ''))} separator="," duration={1.2} />
        </span>
        <span className="plan-unit">{plan.unit}</span>
      </div>
      <ul className="plan-features">
        {plan.features.map((f) => (
          <li key={f}>
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <WaButton message={plan.wa} className="btn-block">
        Get started on WhatsApp
      </WaButton>
    </article>
  );

  if (!plan.featured) return card;
  return (
    <ElectricBorder className="plan-electric" color="#0b6e4f" theme="light" borderRadius={18} speed={0.8} chaos={0.35} thickness={1.5}>
      {card}
    </ElectricBorder>
  );
}
