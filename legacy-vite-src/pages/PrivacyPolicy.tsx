import React from 'react';
import { PageHero } from '../components/shared/PageHero';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: June 12, 2026"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="legal-content">
            <p>At PrimeOps, we respect your privacy and are committed to protecting any personal data we collect. This Privacy Policy explains how we collect, use, and share information when you visit our website or use our B2B growth and technical agency services.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out contact or audit forms.</li>
              <li><strong>Operations Information:</strong> Answers to audit questionnaires, project requirements, and operational bottlenecks that you share during the funnel.</li>
              <li><strong>Usage Data:</strong> Technical details such as IP address, browser type, location, and session activity collected automatically when browsing our website.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and manage our services, including delivering custom website architectures, AI receptionist configurations, and workflow automations.</li>
              <li>To evaluate and analyze your operational audit answers to generate tailored optimization advice.</li>
              <li>To communicate with you regarding project updates, system inquiries, and customer success reviews.</li>
              <li>To comply with legal obligations and secure our web systems against fraudulent or abusive activity.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers (such as hosting, email automation, or CRM platforms) only to the extent necessary to perform services on our behalf and in compliance with this privacy policy.</p>

            <h2>4. Security</h2>
            <p>We implement appropriate technical and organizational measures to safeguard your personal data. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions or concerns about our Privacy Policy or data practices, please reach out to us at <a href="mailto:hello@primeops.agency">hello@primeops.agency</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
};
