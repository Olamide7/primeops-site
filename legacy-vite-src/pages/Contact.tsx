import React from 'react';
import { PageHero } from '../components/shared/PageHero';
import { ContactForm } from '../components/shared/ContactForm';
import { SectionHeader } from '../components/shared/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <>
      <PageHero
        label="Contact Us"
        title={<>Let's build something <em className="teal">extraordinary.</em></>}
        subtitle="Have a project in mind, want to inquire about our services, or just want to chat operations? Get in touch with our engineering team."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <SectionHeader
                label="Get In Touch"
                title={<>Have questions? We're here to <em className="teal">help.</em></>}
              />
              <p className="contact-info-desc">
                Whether you're looking for a complete business growth system, need custom automation, or want to deploy an AI voice receptionist, we're ready to engineer your solution.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <div className="contact-label">Email Us</div>
                    <a href="mailto:hello@primeops.agency" className="contact-link">hello@primeops.agency</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <div className="contact-label">Our Headquarters</div>
                    <span className="contact-val">Lekki Phase 1, Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <div className="contact-label">Hours of Operation</div>
                    <span className="contact-val">Mon - Fri: 9:00 AM - 6:00 PM (GMT+1)</span>
                  </div>
                </div>
              </div>

              <div className="contact-whatsapp-promo">
                <h3>Prefer messaging?</h3>
                <p>Chat directly with our engineering team on WhatsApp for a faster response.</p>
                <a
                  href="https://wa.me/2348000000000?text=Hi%20PrimeOps!%20I'd%20like%20to%20chat%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.957.01c3.176.001 6.165 1.24 8.407 3.486 2.245 2.246 3.48 5.236 3.479 8.414-.004 6.557-5.338 11.892-11.903 11.892-2.01-.001-3.99-.513-5.734-1.488L.057 24zm6.305-1.654c1.644.976 3.51 1.487 5.592 1.488 5.86 0 10.627-4.768 10.63-10.63.002-2.84-1.102-5.511-3.107-7.518C17.472 3.681 14.802 2.58 11.96 2.58c-5.858 0-10.626 4.768-10.629 10.63-.001 2.023.528 4.004 1.532 5.768l-1.023 3.733 3.822-.987z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
