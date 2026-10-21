import AnimatedContent from '../reactbits/AnimatedContent';

// Fades content up into view on scroll. With `stagger`, each direct child animates in turn.
export default function Reveal({ children, className, stagger = 0, delay = 0, distance = 40 }) {
  return (
    <AnimatedContent
      className={className}
      distance={distance}
      duration={0.6}
      stagger={stagger}
      delay={delay}
      threshold={0.15}
    >
      {children}
    </AnimatedContent>
  );
}
