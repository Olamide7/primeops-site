import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import purgecss from '@mojojoejo/vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(), 
    purgecss({
      content: ['./src/**/*.tsx', './index.html'],
      safelist: [
        'reveal', 'btn-primary', 'btn-ghost', 'glow-card', 'active',
        'geo-toggle-btn', 'pricing-grid', 'pricing-card', 'open', 'scrolled',
        // Audit form classes
        'audit-section', 'audit-wrapper', 'audit-form-container',
        'audit-progress', 'audit-progress-step', 'audit-progress-dot',
        'audit-progress-line', 'audit-progress-label',
        'audit-step-viewport', 'audit-step', 'audit-step-inner',
        'audit-step-label', 'audit-heading', 'audit-subheading',
        'audit-field-group', 'audit-label', 'audit-char-count',
        'audit-input', 'audit-textarea', 'audit-select',
        'audit-error', 'audit-fields-row',
        'audit-cards-grid', 'audit-cards-3', 'audit-cards-4',
        'audit-select-card', 'audit-card-icon', 'audit-card-title',
        'audit-card-desc', 'audit-card-check',
        'audit-nav', 'audit-btn-back', 'audit-btn-next', 'audit-btn-submit',
        'audit-skip-link', 'audit-grid-bg', 'audit-waveform-bg', 'audit-wave-bar',
        'audit-lock-icon', 'audit-lock-shackle',
        'audit-thankyou', 'audit-thankyou-icon',
        'audit-summary-card', 'audit-summary-row', 'audit-summary-key', 'audit-summary-val',
        'audit-whatsapp-btn', 'audit-unique-text',
        'audit-section-header', 'audit-section-sub',
        'selected', 'compact', 'complete', 'unlocked', 'has-error',
        // Phone bubbles (dynamically created via DOM)
        'phone-bubble', 'caller', 'ai', 'phone-typing',
      ]
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
});
