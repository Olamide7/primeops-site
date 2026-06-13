import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo-section">
            <img src="/assets/images/logo.webp" alt="PrimeOps" className="footer-logo-img" />
            <p className="footer-copy">
              © {new Date().getFullYear()} PrimeOps.<br />
              Built for ambitious businesses 🇳🇬 🌍
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">Web Development</Link></li>
                <li><Link to="/services">Workflow Automation</Link></li>
                <li><Link to="/services">AI Receptionists</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/testimonials">Success Stories</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/blog">Blog & Insights</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

