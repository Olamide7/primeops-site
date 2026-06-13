import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { SectionHeader } from '../components/shared/SectionHeader';

const VALUES = [
  {
    icon: '⚡',
    title: 'Relentless Execution',
    desc: 'We don\'t just strategize — we ship. Every engagement comes with clear deliverables, hard deadlines, and measurable outcomes.',
  },
  {
    icon: '🔧',
    title: 'Systems Over Services',
    desc: 'We build systems that run without you. Not retainer traps that keep you dependent. Our job is to make ourselves unnecessary.',
  },
  {
    icon: '🎯',
    title: 'Revenue-First Engineering',
    desc: 'Every line of code we write is measured against one metric: does it generate revenue or reduce costs? If not, we don\'t build it.',
  },
  {
    icon: '🌍',
    title: 'Built for Scale',
    desc: 'Whether you\'re an SME in Lagos or an enterprise in New York, our infrastructure is designed to grow with you, not against you.',
  },
];

const MILESTONES = [
  { year: '2023', title: 'Founded', desc: 'PrimeOps launched with a mission to democratize enterprise-grade digital infrastructure for growth-stage businesses.' },
  { year: '2024', title: 'AI Integration', desc: 'Deployed our first AI Voice Receptionist system, handling 10,000+ calls in its first quarter.' },
  { year: '2025', title: 'Global Expansion', desc: 'Extended operations to serve international markets while maintaining our roots in Nigerian enterprise.' },
  { year: '2026', title: 'Full-Stack Automation', desc: 'Launched end-to-end workflow automation, integrating AI, CRM, and communication systems into unified growth engines.' },
];

export const About: React.FC = () => {
  return (
    <>
      <PageHero
        label="About PrimeOps"
        title={<>Engineering growth through <em className="teal">intelligent technology.</em></>}
        subtitle="We are a B2B Technical Growth Agency that builds the digital infrastructure ambitious businesses need to scale — from high-performance websites to AI-powered systems and custom automation."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Our Mission"
                title={<>Eliminate operational friction.<br/>Accelerate <em className="teal">revenue growth.</em></>}
              />
              <p className="about-mission-text">
                Most businesses don't have a marketing problem — they have an infrastructure problem.
                Leads come in but get lost in broken workflows. Calls go unanswered. Manual processes
                eat hours that should be spent on growth. PrimeOps exists to fix this.
              </p>
              <p className="about-mission-text">
                We engineer the systems that sit between your customer and your revenue — high-converting
                websites, AI receptionist systems that never miss a call, and workflow automations that
                eliminate the manual grunt work holding your team back.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-mission-stats"
            >
              <div className="about-stat-card">
                <div className="about-stat-num">50+</div>
                <div className="about-stat-label">Businesses Transformed</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">98%</div>
                <div className="about-stat-label">Client Retention Rate</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">3×</div>
                <div className="about-stat-label">Avg. Revenue Increase</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">24/7</div>
                <div className="about-stat-label">System Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <SectionHeader
            label="Our Values"
            title={<>The principles that drive<br/>every <em className="teal">decision.</em></>}
            centered
          />
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Our Journey"
            title={<>From Lagos to <em className="teal">the world.</em></>}
            centered
          />
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h3 className="timeline-title">{m.title}</h3>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="cta-inner"
          >
            <div className="label" style={{ justifyContent: 'center' }}>Ready to Scale</div>
            <h2 className="heading-lg">
              Let's engineer your<br/><em className="teal">growth infrastructure.</em>
            </h2>
            <p className="cta-sub">
              Book a free operational audit and discover exactly where your business is leaking revenue.
            </p>
            <div className="cta-actions">
              <Link to="/audit" className="btn-primary">Book Your Free Audit</Link>
              <Link to="/contact" className="btn-ghost">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
