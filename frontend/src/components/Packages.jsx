import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/packages`);
        const data = await response.json();
        if (data.success) {
          setPackagesData(data.packages);
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-gray-300">Loading packages...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-400 font-semibold text-lg uppercase tracking-wide mb-4">Our Packages</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Tailored Pathways for Every Partnership
          </h2>
          <p className="text-lg text-gray-300">
            Choose the level of depth and alignment that fits your journey - from foundational clarity to complete readiness.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.popular
                  ? 'bg-white/10 border-amber-400 shadow-amber-500/50 shadow-xl'
                  : 'bg-white/5 border-gray-600 hover:border-amber-400'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-amber-500 text-white px-4 py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1 inline" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-amber-400 font-medium mb-4">{pkg.subtitle}</p>
                <div className="text-5xl font-bold text-white mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm">{pkg.sessions} Sessions</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{pkg.description}</p>
              <p className="text-gray-400 text-xs mb-6 italic">{pkg.ideal}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-6 rounded-full font-semibold transition-all duration-300 group ${
                  pkg.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Not sure which package is right for you?</p>
          <Button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-6 text-lg rounded-full font-semibold backdrop-blur-md transition-all duration-300"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;