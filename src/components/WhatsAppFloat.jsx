import { useLocation } from 'react-router-dom';
import { waLink } from '../config';
import { WhatsAppIcon } from './Icons';

const pageMessages = {
  '/pricing': "Hi JBN Media, I've seen your pricing and I have a question.",
  '/services': "Hi JBN Media, I'd like to talk about a project for my business.",
};

export default function WhatsAppFloat() {
  const { pathname } = useLocation();
  return (
    <a
      className="wa-float"
      href={waLink(pageMessages[pathname])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JBN Media on WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
