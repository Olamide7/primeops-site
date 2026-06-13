import React from 'react';
import { PageHero } from '../components/shared/PageHero';
import { AccordionItem } from '../components/shared/AccordionItem';
import { SectionHeader } from '../components/shared/SectionHeader';
import { Link } from 'react-router-dom';

const GENERAL_FAQS = [
  {
    question: 'What does PrimeOps actually do?',
    answer: 'We are a technical growth agency. We build high-performance web applications, integrate custom AI Voice Receptionist systems to handle calling operations, and build custom n8n integrations to automate repetitive, manual business workflows.',
  },
  {
    question: 'How do you price your services?',
    answer: 'We use dynamic geo-pricing. Clients visiting from Nigeria see rates in Naira (₦) scaled to local purchasing contexts, while international clients see rates in US Dollars ($). Services are billed as project-based setup fees, with optional support retainer agreements.',
  },
  {
    question: 'Do you work with startups or enterprises?',
    answer: 'We work with both! Our core solutions are built to be modular. Startups typically begin with a high-performance web store or simple lead capture automation, while established corporate clients deploy our multi-location AI receptionist systems and complex database integrations.',
  },
];

const TECHNICAL_FAQS = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We build primarily with modern, performant stacks including React, TypeScript, Vite, Tailwind CSS, and Node.js. All projects are compiled to static files and served via global CDN edges (like Netlify/Vercel) to ensure sub-2 second load times and enterprise-grade security.',
  },
  {
    question: 'How secure is the AI Receptionist system?',
    answer: 'Extremely secure. All calling data, user information, and logs are encrypted in transit and at rest. The system integrates securely with your calendar (Google Calendar, Outlook) and CRM (HubSpot, Salesforce) via OAuth protocols without exposing raw database credentials.',
  },
  {
    question: 'Can you integrate with our existing software tools?',
    answer: 'Yes. Our custom automations connect via API endpoints. We routinely connect CRMs (HubSpot, Zoho, Salesforce), communication channels (Slack, Microsoft Teams, WhatsApp), accounting tools (Xero, QuickBooks), and email servers to make your software stack work as one unified system.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <>
      <PageHero
        label="FAQ"
        title={<>Frequently Asked <em className="teal">Questions.</em></>}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeader
            label="General Questions"
            title="Understanding our services and approach"
          />
          <div className="faq-list">
            {GENERAL_FAQS.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
            ))}
          </div>

          <div style={{ marginTop: 64 }}>
            <SectionHeader
              label="Technical & Integrations"
              title="Under the hood of our implementations"
            />
            <div className="faq-list">
              {TECHNICAL_FAQS.map((faq, i) => (
                <AccordionItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="faq-cta-box">
            <h3>Still have questions?</h3>
            <p>Our engineering team is ready to answer any technical or operational queries you might have.</p>
            <div className="faq-cta-actions">
              <Link to="/contact" className="btn-primary">Contact Our Team</Link>
              <a href="https://wa.me/2348000000000" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
