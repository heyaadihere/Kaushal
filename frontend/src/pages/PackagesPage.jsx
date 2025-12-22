import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { packagesData } from '../mock';
import PricingInquiryPopup from '../components/PricingInquiryPopup';

const PackagesPage = () => {
  const [isPricingPopupOpen, setIsPricingPopupOpen] = useState(false);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Packages
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Choose the level of depth and alignment that fits your partnership journey
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? 'border-amber-400 shadow-xl' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-amber-500 text-white px-4 py-1 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-amber-600 font-medium mb-4">{pkg.subtitle}</p>
                    <p className="text-gray-500 text-sm">{pkg.sessions} Sessions</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pkg.description}</p>
                  <p className="text-gray-500 text-xs mb-6 italic">{pkg.ideal}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link to={`/packages/${pkg.id}`}>
                      <Button
                        className={`w-full py-6 rounded-full font-semibold transition-all duration-300 group ${
                          pkg.popular
                            ? 'bg-amber-600 hover:bg-amber-700 text-white'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="w-full py-4 rounded-full font-medium border-2 hover:bg-gray-50"
                      >
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact for Pricing Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Interested in Our Packages?
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Get detailed pricing information and find the perfect package for your partnership journey. We'll send you comprehensive details tailored to your needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setIsPricingPopupOpen(true)}
                    className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Request Pricing Details
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link to="/contact">
                    <Button
                      className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-6 text-lg rounded-full font-bold backdrop-blur-md transition-all duration-300"
                    >
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>

                <p className="text-white/80 text-sm mt-6">
                  All inquiries sent to <span className="font-semibold">connect@thekaushal.in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Not Sure Which Package?</h2>
            <p className="text-gray-600 text-lg">Book a free 15-minute clarity call to find the right fit</p>
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Book Free Clarity Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Inquiry Popup */}
      <PricingInquiryPopup 
        isOpen={isPricingPopupOpen} 
        onClose={() => setIsPricingPopupOpen(false)} 
      />
    </div>
  );
};

export default PackagesPage;