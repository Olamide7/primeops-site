import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CountUp: React.FC<{ target: number, suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
        const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [target]);

  return <>{count}{suffix}</>;
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="section">
      <div className="container">
        <div className="stats-header">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="label">Real Results</div>
            <h2 className="heading-lg" style={{ marginTop: 16 }}>
              Numbers that<br/>speak for <em className="teal">themselves.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginTop: 20, maxWidth: 400 }}>
              Average results across our clients after
              90 days on PrimeOps.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="stats-dashboard"
          >
            <div className="dashboard-topbar">
              <div className="dashboard-title">📊 Business Performance — Last 30 Days</div>
              <div className="dashboard-live"><span className="live-dot"></span>Live Data</div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-card-label">Calls Answered</div>
                <div className="stat-card-num"><CountUp target={247} /></div>
                <div className="stat-card-change">↑ 312% vs before</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-label">Appointments Booked</div>
                <div className="stat-card-num"><CountUp target={189} /></div>
                <div className="stat-card-change">↑ 287% vs before</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-label">Answer Rate</div>
                <div className="stat-card-num"><CountUp target={98} suffix="%" /></div>
                <div className="stat-card-change">↑ from 43%</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-label">Avg Wait (sec)</div>
                <div className="stat-card-num"><CountUp target={1} suffix="s" /></div>
                <div className="stat-card-change">↓ from 4 min hold</div>
              </div>
            </div>

            <div className="mini-chart">
              <div className="chart-bars">
                <div className="chart-bar" style={{ height: '35%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '55%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
                <div className="chart-bar active" style={{ height: '100%' }}></div>
              </div>
              <div className="chart-labels">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
                <span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="big-stats-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="big-stat"
          >
            <div className="big-stat-num"><CountUp target={312} suffix="%" /></div>
            <div className="big-stat-label">Average increase<br/>in monthly leads</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="big-stat"
          >
            <div className="big-stat-num"><CountUp target={98} suffix="%" /></div>
            <div className="big-stat-label">Call answer rate<br/>with AI receptionist</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="big-stat"
          >
            <div className="big-stat-num"><CountUp target={40} suffix="%" /></div>
            <div className="big-stat-label">Reduction in<br/>no-show appointments</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
