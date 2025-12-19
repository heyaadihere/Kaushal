import React, { useState, useEffect } from 'react';
import { X, Sparkles, Award, Gift, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const AnniversaryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not shown before in this session
    const hasSeenPopup = sessionStorage.getItem('anniversaryPopupSeen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('anniversaryPopupSeen', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Decorative top border */}
        <div className="h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>

        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Animated Icons */}
          <div className="flex justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
            <Award className="w-8 h-8 text-orange-600 animate-bounce" />
            <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
          </div>

          {/* Main Message */}
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-3">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-wider">
                🎉 Celebrating Excellence
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">10 Years</span> of Building Partnerships
            </h2>
            
            <div className="text-xl font-bold text-amber-600 mb-3">
              2015 - 2025
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Join 500+ couples who transformed their partnerships through our proven frameworks.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
              <div className="text-2xl font-bold text-amber-600">500+</div>
              <div className="text-xs text-gray-600">Couples</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
              <div className="text-2xl font-bold text-amber-600">95%</div>
              <div className="text-xs text-gray-600">Success</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
              <div className="text-2xl font-bold text-amber-600">10</div>
              <div className="text-xs text-gray-600">Years</div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full mb-5 shadow-lg text-sm">
            <Gift className="w-4 h-4" />
            <span className="font-semibold">Special Anniversary Offers!</span>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => {
                setIsOpen(false);
                const element = document.querySelector('#packages');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-5 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Continue to website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryPopup;