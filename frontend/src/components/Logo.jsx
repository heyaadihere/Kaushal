import React from 'react';

const Logo = ({ className = '', isScrolled = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/kaushal-logo.png" 
        alt="Kaushal - Partnership Skills" 
        className="h-16 w-auto"
        style={isScrolled ? { filter: 'brightness(0) saturate(100%)' } : {}}
      />
    </div>
  );
};

export default Logo;