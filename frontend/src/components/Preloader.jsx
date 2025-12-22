import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Pulsing ring behind logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-20 animate-ping"></div>
          </div>
          
          {/* Spinning circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-transparent border-t-amber-600 border-r-orange-600 rounded-full animate-spin"></div>
          </div>

          {/* Logo */}
          <div className="relative z-10 animate-bounce-slow">
            <img 
              src="/logo.png" 
              alt="Kaushal Logo" 
              className="h-32 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
            Loading Kaushal
          </h2>
          
          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{progress}%</p>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm animate-pulse">
            Building lasting partnerships...
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Preloader;