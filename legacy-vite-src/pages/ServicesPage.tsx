import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { SectionHeader } from '../components/shared/SectionHeader';
import { GeoPricingToggle } from '../components/shared/GeoPricingToggle';
import { useGeoPricing } from '../hooks/useGeoPricing';

const SERVICES = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/>
      </svg>
    ),
    pillar: 'Pillar 01',
    title: 'High-Performance Web Development',
    desc: 'Your digital storefront is your most important asset. We engineer premium, blazing-fast websites that don\'t just look exceptional — they are purpose-built to convert visitors into paying clients.',
    features: [
      'Custom UI/UX design tailored to your brand',
      'Sub-2 second load time optimization',
      'SEO & Google Business profile setup',
      'Conversion-optimized user flows',
      'Mobile-first responsive architecture',
      'Integrated booking & CRM systems',
      'Analytics & performance dashboards',
      'Ongoing maintenance & support plans',
    ],
    priceNGN: 'From ₦450,000',
    priceUSD: 'From $1,200',
    period: 'one-time project fee',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    pillar: 'Pillar 02',
    title: 'AI Voice Receptionist Systems',
    desc: 'Never miss another lead. Our AI answers your calls 24/7, books appointments directly into your calendar, and handles customer enquiries in your exact brand voice — in multiple languages.',
    features: [
      'Custom AI voice cloning & brand tone',
      '24/7 live call handling — zero downtime',
      'Instant calendar booking & sync',
      'Multilingual support (English, Yoruba, Pidgin)',
      'SMS & WhatsApp follow-up automation',
      'Call analytics & sentiment tracking',
      'Seamless CRM integration',
      'Custom FAQ & knowledge base training',
    ],
    priceNGN: '₦600,000',
    priceUSD: '$1,500',
    period: 'setup + monthly usage',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    pillar: 'Pillar 03',
    title: 'Custom Workflow Automations',
    desc: 'Eliminate manual data entry and human bottlenecks. We connect your lead sources, CRM, marketing tools, and communication channels into one automated engine that runs 24/7 behind the scenes.',
    features: [
      'Custom n8n workflow architecture',
      'CRM & tool integration (HubSpot, Airtable, etc.)',
      'Automated lead routing & scoring',
      'Email & SMS drip campaign automation',
      'Invoice & payment processing flows',
      'Data sync across all platforms',
      'Operational efficiency audits',
      'Custom API integrations',
    ],
    priceNGN: 'From ₦300,000',
    priceUSD: 'From $800',
    period: 'setup + optional support',
  },
];

export const ServicesPage: React.FC = () => {
  const { region, toggleRegion } = useGeoPricing();
  const isNigeria = region === 'ng';

  return (
    <>
      <PageHero
        label="Our Services"
        title={<>Three pillars of<br/><em className="teal">technical growth.</em></>}
        subtitle="We don't offer cookie-cutter packages. Each pillar is a standalone system that compounds when combined. Build your foundation, then scale."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="section">
        <div className="container">
          <GeoPricingToggle region={region} onToggle={toggleRegion} />

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`service-detail-block ${i === 1 ? 'featured' : ''}`}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">{service.icon}</div>
                <div className="service-detail-meta">
                  <div className="label" style={{ border: 'none', background: 'transparent', padding: 0 }}>{service.pillar}</div>
                  <h2 className="service-detail-title">{service.title}</h2>
                </div>
                <div className="service-detail-price">
                  <div className="service-detail-amount">
                    {isNigeria ? service.priceNGN : service.priceUSD}
                  </div>
                  <div className="service-detail-period">{service.period}</div>
                </div>
              </div>
              <p className="service-detail-desc">{service.desc}</p>
              <div className="service-detail-features">
                {service.features.map((f, fi) => (
                  <div key={fi} className="service-detail-feat">
                    <span className="service-detail-check">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/audit" className="btn-primary" style={{ marginTop: 32 }}>
                Get Started with {service.title.split(' ').slice(0, 2).join(' ')}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="cta-inner"
          >
            <div className="label" style={{ justifyContent: 'center' }}>The Full Stack</div>
            <h2 className="heading-lg">
              Want all three pillars?<br/><em className="teal">Business Growth System.</em>
            </h2>
            <p className="cta-sub">
              The complete growth engine — custom website, AI receptionist, and deep automation — all integrated into one seamless system. Custom-quoted for your exact needs.
            </p>
            <div className="cta-actions">
              <Link to="/audit" className="btn-primary">Request a Custom Quote</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
