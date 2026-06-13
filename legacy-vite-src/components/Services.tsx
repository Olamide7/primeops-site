import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="label">The Hierarchy of Growth</div>
          <h2 className="heading-lg" style={{ marginTop: 16, maxWidth: 640 }}>
            Build your foundation.<br/><em className="teal">Automate your scale.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginTop: 16, maxWidth: 580 }}>
            Every business needs a professional presence that converts. 
            Once your foundation is solid, we layer on AI and automation to handle 
            the volume without adding overhead.
          </p>
        </motion.div>

        {/* ── Foundational Service ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="service-feature-box"
          style={{ marginTop: 64, background: 'var(--surface-2)', borderRadius: 'var(--radius-xl)', padding: '64px', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
        >
          <div className="service-feature-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="service-icon" style={{ marginBottom: 24 }}>
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/>
                </svg>
              </div>
              <h3 className="heading-md" style={{ fontSize: 32, marginBottom: 20 }}>The Foundational<br/>High-Converting Website</h3>
              <p className="service-desc" style={{ fontSize: 16, maxWidth: 440, marginBottom: 32 }}>
                Your digital storefront is your most important asset. We build premium, 
                blazing-fast websites that don't just look good — they are engineered to 
                convert visitors into paying clients.
              </p>
              <ul className="service-features" style={{ columns: 2, gap: 32 }}>
                <li>Sub-2 second load times</li>
                <li>Conversion-optimized flow</li>
                <li>Local SEO & Google Setup</li>
                <li>Mobile-first architecture</li>
                <li>Integrated booking systems</li>
                <li>Review management engine</li>
              </ul>
            </div>
            <div style={{ background: 'var(--black)', borderRadius: 'var(--radius-lg)', height: 320, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'var(--muted)' }}>
              [ Website Preview Visual ]
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '30%', background: 'linear-gradient(90deg, transparent, var(--teal-glow2))', pointerEvents: 'none' }}></div>
        </motion.div>

        {/* ── Multiplier Services ── */}
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {/* AI Receptionist Upsell */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="service-card featured"
            style={{ padding: 48 }}
          >
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            </div>
            <div className="label" style={{ marginBottom: 12, border: 'none', background: 'transparent', padding: 0 }}>Premium Upsell</div>
            <div className="service-title" style={{ fontSize: 24, marginBottom: 16 }}>AI Receptionist<br/>Systems</div>
            <p className="service-desc">
              Never miss a lead again. Our AI answers your calls 24/7, books appointments 
              in your calendar, and handles customer FAQs in your exact brand voice.
            </p>
            <ul className="service-features" style={{ marginTop: 24 }}>
              <li>24/7 Live call handling</li>
              <li>Instant booking sync</li>
              <li>Multilingual (English/Pidgin)</li>
              <li>SMS/WhatsApp follow-ups</li>
            </ul>
          </motion.div>

          {/* n8n Automation Separate Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="service-card"
            style={{ padding: 48 }}
          >
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
              </svg>
            </div>
            <div className="label" style={{ marginBottom: 12, border: 'none', background: 'transparent', padding: 0 }}>Backend Operations</div>
            <div className="service-title" style={{ fontSize: 24, marginBottom: 16 }}>n8n Workflow<br/>Automations</div>
            <p className="service-desc">
              Eliminate manual data entry. We connect your lead sources, CRM, 
              and marketing tools into one automated engine that runs behind the scenes.
            </p>
            <ul className="service-features" style={{ marginTop: 24 }}>
              <li>CRM & Tool integration</li>
              <li>Automated lead routing</li>
              <li>Custom n8n architecture</li>
              <li>Operational efficiency audits</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
