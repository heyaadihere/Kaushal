import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Outer circle representing unity and wholeness */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-amber-600"
        />
        
        {/* Two intertwined hearts representing partnership */}
        <path
          d="M16 18C13.5 18 12 19.5 12 21.5C12 24.5 15 27 18 29.5C19.5 30.5 21 31 24 34C27 31 28.5 30.5 30 29.5C33 27 36 24.5 36 21.5C36 19.5 34.5 18 32 18C30 18 28.5 19 28 20C27.5 19 26 18 24 18C22 18 20.5 19 20 20C19.5 19 18 18 16 18Z"
          fill="currentColor"
          className="text-amber-600"
        />
        
        {/* Lotus petals at bottom representing growth and skill */}
        <path
          d="M24 38C26 38 27.5 36.5 28 35C26.5 35.5 25 36 24 36C23 36 21.5 35.5 20 35C20.5 36.5 22 38 24 38Z"
          fill="currentColor"
          className="text-amber-700"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-gray-900">Kaushal</span>
        <span className="text-xs tracking-wider text-amber-700 font-medium">IT'S A SKILL</span>
      </div>
    </div>
  );
};

export default Logo;