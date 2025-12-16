import React from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';
import { Button } from './ui/button';

const AnniversaryBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Anniversary Message */}
          <div className="flex items-center gap-4 text-white flex-1">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 animate-bounce">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wider">Celebrating Excellence</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                10 Years of Building Lasting Partnerships
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                A decade of guiding 500+ couples to harmonious marriages | 2014 - 2024
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">95% Success Rate</span>
            </div>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-amber-700 hover:bg-gray-100 px-6 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Join Our Legacy
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
};

export default AnniversaryBanner;
