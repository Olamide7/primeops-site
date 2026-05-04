import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── n8n Webhook Stub ──────────────────────────────────────────
const WEBHOOK_URL = 'https://uthmantex87.app.n8n.cloud/webhook/audit-submission';

// ── Types ─────────────────────────────────────────────────────
interface FormData {
  company_name: string;
  project_url: string;
  business_goal: string;
  service_interest: string;
  challenge: string;
  budget_range: string;
  contact_email: string;
  phone_number: string;
  custom_requests: string;
}

interface FormErrors {
  [key: string]: string;
}

const INITIAL_FORM: FormData = {
  company_name: '',
  project_url: '',
  business_goal: '',
  service_interest: '',
  challenge: '',
  budget_range: '',
  contact_email: '',
  phone_number: '',
  custom_requests: '',
};

const BUSINESS_GOALS = [
  'Generate More Leads',
  'Automate Operations',
  'Build Digital Credibility',
  'Replace a Broken System',
];

const SERVICE_OPTIONS = [
  {
    id: 'Web Infrastructure',
    icon: '🌐',
    title: 'Web Infrastructure',
    desc: 'High-performance website that converts',
  },
  {
    id: 'AI Logic Layer',
    icon: '🤖',
    title: 'AI Logic Layer',
    desc: 'AI Receptionist + Automated Lead Capture',
  },
  {
    id: 'Full Stack',
    icon: '⚡',
    title: 'Full Stack',
    desc: 'Both systems, fully integrated',
  },
];

const BUDGET_OPTIONS = [
  'Under $500',
  '$500–$1,500',
  '$1,500–$5,000',
  '$5,000+',
];

const STEP_LABELS = ['Foundation', 'Infrastructure', 'Signal', 'Wildcard'];

// ── Helpers ───────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Slide Variants ────────────────────────────────────────────
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -280 : 280,
    opacity: 0,
  }),
};

