import React from 'react';
import { motion } from 'framer-motion';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto' }}
        >
          <div className="label">Client Reviews</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            Businesses that made<br/>the <em className="teal">switch.</em>
          </h2>
        </motion.div>

        <div className="reviews-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="review-card glow-card"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"We were missing <em>at least 30 calls a week</em> — mostly after hours. Since PrimeOps, our AI answers every single one and books them directly. Our revenue went up 40% in just two months."</p>
            <div className="review-author">
              <div className="review-avatar">AO</div>
              <div><div className="review-name">Adaeze Okonkwo</div><div className="review-role">Restaurant Owner · Lagos 🇳🇬</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="review-card featured-review"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"The AI sounds completely natural — clients have no idea they're not speaking with a human. <em>Bookings tripled</em> in our first 90 days. Hands down the best investment we've made for the firm."</p>
            <div className="review-author">
              <div className="review-avatar" style={{ background: 'rgba(52,211,153,0.15)' }}>TM</div>
              <div><div className="review-name">Tunde Martins</div><div className="review-role">Managing Partner, Law Firm · Abuja 🇳🇬</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="review-card glow-card"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"My front desk was drowning. Now the AI handles all the scheduling and they focus on serving clients in the office. <em>No-shows dropped 45%</em> and the team is finally not stressed out."</p>
            <div className="review-author">
              <div className="review-avatar">KP</div>
              <div><div className="review-name">Keisha Patterson</div><div className="review-role">Real Estate Agent · Houston TX 🇺🇸</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="review-card glow-card"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"I was skeptical an AI could handle our enquiries in Yoruba and Pidgin. It does — and <em>clients love it.</em> The PrimeOps team really understands the Nigerian market."</p>
            <div className="review-author">
              <div className="review-avatar">FO</div>
              <div><div className="review-name">Femi Olawale</div><div className="review-role">Retail CEO · Ibadan 🇳🇬</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="review-card glow-card"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"The website they built ranks #1 on Google for our key terms in our area. Combined with the AI receptionist, we're <em>fully booked 3 weeks out.</em> That never happened before."</p>
            <div className="review-author">
              <div className="review-avatar">MJ</div>
              <div><div className="review-name">Marcus Johnson</div><div className="review-role">Salon Owner · Atlanta GA 🇺🇸</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="review-card glow-card"
          >
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Setup was seamless. In under 2 weeks, our new website was live and the AI was live on our phone line. <em>ROI in the first month.</em> The support team is incredibly responsive."</p>
            <div className="review-author">
              <div className="review-avatar">CA</div>
              <div><div className="review-name">Chisom Agu</div><div className="review-role">Tech Startup Founder · Port Harcourt 🇳🇬</div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
