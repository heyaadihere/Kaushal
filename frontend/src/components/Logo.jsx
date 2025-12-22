import React from 'react';
import { Heart } from 'lucide-react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
        <Heart className="w-6 h-6 text-white fill-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-900 leading-tight">Kaushal</h1>
        <p className="text-xs text-gray-600 leading-tight">It's a Skill!</p>
      </div>
    </div>
  );
};

export default Logo;
