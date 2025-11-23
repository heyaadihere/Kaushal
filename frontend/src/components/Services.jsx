import React from 'react';
import { Building2, MessagesSquare, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { servicesData } from '../mock';

const Services = () => {
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
            Our comprehensive programs guide you through every essential aspect of building a lasting partnership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.icon);
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex p-4 rounded-xl bg-amber-100">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-xl text-amber-600 font-semibold">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
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

                {/* Video */}
                <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold">
                    Service {service.id}
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