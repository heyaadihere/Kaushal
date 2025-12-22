import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Kaushal - It's a Skill" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;