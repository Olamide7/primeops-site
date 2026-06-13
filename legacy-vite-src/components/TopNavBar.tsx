import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const TopNavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className="nav-inner">
            <Link to="/" className="nav-logo">
              <img src="/assets/images/logo.webp" alt="PrimeOps" className="nav-logo-img" />
            </Link>

            <ul className="nav-links">
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
              <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
              <li><Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''}>Testimonials</Link></li>
              <li><Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link></li>
              <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
              <li>
                <Link to="/audit" className="nav-cta">
                  Book Audit →
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
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link 
              to="/audit" 
              style={{ color: 'var(--teal)', fontWeight: 700 }}
            >
              Book Audit →
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};


