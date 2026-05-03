import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TopNavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className="nav-inner">
            <Link to="/" className="nav-logo">
              <img src="/assets/images/logo.webp" alt="PrimeOps" className="nav-logo-img" />
            </Link>

            <ul className="nav-links">
              <li><a href="/#services">Services</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#why-us">Why Us</a></li>
              <li><a href="/#automation">How It Works</a></li>
              <li><a href="/#reviews">Reviews</a></li>
              <li>
                <Link to="/audit" className="nav-cta">
                  Start Audit →
                </Link>
              </li>
            </ul>

            <button 
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
              id="hamburger" 
              aria-label="Open menu" 
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={isMobileMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
          <li><a href="/#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
          <li><a href="/#automation" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a></li>
          <li><a href="/#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a></li>
          <li>
            <Link 
              to="/audit" 
              style={{ color: 'var(--teal)', fontWeight: 700 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Audit →
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

