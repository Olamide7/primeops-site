import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="section">
      <div className="cta-glow"></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="cta-inner"
        >
          <div className="label" style={{ justifyContent: 'center' }}>Ready to Grow</div>
          <h2 className="heading-lg">
            Ready to build your foundation<br/>and <em className="teal">automate your scale?</em>
          </h2>
          <p className="cta-sub">
            Start with a high-converting website, then layer on AI and automation. 
            Book a free 15-minute strategy call to map out your Business Growth System.
          </p>
          <div className="cta-actions">
            <Link to="/audit" className="btn-primary">
              Start Your Digital Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
