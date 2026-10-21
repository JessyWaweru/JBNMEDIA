import SpotlightCard from '../reactbits/SpotlightCard';
import { useFinePointer } from '../../hooks/useFinePointer';

// SpotlightCard that still glows on touch screens: with no cursor to follow, the light drifts on its own.
export default function GlowCard(props) {
  const finePointer = useFinePointer();
  return <SpotlightCard ambient={!finePointer} {...props} />;
}
