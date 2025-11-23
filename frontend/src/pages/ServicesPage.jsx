import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MessagesSquare, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { servicesData } from '../mock';

const ServicesPage = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'MessagesSquare': return MessagesSquare;
      case 'Users': return Users;
      default: return Building2;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive programs designed to strengthen every aspect of your partnership journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden border border-amber-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Video */}
                  <div className="relative h-64 overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Service {service.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="inline-flex p-3 rounded-xl bg-white shadow-md mb-4">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-lg text-amber-600 font-semibold mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-all duration-300 group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Strengthen Your Partnership?</h2>
            <p className="text-xl text-gray-300 mb-8">Book a free consultation to discuss which services are right for you</p>
            <Link to="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;