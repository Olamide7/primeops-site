import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const AutomationFlow: React.FC = () => {
  useEffect(() => {
    // Flow connector scroll logic port from main.js
    const flowConnector = document.getElementById('flow-connector');
    if (!flowConnector) return;
    const fill = flowConnector.querySelector('.flow-connector-fill') as HTMLElement;
    
    const onScroll = () => {
      const rect = flowConnector.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        let percent = ((viewH - rect.top) / (viewH + rect.height)) * 100;
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        if (fill) fill.style.height = `${percent}%`;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="automation" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
        >
          <div className="label">The Automation Process</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            From missed call to<br/>booked client — <em className="teal">automatically.</em>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flow-steps"
        >
          <div className="flow-connector" id="flow-connector">
            <div className="flow-connector-fill"></div>
          </div>

          {[
            {
              icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
              label: "Call Received", desc: "Client calls your business number at any hour"
            },
            {
              icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
              label: "AI Greets", desc: "Aria answers in <2s in the caller's preferred language"
            },
            {
              icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
              label: "Slot Selected", desc: "Live calendar checked, available slots offered instantly"
            },
            {
              icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              label: "Booking Confirmed", desc: "Appointment logged, team notified, client confirmed"
            },
            {
              icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
              label: "Auto-Reminder", desc: "SMS & WhatsApp reminders sent 24h & 1h before"
            }
          ].map((step, i) => (
            <div key={i} className="flow-step active">
              <div className="flow-step-num">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon}/>
                </svg>
              </div>
              <div className="flow-step-label">{step.label}</div>
              <div className="flow-step-desc">{step.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flow-details"
        >
          <div className="flow-detail-card glow-card">
            <div className="flow-detail-num">Step 01 → 02</div>
            <div className="flow-detail-title">Zero Missed Calls</div>
            <div className="flow-detail-desc">The AI handles unlimited simultaneous calls. Even if 10 people call at once, every one gets answered immediately — no queue, no voicemail.</div>
          </div>
          <div className="flow-detail-card glow-card">
            <div className="flow-detail-num">Step 03 → 04</div>
            <div className="flow-detail-title">Smart Scheduling</div>
            <div className="flow-detail-desc">Syncs with your existing calendar (Google Calendar, Cal.com, CRM). Prevents double-booking, respects durations, and allocates the right team member.</div>
          </div>
          <div className="flow-detail-card glow-card">
            <div className="flow-detail-num">Step 05</div>
            <div className="flow-detail-title">No-Show Reduction</div>
            <div className="flow-detail-desc">Multi-touch reminders via SMS and WhatsApp reduce no-shows by up to 40%. Clients can confirm, reschedule, or cancel — all without calling back.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
