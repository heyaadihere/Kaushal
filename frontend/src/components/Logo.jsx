import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/kaushal-logo.png" 
        alt="Kaushal - Partnership Skills" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
