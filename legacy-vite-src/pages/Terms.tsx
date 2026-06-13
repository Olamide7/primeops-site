import React from 'react';
import { PageHero } from '../components/shared/PageHero';

export const Terms: React.FC = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Last updated: June 12, 2026"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms of Service' },
        ]}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="legal-content">
            <p>Welcome to PrimeOps. By accessing our website or using our technical B2B services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By browsing this site or purchasing services from PrimeOps, you acknowledge that you have read, understood, and agree to these terms, as well as our Privacy Policy. If you do not agree, you must cease using our website and services immediately.</p>

            <h2>2. Scope of Services</h2>
            <p>PrimeOps provides digital growth engineering services, including high-performance web development, AI receptionist integrations, and workflow automation. All custom developments, retainers, and setup scopes are governed by individual client Service Level Agreements (SLAs) or Statements of Work (SOWs) signed separately.</p>

            <h2>3. Client Responsibilities</h2>
            <p>To ensure successful project delivery, clients must provide necessary account access (CRM, email, hostings) and content assets in a timely manner. PrimeOps is not responsible for project delays caused by a failure to provide required credentials, assets, or feedback.</p>

            <h2>4. Intellectual Property</h2>
            <p>All custom code, configurations, database architectures, and design layouts created specifically for a client will become the intellectual property of the client upon full payment of the project invoice. Generic scripts, templates, and pre-existing library frameworks remain the intellectual property of PrimeOps.</p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>Our website and services are provided "as is" and "as available" without any warranty of any kind, either express or implied. PrimeOps does not guarantee that custom integrations or AI receptionist flows will be completely free of intermittent provider downtime or third-party API changes beyond our control.</p>

            <h2>6. Limitation of Liability</h2>
            <p>In no event shall PrimeOps be liable for any indirect, incidental, special, or consequential damages (including loss of profits, data, or business opportunities) arising out of or in connection with our services, even if we have been advised of the possibility of such damages.</p>

            <h2>7. Governing Law</h2>
            <p>These terms and any disputes arising out of your use of our services shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.</p>
          </div>
        </div>
      </section>
    </>
  );
};
