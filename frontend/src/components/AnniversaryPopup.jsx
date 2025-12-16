import React, { useState, useEffect } from 'react';
import { X, Sparkles, Heart, Award, Gift, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative p-12 text-center">
          {/* Animated Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="animate-bounce" style={{ animationDelay: '0s' }}>
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Award className="w-12 h-12 text-orange-600" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-8 h-8 text-amber-600 fill-amber-600" />
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
              <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">
                🎉 Celebrating a Decade of Excellence
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              10 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Building Lasting Partnerships</span>
            </h2>
            
            <div className="text-3xl font-bold text-amber-600 mb-6">
              2015 - 2025
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
              A decade of empowering couples with clarity, communication, and commitment. Join 500+ couples who have transformed their partnerships through our proven frameworks.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Couples Guided</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">10</div>
              <div className="text-sm text-gray-600">Years Strong</div>
            </div>
          </div>

          {/* Special Offer Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full mb-6 shadow-lg">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Special Anniversary Offers Available!</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                setIsOpen(false);
                const element = document.querySelector('#packages');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 rounded-full font-bold transition-all duration-300"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Small print */}
          <p className="text-xs text-gray-500 mt-6">
            Limited time anniversary packages available. Terms & conditions apply.
          </p>
        </div>

        {/* Decorative bottom border */}
        <div className="h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
      </div>
    </div>
  );
};

export default AnniversaryPopup;
