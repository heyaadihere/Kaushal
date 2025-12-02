import React from 'react';
import { MessageCircle, FileText, Shield, Target } from 'lucide-react';
import { whyChooseData } from '../mock';

const WhyChoose = () => {
  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Confidential & Safe',
      description: 'Your conversations remain completely private and secure'
    },
    {
      icon: Target,
      title: 'Result-Oriented',
      description: 'Tangible outcomes with actionable frameworks and agreements'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Why Choose Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {whyChooseData.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {whyChooseData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {whyChooseData.features.map((feature) => {
            const IconComponent = feature.icon === 'MessageCircle' ? MessageCircle : FileText;
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200/20 rounded-full blur-2xl group-hover:bg-amber-300/30 transition-colors"></div>
              </div>
            );
          })}

          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200/20 rounded-full blur-2xl group-hover:bg-amber-300/30 transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* Video Testimonial with Image Grid */}
        <div className="mt-20 space-y-8">
          {/* Main Video */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://videos.pexels.com/video-files/7235164/7235164-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <img
                  src={img}
                  alt={`Couple ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;