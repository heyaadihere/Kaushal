import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MessagesSquare, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

const iconMap = {
  'Building2': Building2,
  'MessagesSquare': MessagesSquare,
  'Users': Users
};

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
        const data = await response.json();
        if (data.success) {
          setServices(data.services);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive pre-marital guidance designed to build strong foundations for your partnership
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Building2;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Video */}
                  <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-xl text-amber-600 font-semibold mb-6">{service.subtitle}</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                    <Link to={`/services/${service.id}`}>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-full font-semibold text-lg group">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Partnership Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose a package that fits your needs and start your journey to a stronger relationship
            </p>
            <Link to="/packages">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                View Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;