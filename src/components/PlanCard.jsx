import WaButton from './WaButton';
import { Check } from './Icons';

export default function PlanCard({ plan }) {
  return (
    <article className={`plan ${plan.featured ? 'plan-featured' : ''}`} id={plan.id}>
      {plan.badge && <span className="plan-badge">{plan.badge}</span>}
      <h3 className="plan-name">{plan.name}</h3>
      <p className="plan-blurb">{plan.blurb}</p>
      <div className="plan-price">
        {plan.from && <span className="plan-from">from</span>}
        <span className="plan-currency">KES</span>
        <span className="plan-amount">{plan.price}</span>
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
}
