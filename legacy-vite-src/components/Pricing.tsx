import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGeoPricing } from '../hooks/useGeoPricing';

export const Pricing: React.FC = () => {
  const { region, toggleRegion } = useGeoPricing();
  const isNigeria = region === 'ng';

  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="pricing-header"
        >
          <div className="label">Pricing</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            Scale-ready infrastructure.<br />
            Built for <em className="teal">market dominance.</em>
          </h2>
        </motion.div>

        {/* Geo Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="geo-toggle-wrap"
        >
          <div className="geo-toggle" id="geo-toggle">
            <button
              className={`geo-toggle-btn ${isNigeria ? 'active' : ''}`}
              onClick={() => toggleRegion('ng')}
            >
              🇳🇬 Nigeria
            </button>
            <button
              className={`geo-toggle-btn ${!isNigeria ? 'active' : ''}`}
              onClick={() => toggleRegion('intl')}
            >
              🌍 International
            </button>
          </div>
        </motion.div>

        {/* ROI pitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pricing-roi"
        >
          <div className="pricing-roi-inner">
            <div className="pricing-roi-icon">💰</div>
            <div className="pricing-roi-text">
              <strong>The ROI Logic:</strong> If our system brings you just <em>one extra client per week</em>,
              your setup fee pays for itself in the first month. Most businesses see 3× returns within 90 days.
            </div>
          </div>
        </motion.div>

        {/* ── PRICING CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pricing-grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {/* Foundational Offer: Website Development */}
          <div className="pricing-card standard">
            <div className="pricing-plan-label">Main Offer</div>
            <div className="pricing-plan-name">Website Development</div>
            <p className="pricing-desc">The essential foundation. High-performance design engineered to convert.</p>
            <div className="pricing-amount-wrap">
              <span className="pricing-amount">{!isNigeria ? "From $1,200" : "From ₦450,000"}</span>
            </div>
            <div className="pricing-period">one-time project fee</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-feats">
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Custom-designed UI/UX</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Sub-2s load time optimization</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> SEO & Google Business setup</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Booking & CRM integration</li>
            </ul>
            <Link to="/audit" className="pricing-cta-ghost">Get Started →</Link>
          </div>

          {/* Premium Upsell: AI Receptionist */}
          <div className="pricing-card featured" style={{ position: 'relative', marginTop: -12 }}>
            <div className="popular-badge">⚡ Premium Upsell</div>
            <div className="pricing-plan-label">Scale Your Time</div>
            <div className="pricing-plan-name">AI Receptionist Systems</div>
            <p className="pricing-desc" style={{ color: 'rgba(0,0,0,0.55)' }}>Add 24/7 AI call handling to your business. Never miss a lead again.</p>
            <div className="pricing-amount-wrap">
              <span className="pricing-amount" style={{ color: 'var(--black)' }}>{isNigeria ? "₦600,000" : "$1,500"}</span>
            </div>
            <div className="pricing-period" style={{ color: 'rgba(0,0,0,0.5)' }}>setup + monthly usage fee</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-feats">
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Custom AI voice cloning</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> 24/7 Live call handling</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Instant calendar booking</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> WhatsApp follow-up sync</li>
            </ul>
            <Link to="/audit" className="pricing-cta-primary">Add AI Upsell →</Link>
          </div>

          {/* Operations: n8n Automations */}
          <div className="pricing-card standard">
            <div className="pricing-plan-label">Efficiency</div>
            <div className="pricing-plan-name">n8n Workflow Automations</div>
            <p className="pricing-desc">Backend systems that sync your tools and eliminate manual data entry.</p>
            <div className="pricing-amount-wrap">
              <span className="pricing-amount">{!isNigeria ? "From $800" : "From ₦300,000"}</span>
            </div>
            <div className="pricing-period">setup + optional support</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-feats">
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Custom workflow architecture</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Tool & CRM integration</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Automated lead routing</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Operation audits & logic</li>
            </ul>
            <Link to="/audit" className="pricing-cta-ghost">Let's Talk →</Link>
          </div>

          {/* Premium Bundle */}
          <div className="pricing-card standard">
            <div className="pricing-plan-label">Elite</div>
            <div className="pricing-plan-name">Business Growth System</div>
            <p className="pricing-desc">The full engine. Custom website, AI systems, and deep automation.</p>
            <div className="pricing-amount-wrap">
              <span className="pricing-amount">Custom</span>
            </div>
            <div className="pricing-period">complete ecosystem</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-feats">
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Full foundation + multipliers</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Priority 24/7 tech support</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Dedicated success manager</li>
              <li className="pricing-feat-item"><span className="pricing-feat-check">✓</span> Quarterly strategy reviews</li>
            </ul>
            <Link to="/audit" className="pricing-cta-ghost">Request Quote →</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
