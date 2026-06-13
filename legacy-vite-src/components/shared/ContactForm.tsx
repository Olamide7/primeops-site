import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const INITIAL: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

const SERVICE_OPTIONS = [
  'High-Performance Web Development',
  'AI Voice Receptionist Systems',
  'Custom Workflow Automations',
  'Full Business Growth System',
  'Other / Not Sure',
];

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback((field: keyof ContactFormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="contact-form-success"
      >
        <div className="contact-success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3>Message sent successfully!</h3>
        <p>We'll get back to you within 24 hours. For urgent enquiries, reach us on WhatsApp.</p>
      </motion.div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="contact-name">Full Name *</label>
          <input
            id="contact-name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={e => update('name', e.target.value)}
            className={errors.name ? 'has-error' : ''}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email Address *</label>
          <input
            id="contact-email"
            type="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            className={errors.email ? 'has-error' : ''}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
      </div>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="contact-company">Company Name</label>
          <input
            id="contact-company"
            type="text"
            placeholder="Your Company"
            value={form.company}
            onChange={e => update('company', e.target.value)}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-service">Service of Interest</label>
          <select
            id="contact-service"
            value={form.service}
            onChange={e => update('service', e.target.value)}
          >
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Your Message *</label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your project or challenge…"
          value={form.message}
          onChange={e => update('message', e.target.value)}
          className={errors.message ? 'has-error' : ''}
        />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary contact-submit">
        Send Message
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </form>
  );
};
