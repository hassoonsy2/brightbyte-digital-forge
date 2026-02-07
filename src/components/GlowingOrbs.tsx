import React from 'react';

// Minimal background - just a subtle grid
const GlowingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
  );
};

export default GlowingOrbs;
