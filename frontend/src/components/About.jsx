import React from 'react';
import { Heart, Users, MessageCircle, FileCheck } from 'lucide-react';
import { aboutData } from '../mock';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Build deeper understanding and empathy'
    },
    {
      icon: Users,
      title: 'Family Harmony',
      description: 'Navigate complex family dynamics together'
    },
    {
      icon: MessageCircle,
      title: 'Communication Skills',
      description: 'Master the art of meaningful dialogue'
    },
    {
      icon: FileCheck,
      title: 'Clear Agreements',
      description: 'Document shared values and expectations'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {aboutData.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image/Video Gallery */}
          <div className="relative">
            {/* Main Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              >
                <source src="https://cdn.pixabay.com/video/2022/12/12/143339-780252932_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Small Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1594217523449-2f3b38e6d18c?w=400&h=300&fit=crop"
                  alt="Couple consultation"
                  className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop"
                  alt="Partnership meeting"
                  className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs animate-bounce-in z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Years of Experience</p>
                  <p className="text-sm text-gray-600">in Relationship Mediation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;