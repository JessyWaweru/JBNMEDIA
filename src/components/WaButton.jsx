import { waLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function WaButton({ message, children = 'Chat on WhatsApp', className = '', size }) {
  return (
    <a
      className={`btn btn-wa ${size === 'lg' ? 'btn-lg' : ''} ${className}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
