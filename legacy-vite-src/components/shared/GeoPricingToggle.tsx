import React from 'react';
import { motion } from 'framer-motion';
import { type Region } from '../../hooks/useGeoPricing';

interface GeoPricingToggleProps {
  region: Region;
  onToggle: (region: Region) => void;
}

export const GeoPricingToggle: React.FC<GeoPricingToggleProps> = ({ region, onToggle }) => {
  const isNigeria = region === 'ng';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="geo-toggle-wrap"
    >
      <div className="geo-toggle" id="geo-toggle">
        <button
          className={`geo-toggle-btn ${isNigeria ? 'active' : ''}`}
          onClick={() => onToggle('ng')}
        >
          🇳🇬 Nigeria (₦)
        </button>
        <button
          className={`geo-toggle-btn ${!isNigeria ? 'active' : ''}`}
          onClick={() => onToggle('intl')}
        >
          🌍 International ($)
        </button>
      </div>
    </motion.div>
  );
};
