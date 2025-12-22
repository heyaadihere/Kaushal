import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isClosed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main CTA Button */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 max-w-xs">
          <p className="text-sm font-medium mb-3">Ready to strengthen your partnership?</p>
          <Link to="/contact">
            <Button
              className="w-full bg-white hover:bg-gray-100 text-amber-700 font-semibold py-3 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Free Consultation
            </Button>
          </Link>
        </div>

        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-2xl bg-amber-500 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default FloatingCTA;