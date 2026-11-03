import { keepMpesa } from '../data/work';

export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>{keepMpesa(item.q)}</summary>
          <p>{keepMpesa(item.a)}</p>
        </details>
      ))}
    </div>
  );
}
