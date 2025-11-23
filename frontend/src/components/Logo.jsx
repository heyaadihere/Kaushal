import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", isScrolled = true }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Outer mandala-inspired circle representing wholeness */}
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Inner decorative circle */}
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        
        {/* Stylized 'K' integrated with infinity symbol representing eternal partnership */}
        <path
          d="M 18 15 L 18 41 M 18 28 L 28 18 L 38 28 M 28 28 L 38 38"
          stroke="url(#gradient3)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lotus petals at the base representing growth and enlightenment */}
        <path
          d="M 20 42 Q 24 40 28 42 Q 32 40 36 42"
          stroke="url(#gradient4)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Small decorative dots representing skills/achievements */}
        <circle cx="14" cy="28" r="1.5" fill="#d97706" />
        <circle cx="42" cy="28" r="1.5" fill="#d97706" />
        <circle cx="28" cy="14" r="1.5" fill="#d97706" />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent' 
            : 'text-white'
        }`}>Kaushal</span>
        <span className={`text-[10px] tracking-[0.2em] font-semibold uppercase transition-colors duration-300 ${
          isScrolled ? 'text-amber-600' : 'text-amber-300'
        }`}>Partnership Skills</span>
      </div>
    </Link>
  );
};

export default Logo;