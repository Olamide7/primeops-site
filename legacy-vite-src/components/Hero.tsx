import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  useEffect(() => {
    // Phone transcript animation port from legacy main.js
    const heroTranscript = document.getElementById('hero-transcript');
    if (!heroTranscript) return;

    const messages = [
      { type: 'ai',      text: 'Hi! PrimeOps. How can we help you grow today?' },
      { type: 'caller',  text: "I need a better website and a way to handle all these missed calls." },
      { type: 'ai',      text: 'We can build you a high-converting site and plug in an AI receptionist 24/7. Sound good?' },
      { type: 'caller',  text: 'Definitely. How fast can we start?' },
      { type: 'ai',      text: "We'll have your roadmap ready by tomorrow morning! 🚀" },
    ];

    let i = 0;
        let timeoutIds: any[] = [];

    function appendBubble(msg: { type: string, text: string }) {
      const bubble = document.createElement('div');
      bubble.className = `phone-bubble ${msg.type}`;
      bubble.textContent = msg.text;
      heroTranscript?.appendChild(bubble);
      if (heroTranscript) heroTranscript.scrollTop = heroTranscript.scrollHeight;
    }

    function addMessage() {
      if (!heroTranscript) return;
      if (i >= messages.length) {
        const id1 = setTimeout(() => {
          heroTranscript.innerHTML = '';
          i = 0;
          const id2 = setTimeout(addMessage, 1000);
          timeoutIds.push(id2);
        }, 4000);
        timeoutIds.push(id1);
        return;
      }

      const msg = messages[i++];

      if (msg.type === 'ai') {
        const typing = document.createElement('div');
        typing.className = 'phone-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        heroTranscript.appendChild(typing);
        heroTranscript.scrollTop = heroTranscript.scrollHeight;

        const id3 = setTimeout(() => {
          typing.remove();
          appendBubble(msg);
          const id4 = setTimeout(addMessage, 1800);
          timeoutIds.push(id4);
        }, 1200);
        timeoutIds.push(id3);
      } else {
        appendBubble(msg);
        const id5 = setTimeout(addMessage, 2000);
        timeoutIds.push(id5);
      }
    }

    const startId = setTimeout(addMessage, 1500);
    timeoutIds.push(startId);

    return () => {
      timeoutIds.forEach(clearTimeout);
      if (heroTranscript) heroTranscript.innerHTML = '';
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>

      <div className="container">
        <div className="hero-content">
          <div>
            <div id="country-badge">
              <span id="country-flag"></span>
              <span id="country-name">Serving Nigeria & International Markets</span>
            </div>

            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              AI-Powered · Always Online · Built for Growth
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-xl hero-title"
            >
              Scale. Automate.<br />
              <em className="teal">Engineer Growth.</em>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-sub"
            >
              We engineer the digital infrastructure ambitious B2B companies need to scale — from high-performance websites to 24/7 AI-powered receptionists and workflow automations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-actions"
            >
              <Link to="/audit" className="btn-primary">
                Book Your Free Audit
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Services
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-stats"
            >
              <div>
                <div className="hero-stat-num">98%</div>
                <div className="hero-stat-label">Calls Answered</div>
              </div>
              <div>
                <div className="hero-stat-num">3×</div>
                <div className="hero-stat-label">More Bookings</div>
              </div>
              <div>
                <div className="hero-stat-num">24/7</div>
                <div className="hero-stat-label">Always Live</div>
              </div>
              <div>
                <div className="hero-stat-num">&lt;2s</div>
                <div className="hero-stat-label">Answer Speed</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-phone"
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-status">
                <span className="phone-status-label">Active Call</span>
                <span className="phone-status-live"><span className="live-dot"></span>LIVE</span>
              </div>
              <div className="phone-caller">
                <div className="phone-avatar">🚀</div>
                <div className="phone-caller-name">PrimeOps</div>
                <div className="phone-caller-info">Growth Engine · Active Now</div>
              </div>
              <div className="phone-transcript" id="hero-transcript"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
