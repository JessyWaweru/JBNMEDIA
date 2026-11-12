import { Link } from 'react-router-dom';
import Reveal from './fx/Reveal';
import { Arrow } from './Icons';
import { goherbal, keepMpesa } from '../data/work';

// Card linking to a case study (the GoHerbal shop by default). `as` sets the heading level for where it sits on the page.
export function CaseStudyCard({ as: Heading = 'h2', study = goherbal, headingId = 'case-teaser-title' }) {
  return (
    <Link to={study.path} className="case-teaser">
      <div className="device device-thumb" aria-hidden="true">
        <img src={study.poster} alt="" width={study.posterSize.width} height={study.posterSize.height} loading="lazy" decoding="async" />
      </div>
      <div className="case-teaser-head">
        <span className="eyebrow">Case study</span>
        <Heading id={headingId}>{study.title}</Heading>
      </div>
      <div className="case-teaser-body">
        <p>{keepMpesa(study.teaser)}</p>
        <span className="text-link">Read the case study <Arrow /></span>
      </div>
    </Link>
  );
}

// The same card as its own section, used on the services page.
export default function CaseStudyTeaser() {
  return (
    <section className="section pt-0" aria-labelledby="case-teaser-title">
      <div className="container">
        <Reveal>
          <CaseStudyCard />
        </Reveal>
      </div>
    </section>
  );
}
