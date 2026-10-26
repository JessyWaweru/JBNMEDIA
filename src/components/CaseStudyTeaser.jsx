import { Link } from 'react-router-dom';
import Reveal from './fx/Reveal';
import { Arrow } from './Icons';
import { goherbal } from '../data/work';

// Card linking to the GoHerbal case study, used on the home and services pages.
export default function CaseStudyTeaser() {
  return (
    <section className="section pt-0" aria-labelledby="case-teaser-title">
      <div className="container">
        <Reveal>
          <Link to={goherbal.path} className="case-teaser">
            <div className="device device-thumb" aria-hidden="true">
              <img src={goherbal.poster} alt="" width={goherbal.posterSize.width} height={goherbal.posterSize.height} loading="lazy" decoding="async" />
            </div>
            <div className="case-teaser-head">
              <span className="eyebrow">Case study</span>
              <h2 id="case-teaser-title">{goherbal.title}</h2>
            </div>
            <div className="case-teaser-body">
              <p>{goherbal.teaser}</p>
              <span className="text-link">Read the case study <Arrow /></span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
