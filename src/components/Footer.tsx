import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo-section">
            <img src="/assets/images/logo.webp" alt="PrimeOps" className="footer-logo-img" />
            <p className="footer-copy">© {new Date().getFullYear()} PrimeOps.<br/>Built for ambitious businesses 🇳🇬 🌍</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Website Development</li>
                <li>n8n Workflow Automation</li>
                <li>AI Receptionist Systems</li>
                <li>Business Growth Bundle</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/#why-us">Why Work With Us</a></li>
                <li><a href="/#reviews">Success Stories</a></li>
                <li><a href="/audit">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
