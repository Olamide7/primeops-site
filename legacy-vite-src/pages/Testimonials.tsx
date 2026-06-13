import React from 'react';
import { PageHero } from '../components/shared/PageHero';
import { SectionHeader } from '../components/shared/SectionHeader';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  {
    quote: "PrimeOps completely transformed how we handle incoming leads. Deploying the AI Voice Receptionist recovered 98% of our previously missed calls. The scheduling automation saves our front office team 10+ hours every week.",
    author: "Oluwaseun Alabi",
    role: "Operations Director, The Sterling Group",
    metric: "+40% Reservations",
    industry: "Hospitality",
  },
  {
    quote: "Our website was a static page before PrimeOps. They rebuilt it on a high-performance stack, optimized our conversion flows, and built a custom client intake portal. Our bookings tripled within the first 30 days of launch.",
    author: "Barrister Funmi Martins",
    role: "Senior Partner, Martins & Associates",
    metric: "3× Bookings",
    industry: "Legal Services",
  },
  {
    quote: "The n8n automations designed by PrimeOps connected our CRM directly to our listing databases and communication channels. What used to take our sales agents half the day now happens automatically in 30 seconds.",
    author: "Patterson Kelly",
    role: "Founder, Patterson Realty",
    metric: "15hr Saved / Wk",
    industry: "Real Estate",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <>
      <PageHero
        label="Testimonials"
        title={<>What our clients say about <em className="teal">PrimeOps.</em></>}
        subtitle="We build relationships based on execution and results. Read how our technical systems have accelerated revenue for growth-stage businesses."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Testimonials' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-industry">{t.industry}</div>
                <div className="testimonial-metric-pill">{t.metric}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-name">{t.author}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="case-study-showcase">
            <SectionHeader
              label="Interactive Demo"
              title={<>See the systems in <em className="teal">action.</em></>}
              centered
            />
            <div className="video-container" style={{ maxWidth: 800, margin: '32px auto 0' }}>
              <div className="video-ratio-box">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="PrimeOps Infrastructure Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-inner">
            <h2 className="heading-lg">Ready to write your own<br/><em className="teal">success story?</em></h2>
            <p className="cta-sub">Join dozens of growth-stage companies leveraging PrimeOps technical systems to scale.</p>
            <div className="cta-actions">
              <Link to="/audit" className="btn-primary">Book Your Free Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
