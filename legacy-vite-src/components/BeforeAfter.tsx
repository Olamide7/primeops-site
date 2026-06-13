import React from 'react';
import { motion } from 'framer-motion';

export const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}
        >
          <div className="label">Before vs After</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            What changes when you<br/>go <em className="teal">PrimeOps.</em>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="ba-grid"
        >
          <div className="ba-side ba-before">
            <div className="ba-header">
              <div className="ba-tag before">✗ Before</div>
              <div className="ba-scenario">Without PrimeOps</div>
            </div>
            <div className="ba-items">
              {[
                "Front desk misses calls during lunch, evenings & weekends",
                "Potential clients hang up after 30 seconds on hold and call a competitor",
                "No-shows cost your business significant revenue every month",
                "Scheduling errors lead to double-bookings and frustrated clients",
                "Staff overwhelmed managing calls, bookings, and reminders manually",
                "Zero visibility — no data on call volumes, conversion, or missed revenue"
              ].map((text, i) => (
                <div className="ba-item" key={i}>
                  <div className="ba-item-icon bad">✗</div>
                  <div className="ba-item-text bad">{text}</div>
                </div>
              ))}
            </div>
            <div className="ba-result bad">
              <div className="ba-result-label">Avg. Monthly Lost Revenue</div>
              <div className="ba-result-num">−30%</div>
              <div className="ba-result-sub">from missed calls + no-shows alone</div>
            </div>
          </div>

          <div className="ba-side ba-after">
            <div className="ba-header">
              <div className="ba-tag after">✓ After</div>
              <div className="ba-scenario">With PrimeOps</div>
            </div>
            <div className="ba-items">
              {[
                "Every call answered in under 2 seconds — 24 hours a day, 7 days a week",
                "Clients booked immediately — no hold, no friction, no lost leads",
                "Automated reminders cut no-shows by 40% within 30 days",
                "Live calendar sync prevents double-booking entirely",
                "Staff focus on in-person service — AI handles all call management",
                "Full analytics dashboard — see every call, booking, and revenue impact"
              ].map((text, i) => (
                <div className="ba-item" key={i}>
                  <div className="ba-item-icon good">✓</div>
                  <div className="ba-item-text good">{text}</div>
                </div>
              ))}
            </div>
            <div className="ba-result good">
              <div className="ba-result-label">Avg. Monthly Revenue Added</div>
              <div className="ba-result-num">+3×</div>
              <div className="ba-result-sub">from recovered bookings + no-show reduction</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
