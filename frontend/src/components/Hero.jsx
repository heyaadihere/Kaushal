import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://cdn.pixabay.com/video/2023/12/26/195231-899619095_large.mp4" type="video/mp4" />
        </video>
        {/* Enhanced Overlay with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-amber-900/60 to-gray-800/75"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Modern Premarital Framework
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-400">
            {heroData.subtitle}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => {
                const element = document.querySelector('#packages');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 group"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Couples Guided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;