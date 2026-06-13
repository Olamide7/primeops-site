import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, centered = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className={`section-header ${centered ? 'section-header--centered' : ''}`}
    >
      <div className="label">{label}</div>
      <h2 className="heading-lg" style={{ marginTop: 16 }}>{title}</h2>
      {subtitle && (
        <p className="section-header-sub">{subtitle}</p>
      )}
    </motion.div>
  );
};
