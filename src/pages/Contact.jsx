import { useState } from 'react';
import Seo from '../components/Seo';
import WaButton from '../components/WaButton';
import { SITE, waLink, telLink, mailLink } from '../config';
import PageHero from '../components/fx/PageHero';
import Reveal from '../components/fx/Reveal';
import BorderGlow from '../components/reactbits/BorderGlow';
import GlareHover from '../components/reactbits/GlareHover';
import Particles from '../components/reactbits/Particles';
import TextType from '../components/reactbits/TextType';
import { WhatsAppIcon, Mail, Pin, Clock, Call } from '../components/Icons';

const services = [
  'Online Presence plan (KES 8,000/month)',
  'Growth plan (KES 15,000/month)',
  'Content Clips (from KES 6,000/month)',
  'Business Website',
  'M-Pesa Integration',
  'Chama / SACCO System',
  'Website Maintenance',
  'Website Care',
  'Custom software',
  'Something else',
];

function buildMessage(f) {
  return [
    `Hi JBN Media, my name is ${f.name}.`,
    f.business && `Business: ${f.business}`,
    f.phone && `Phone: ${f.phone}`,
    f.service && `Interested in: ${f.service}`,
    f.message && `\n${f.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', service: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(buildMessage(form)), '_blank', 'noopener');
  };

  const sendEmail = () => {
    if (!form.name) return;
    window.location.href = mailLink(`Enquiry: ${form.service || 'General'}`, buildMessage(form));
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Contact JBN Media on WhatsApp or email. Websites, M-Pesa integration, Chama/SACCO systems and social media marketing across Kenya."
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        lead={
          <>
            <p>The fastest way to reach us is WhatsApp. We usually reply within the hour during working hours.</p>
            <TextType
              as="p"
              className="contact-type"
              text={['Need a website?', 'Want M-Pesa payments?', 'Running a chama or SACCO?', 'Want more customers?']}
              prefix="› "
              prefixColor="#ffb703"
              typingSpeed={45}
              pauseDuration={1600}
              cursorCharacter="▍"
              startOnVisible
            />
          </>
        }
        background={
          <Particles
            particleColors={['#0b6e4f', '#25d366', '#ffb703']}
            particleCount={140}
            particleSpread={12}
            speed={0.08}
            particleBaseSize={90}
            alphaParticles
            lightMode
            connections
            disableRotation
          />
        }
      />

      <section className="section pt-0">
        <div className="container contact-grid">
          <div className="contact-side">
            <Reveal>
            <GlareHover className="contact-wa-glare" mode="loop" interval={3.5} glareColor="#ffffff" glareOpacity={0.6} borderRadius="18px">
            <a className="contact-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
              <span className="contact-wa-icon"><WhatsAppIcon size={28} /></span>
              <span>
                <b>Chat on WhatsApp</b>
                <small>{SITE.whatsappDisplay}</small>
              </span>
            </a>
            </GlareHover>
            </Reveal>
            <Reveal className="contact-list" stagger={0.08}>
              <div className="contact-item"><span className="icon-box icon-sm"><Call /></span><div><b>Call us</b><a href={telLink()}>{SITE.phoneDisplay}</a></div></div>
              <div className="contact-item"><span className="icon-box icon-sm"><Mail /></span><div><b>Email</b><a href={mailLink()}>{SITE.email}</a></div></div>
              <div className="contact-item"><span className="icon-box icon-sm"><Pin /></span><div><b>Location</b><span>We work with businesses all over {SITE.location}, online or in person.</span></div></div>
              <div className="contact-item"><span className="icon-box icon-sm"><Clock /></span><div><b>Hours</b><span>{SITE.hours}</span></div></div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
          <BorderGlow className="form-glow" backgroundColor="#ffffff" borderRadius={18} glowColor="150 80 35" colors={['#0b6e4f', '#25d366', '#ffb703']}>
          <form className="form" onSubmit={submit}>
            <h2>Send an enquiry</h2>
            <p className="muted">Fill this in and it opens WhatsApp with your message ready to send.</p>
            <div className="form-row">
              <label>
                Your name *
                <input name="name" required value={form.name} onChange={update} autoComplete="name" />
              </label>
              <label>
                Business name
                <input name="business" value={form.business} onChange={update} autoComplete="organization" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone number
                <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" placeholder="07XX XXX XXX" />
              </label>
              <label>
                I'm interested in
                <select name="service" value={form.service} onChange={update}>
                  <option value="">Choose a service</option>
                  {services.map((s) => (<option key={s}>{s}</option>))}
                </select>
              </label>
            </div>
            <label>
              Tell us a bit about what you need
              <textarea name="message" rows={4} value={form.message} onChange={update} />
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-wa btn-lg">
                <WhatsAppIcon /> <span>Send via WhatsApp</span>
              </button>
              <button type="button" className="btn btn-outline btn-lg" onClick={sendEmail} disabled={!form.name}>
                <Mail /> <span>Send via email</span>
              </button>
            </div>
          </form>
          </BorderGlow>
          </Reveal>
        </div>
      </section>
    </>
  );
}
