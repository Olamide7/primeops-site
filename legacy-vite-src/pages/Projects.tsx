import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { ProjectCard } from '../components/shared/ProjectCard';

const PROJECTS = [
  {
    title: 'AI Receptionist Deployment for Multi-Location Restaurant',
    client: 'The Sterling Group',
    industry: 'Hospitality',
    challenge: 'Missing 30+ calls per week during peak hours and evenings. Front desk overwhelmed, leading to lost reservations and revenue.',
    solution: 'Deployed a custom AI Voice Receptionist handling unlimited concurrent calls 24/7, with direct calendar booking, WhatsApp confirmations, and multilingual support (English & Pidgin).',
    metrics: [
      { label: 'Calls Recovered', value: '98%' },
      { label: 'Revenue Increase', value: '+40%' },
      { label: 'No-Show Reduction', value: '-45%' },
    ],
    tags: ['AI Receptionist', 'WhatsApp API', 'Cal.com'],
  },
  {
    title: 'End-to-End Digital Infrastructure for Law Firm',
    client: 'Martins & Associates',
    industry: 'Legal Services',
    challenge: 'Outdated website with zero lead generation. Manual appointment scheduling causing double-bookings and client frustration.',
    solution: 'Built a premium, SEO-optimized website with integrated booking system, deployed AI call handling for after-hours enquiries, and automated client intake with CRM sync.',
    metrics: [
      { label: 'Bookings Tripled', value: '3×' },
      { label: 'Google Ranking', value: '#1' },
      { label: 'Setup Time', value: '14 days' },
    ],
    tags: ['Web Development', 'AI Receptionist', 'SEO'],
  },
  {
    title: 'Workflow Automation for Real Estate Agency',
    client: 'Patterson Realty',
    industry: 'Real Estate',
    challenge: 'Agents spending 15+ hours/week on manual data entry, lead follow-ups, and scheduling. Leads falling through the cracks.',
    solution: 'Engineered custom n8n workflows connecting their CRM, email marketing, calendar, and listing platforms. Automated lead scoring, routing, and nurture sequences.',
    metrics: [
      { label: 'Hours Saved/Week', value: '15+' },
      { label: 'Lead Response Time', value: '<2min' },
      { label: 'Conversion Rate', value: '+65%' },
    ],
    tags: ['n8n Automation', 'CRM Integration', 'Lead Scoring'],
  },
  {
    title: 'Growth System for Tech Startup',
    client: 'NovaTech Solutions',
    industry: 'Technology',
    challenge: 'Rapid growth outpacing manual processes. No unified system for lead capture, onboarding, and client communication.',
    solution: 'Full Business Growth System deployment — new high-converting website, AI receptionist for investor and client calls, and complete workflow automation connecting all tools.',
    metrics: [
      { label: 'Monthly Leads', value: '+312%' },
      { label: 'Onboarding Time', value: '-70%' },
      { label: 'ROI (90 days)', value: '8×' },
    ],
    tags: ['Full Stack', 'AI Receptionist', 'Automation'],
  },
];

export const Projects: React.FC = () => {
  return (
    <>
      <PageHero
        label="Our Work"
        title={<>Operational bottlenecks<br/><em className="teal">solved.</em></>}
        subtitle="Real case studies from real businesses. See how PrimeOps infrastructure has transformed operations and accelerated revenue growth."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>

          <div className="projects-cta">
            <p className="projects-cta-text">
              These are just a few of the businesses we've transformed.
              Ready to see what PrimeOps can do for you?
            </p>
            <Link to="/audit" className="btn-primary">
              Start Your Free Audit
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
