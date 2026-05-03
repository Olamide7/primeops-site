import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const Demo: React.FC = () => {

  useEffect(() => {
    // Basic initialization for the loom demo script (if external)
    // Assuming assets/js/loom-demo.js handles the DOM manipulation if present.
    // If not, we would re-implement it in React. For now, the structure triggers it.
  }, []);

  return (
    <section id="transcript" className="section" style={{ background: 'var(--black)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}
        >
          <div className="label">AI Receptionist · Live Demo</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>
            Watch Aria handle a real<br />client call — <em className="teal">start to finish.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            No scripts. No hold music. Just instant, intelligent booking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="loom-wrap"
        >
          {/* Browser chrome */}
          <div className="loom-chrome">
            <div className="loom-chrome-left">
              <div className="loom-dot loom-dot-r"></div>
              <div className="loom-dot loom-dot-y"></div>
              <div className="loom-dot loom-dot-g"></div>
            </div>
            <div className="loom-url-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)', flexShrink: 0 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>primeops.ai · AI Receptionist Demo · The Sterling Group</span>
            </div>
            <div className="loom-rec-badge">
              <div className="loom-rec-dot"></div>
              REC <span id="loom-timer">00:47</span>
            </div>
          </div>

          {/* Recording stage */}
          <div className="loom-stage">
            {/* Left cam: Caller */}
            <div className="loom-cam loom-cam-patient">
              <div className="loom-cam-bg loom-cam-bg-patient">
                <div className="cam-grain"></div>
                <div className="cam-person">
                  <div className="cam-head"></div>
                  <div className="cam-body"></div>
                </div>
              </div>
              <div className="loom-cam-footer">
                <div className="loom-cam-name">
                  <div className="cam-status-dot" id="patient-status-dot"></div>
                  Chidi O. · Caller
                </div>
                <div className="loom-waveform" id="patient-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>

            {/* Center: Live transcript */}
            <div className="loom-center">
              <div className="loom-center-header">
                <div className="loom-center-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--teal)' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  Live Transcript
                </div>
                <div className="loom-ai-badge">
                  <div className="live-dot" style={{ width: 5, height: 5 }}></div>
                  AI Active
                </div>
              </div>

              <div className="loom-msgs" id="loom-msgs"></div>
              <div className="loom-action-log" id="loom-action-log"></div>

              <div className="loom-status-bar">
                <div className="loom-status-item active" id="loom-status-call">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--teal)' }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Active
                </div>
                <div className="loom-status-item" id="loom-status-cal">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                  Checking Calendar
                </div>
                <div className="loom-status-item" id="loom-status-sms">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                  SMS Pending
                </div>
              </div>
            </div>

            {/* Right cam: AI */}
            <div className="loom-cam loom-cam-ai">
              <div className="loom-cam-bg loom-cam-bg-ai">
                <div className="ai-orb">
                  <div className="ai-orb-ring r1"></div>
                  <div className="ai-orb-ring r2"></div>
                  <div className="ai-orb-ring r3"></div>
                  <div className="ai-orb-core">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--teal)">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                </div>
                <div className="ai-freq-bars" id="ai-freq">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
              <div className="loom-cam-footer">
                <div className="loom-cam-name">
                  <div className="cam-status-dot ai-dot" id="ai-status-dot"></div>
                  Aria · AI Receptionist
                </div>
                <div className="loom-waveform ai-waveform" id="ai-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls bar */}
          <div className="loom-controls">
            <button className="loom-btn" id="loom-play-btn" aria-label="Play/Pause">
              <svg id="loom-play-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
            <div className="loom-timestamp" id="loom-timestamp">0:47 / 1:12</div>
            <div className="loom-scrubber">
              <div className="loom-scrubber-track">
                <div className="loom-scrubber-fill" id="loom-fill"></div>
                <div className="loom-scrubber-thumb" id="loom-thumb"></div>
              </div>
            </div>
            <button className="loom-btn" id="loom-voice-btn" title="Mute Aria" aria-label="Toggle Aria voice" style={{ flexShrink: 0 }}>
              <svg id="loom-voice-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </button>
            <div className="loom-voice-badge">
              <div className="live-dot" style={{ width: 5, height: 5, background: '#22c55e' }}></div>
              Aria has voice
            </div>
            <div className="loom-share-btn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
              </svg>
              Share
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="loom-features"
        >
          <div className="loom-feat">
            <div className="loom-feat-icon">⚡</div>
            <div className="loom-feat-title">Answers in &lt;2s</div>
            <div className="loom-feat-desc">Zero hold time. Every call picked up instantly, day or night.</div>
          </div>
          <div className="loom-feat">
            <div className="loom-feat-icon">📆</div>
            <div className="loom-feat-title">Live Calendar Sync</div>
            <div className="loom-feat-desc">Reads real-time availability. Books directly. No double-booking ever.</div>
          </div>
          <div className="loom-feat">
            <div className="loom-feat-icon">💬</div>
            <div className="loom-feat-title">Auto SMS & WhatsApp</div>
            <div className="loom-feat-desc">Confirmation + reminders sent automatically. No-shows drop 40%.</div>
          </div>
          <div className="loom-feat">
            <div className="loom-feat-icon">🌍</div>
            <div className="loom-feat-title">Multilingual</div>
            <div className="loom-feat-desc">English, Yoruba, And Many More. Your clients always feel at home.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
