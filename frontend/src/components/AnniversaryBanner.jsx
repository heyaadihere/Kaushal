import React from 'react';
import { Sparkles, Award } from 'lucide-react';
import { Button } from './ui/button';

const AnniversaryBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-5 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Anniversary Message */}
          <div className="flex items-center gap-3 text-white flex-1">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider">Celebrating 10 Years</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                Building Lasting Partnerships | 2015 - 2025
              </h3>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm">
              <span className="text-white font-semibold">500+ Couples | 95% Success</span>
            </div>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-amber-700 hover:bg-gray-100 px-5 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 text-sm"
            >
              Join Our Legacy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;