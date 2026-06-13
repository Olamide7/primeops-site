import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({ label, title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-grid-bg"></div>
      <div className="page-hero-glow"></div>
      <div className="container">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="page-hero-breadcrumbs"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="breadcrumb-sep">/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className="breadcrumb-link">{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-hero-content"
        >
          <div className="label">{label}</div>
          <h1 className="heading-xl page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};
