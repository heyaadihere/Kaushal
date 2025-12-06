import React, { useState, useEffect } from 'react';
import { Building2, MessagesSquare, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Image mapping for services - relevant couples and marriage counseling images
  const serviceImages = {
    "1": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop&q=80",
    "2": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&q=80",
    "3": "https://images.unsplash.com/photo-1522673607200-8f2a2902e8f5?w=1200&h=800&fit=crop&q=80"
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
        const data = await response.json();
        if (data.success) {
          setServicesData(data.services);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'MessagesSquare':
        return MessagesSquare;
      case 'Users':
        return Users;
      default:
        return Building2;
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-gray-600">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Strengthening Marriages with Structured Conversations
          </h2>
          <p className="text-lg text-gray-600">
            Transform your relationship with expert guidance and proven frameworks
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.icon);
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex p-4 rounded-xl bg-amber-100 shadow-lg">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const element = document.querySelector('#packages');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image with Enhanced Effects */}
                <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={serviceImages[service.id] || 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=800&fit=crop&q=80'}
                      alt={service.title}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:from-gray-900/40 transition-colors"></div>
                    
                    {/* Overlay Text on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-6">
                        <p className="text-lg font-semibold">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Animated Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                    <p className="font-semibold text-sm">Popular</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;