// ── Main Component ────────────────────────────────────────────
const AuditForm: React.FC<{ onSubmit?: (data: Record<string, string>) => void }> = ({ onSubmit }) => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});

  const update = useCallback(
    (field: keyof FormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    []
  );

  // ── Per-step validation ─────────────────────────────────────
  const validate = (s: number): boolean => {
    const e: FormErrors = {};

    if (s === 1) {
      if (!form.company_name.trim()) e.company_name = 'Company name is required.';
      if (!form.business_goal) e.business_goal = 'Select a business goal.';
    }
    if (s === 2) {
      if (!form.service_interest) e.service_interest = 'Select a service package.';
    }
    if (s === 3) {
      if (!form.challenge.trim()) e.challenge = 'Tell us about your current challenge.';
      if (!form.budget_range) e.budget_range = 'Select a budget range.';
      if (!form.contact_email.trim()) e.contact_email = 'Email is required.';
      else if (!isValidEmail(form.contact_email)) e.contact_email = 'Enter a valid email.';
      if (!form.phone_number.trim()) e.phone_number = 'Phone number is required.';
    }
    // Step 4 is optional

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate(step)) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, 5));
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    console.log('🔒 Starting form submission...');

    const payload = {
      timestamp: new Date().toISOString(),
      company_name: form.company_name,
      project_url: form.project_url,
      business_goal: form.business_goal,
      service_interest: form.service_interest,
      custom_requests: form.custom_requests || '',
      contact_email: form.contact_email,
      phone_number: form.phone_number,
      budget_range: form.budget_range,
      status: 'New',
    };

    console.log('📤 Payload created:', payload);

    if (WEBHOOK_URL) {
      try {
        console.log('🚀 Sending to n8n webhook...');

        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify(payload),
        });

        console.log('✅ n8n response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('n8n error response:', errorText);
        }
      } catch (err) {
        console.error('❌ Webhook POST failed:', err);
      }
    } else {
      console.warn('⚠️ No webhook configured');
    }

    onSubmit?.(payload);
    setDirection(1);
    setStep(5);
  };


  // ── WhatsApp link builder ───────────────────────────────────
  const whatsappUrl = () => {
    const customPart = form.custom_requests.trim() || 'none';
    const msg = `Hi, I just completed the Digital Infrastructure Audit for ${form.company_name}. I'm interested in ${form.service_interest} and have a custom request: ${customPart}.`;
    return `https://wa.me/2347057299091?text=${encodeURIComponent(msg)}`;
  };

  // ── Render helpers ──────────────────────────────────────────
  const renderProgressBar = () => (
    <div className="audit-progress">
      {STEP_LABELS.map((label, i) => {
        const num = i + 1;
        const isActive = step === num;
        const isComplete = step > num;
        return (
          <React.Fragment key={num}>
            {i > 0 && (
              <div className={`audit-progress-line ${isComplete ? 'complete' : ''}`} />
            )}
            <div className={`audit-progress-step ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}>
              <div className="audit-progress-dot">
                {isComplete ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span>{num}</span>
                )}
              </div>
              <span className="audit-progress-label">{label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );

  const renderError = (field: string) =>
    errors[field] ? <p className="audit-error">{errors[field]}</p> : null;

  // ── Step 1 ──────────────────────────────────────────────────
  const renderStep1 = () => (
    <div className="audit-step-inner">
      {/* Animated grid background */}
      <div className="audit-grid-bg" />

      <div className="audit-step-label">Step 01 / 04</div>
      <h2 className="audit-heading">Let's map your digital foundation.</h2>

      <div className="audit-field-group">
        <label className="audit-label" htmlFor="audit-company">Company Name *</label>
        <input
          id="audit-company"
          className={`audit-input ${errors.company_name ? 'has-error' : ''}`}
          type="text"
          placeholder="Your company name"
          value={form.company_name}
          onChange={(e) => update('company_name', e.target.value)}
        />
        {renderError('company_name')}
      </div>

      <div className="audit-field-group">
        <label className="audit-label" htmlFor="audit-url">Existing Website URL</label>
        <input
          id="audit-url"
          className="audit-input"
          type="text"
          placeholder="Leave blank if you don't have one"
          value={form.project_url}
          onChange={(e) => update('project_url', e.target.value)}
        />
      </div>

      <div className="audit-field-group">
        <label className="audit-label" htmlFor="audit-goal">Primary Business Goal *</label>
        <select
          id="audit-goal"
          className={`audit-select ${errors.business_goal ? 'has-error' : ''}`}
          value={form.business_goal}
          onChange={(e) => update('business_goal', e.target.value)}
        >
          <option value="">Select a goal…</option>
          {BUSINESS_GOALS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {renderError('business_goal')}
      </div>
    </div>
  );

  // ── Step 2 ──────────────────────────────────────────────────
  const renderStep2 = () => (
    <div className="audit-step-inner">
      <div className="audit-step-label">Step 02 / 04</div>
      <h2 className="audit-heading">What infrastructure do you need built?</h2>

      <div className="audit-cards-grid audit-cards-3">
        {SERVICE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`audit-select-card ${form.service_interest === opt.id ? 'selected' : ''}`}
            onClick={() => update('service_interest', opt.id)}
          >
            <div className="audit-card-icon">{opt.icon}</div>
            <div className="audit-card-title">{opt.title}</div>
            <div className="audit-card-desc">{opt.desc}</div>
            {form.service_interest === opt.id && (
              <div className="audit-card-check">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
      {renderError('service_interest')}
    </div>
  );

  // ── Step 3 ──────────────────────────────────────────────────
  const renderStep3 = () => (
    <div className="audit-step-inner">
      {/* Waveform animation */}
      <div className="audit-waveform-bg">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="audit-wave-bar" style={{ animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>

      <div className="audit-step-label">Step 03 / 04</div>
      <h2 className="audit-heading">Tell us about your current setup.</h2>

      <div className="audit-field-group">
        <label className="audit-label" htmlFor="audit-challenge">
          Current biggest challenge *
          <span className="audit-char-count">{form.challenge.length}/200</span>
        </label>
        <textarea
          id="audit-challenge"
          className={`audit-textarea ${errors.challenge ? 'has-error' : ''}`}
          maxLength={200}
          rows={3}
          placeholder="What's costing you the most time, money, or missed opportunities?"
          value={form.challenge}
          onChange={(e) => update('challenge', e.target.value)}
        />
        {renderError('challenge')}
      </div>

      <div className="audit-field-group">
        <label className="audit-label">Monthly budget range *</label>
        <div className="audit-cards-grid audit-cards-4">
          {BUDGET_OPTIONS.map((b) => (
            <button
              key={b}
              type="button"
              className={`audit-select-card compact ${form.budget_range === b ? 'selected' : ''}`}
              onClick={() => update('budget_range', b)}
            >
              <div className="audit-card-title">{b}</div>
              {form.budget_range === b && (
                <div className="audit-card-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
        {renderError('budget_range')}
      </div>

      <div className="audit-fields-row">
        <div className="audit-field-group">
          <label className="audit-label" htmlFor="audit-email">Contact Email *</label>
          <input
            id="audit-email"
            className={`audit-input ${errors.contact_email ? 'has-error' : ''}`}
            type="email"
            placeholder="you@company.com"
            value={form.contact_email}
            onChange={(e) => update('contact_email', e.target.value)}
          />
          {renderError('contact_email')}
        </div>
        <div className="audit-field-group">
          <label className="audit-label" htmlFor="audit-phone">Phone Number *</label>
          <input
            id="audit-phone"
            className={`audit-input ${errors.phone_number ? 'has-error' : ''}`}
            type="tel"
            placeholder="+234 or +1..."
            value={form.phone_number}
            onChange={(e) => update('phone_number', e.target.value)}
          />
          {renderError('phone_number')}
        </div>
      </div>
    </div>
  );

  // ── Step 4 ──────────────────────────────────────────────────
  const renderStep4 = () => (
    <div className="audit-step-inner">
      {/* Animated lock */}
      <div className={`audit-lock-icon ${form.custom_requests.trim() ? 'unlocked' : ''}`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path className="audit-lock-shackle" d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <div className="audit-step-label">Step 04 / 04</div>
      <h2 className="audit-heading">Got something specific in mind?</h2>
      <p className="audit-subheading">This is where we separate cookie-cutter agencies from infrastructure partners.</p>

      <div className="audit-field-group">
        <label className="audit-label" htmlFor="audit-custom">Custom request / special requirement</label>
        <textarea
          id="audit-custom"
          className="audit-textarea"
          rows={5}
          placeholder="Describe any specific system, integration, or idea you want built. Nothing is too ambitious."
          value={form.custom_requests}
          onChange={(e) => update('custom_requests', e.target.value)}
        />
      </div>

      <button
        type="button"
        className="audit-skip-link"
        onClick={handleSubmit}
      >
        Skip, I'm good with standard packages →
      </button>
    </div>
  );

  // ── Thank You ───────────────────────────────────────────────
  const renderThankYou = () => (
    <div className="audit-step-inner audit-thankyou">
      <div className="audit-thankyou-icon">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>

      <h2 className="audit-heading">Your audit is queued.</h2>
      <p className="audit-subheading">We've received your infrastructure brief. Now, let's talk.</p>

      {/* Summary card */}
      <div className="audit-summary-card">
        <div className="audit-summary-row">
          <span className="audit-summary-key">Company</span>
          <span className="audit-summary-val">{form.company_name}</span>
        </div>
        <div className="audit-summary-row">
          <span className="audit-summary-key">Service</span>
          <span className="audit-summary-val">{form.service_interest}</span>
        </div>
        <div className="audit-summary-row">
          <span className="audit-summary-key">Budget</span>
          <span className="audit-summary-val">{form.budget_range}</span>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="audit-whatsapp-btn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Open Your Priority WhatsApp Channel →
      </a>
      <p className="audit-unique-text">This link is unique to your submission.</p>
    </div>
  );

  // ── Step renderer map ───────────────────────────────────────
  const stepRenderers: Record<number, () => React.ReactNode> = {
    1: renderStep1,
    2: renderStep2,
    3: renderStep3,
    4: renderStep4,
    5: renderThankYou,
  };

  return (
    <section id="audit" className="audit-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="audit-wrapper"
        >
          {/* Section header */}
          <div className="audit-section-header">
            <div className="label">Infrastructure Audit</div>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Start your <em className="teal">digital audit.</em>
            </h2>
            <p className="audit-section-sub">
              Four quick steps to map your infrastructure needs. No fluff. No commitments.
            </p>
          </div>

          {/* Form container */}
          <div className="audit-form-container">
            {/* Progress bar — hidden on thank you */}
            {step <= 4 && renderProgressBar()}

            {/* Animated step content */}
            <div className="audit-step-viewport">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="audit-step"
                >
                  {stepRenderers[step]?.()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons — hidden on thank you */}
            {step <= 4 && (
              <div className="audit-nav">
                {step > 1 && (
                  <button type="button" className="audit-btn-back" onClick={back}>
                    ← Back
                  </button>
                )}
                <div style={{ flex: 1 }} />
                {step < 4 ? (
                  <button type="button" className="audit-btn-next" onClick={next}>
                    Continue →
                  </button>
                ) : (
                  <button type="button" className="audit-btn-next audit-btn-submit" onClick={handleSubmit}>
                    Submit Audit →
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditForm;
