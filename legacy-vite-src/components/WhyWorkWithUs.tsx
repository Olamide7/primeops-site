import React from 'react';
import { motion } from 'framer-motion';

export const WhyWorkWithUs: React.FC = () => {
  const reasons = [
    {
      title: "Real Business Experience",
      desc: "We don't just build websites. We understand Nigeria's business landscape and the frustration of missed leads.",
      icon: "🏢"
    },
    {
      title: "Speed is Our Priority",
      desc: "In a world of short attention spans, we ensure your business responds to customers in under 2 seconds.",
      icon: "⚡"
    },
    {
      title: "Built for Results",
      desc: "Every line of code and every AI prompt we write is focused on one thing: getting you more bookings.",
      icon: "📈"
    },
    {
      title: "Human-Centric Tech",
      desc: "Our AI systems don't sound like robots. They sound like your best employee on their best day.",
      icon: "🤝"
    }
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="label" style={{ justifyContent: 'center' }}>Why Work With Us</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            The PrimeOps <em className="teal">Edge.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginTop: 16, maxWidth: 600, margin: '16px auto 0' }}>
            We bridge the gap between complex technology and practical business results. 
            No fluff, just systems that grow your bottom line.
          </p>
        </motion.div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="service-card"
              style={{ padding: '40px' }}
            >
              <div style={{ fontSize: 32, marginBottom: 20 }}>{reason.icon}</div>
              <div className="service-title" style={{ fontSize: 20, marginBottom: 12 }}>{reason.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
