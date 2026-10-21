import SplitText from '../reactbits/SplitText';

// Inner-page hero: animated headline over an optional interactive background.
export default function PageHero({ eyebrow, title, lead, background, className = '', children }) {
  return (
    <section className={`page-hero page-hero-fx ${className}`}>
      {background && <div className="page-hero-bg" aria-hidden="true">{background}</div>}
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <SplitText
          tag="h1"
          text={title}
          textAlign="left"
          splitType="words"
          delay={70}
          duration={0.9}
          rootMargin="0px"
          className="page-hero-title"
        />
        {lead && <div className="lead">{lead}</div>}
        {children}
      </div>
    </section>
  );
}
