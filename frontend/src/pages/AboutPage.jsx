import React from 'react';
import { Target, Users, Heart, Award, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      description: 'We create a safe, non-judgmental space where couples can express their deepest concerns and aspirations.'
    },
    {
      icon: Target,
      title: 'Result-Oriented',
      description: 'Every session is designed with tangible outcomes - frameworks, agreements, and actionable insights you can implement immediately.'
    },
    {
      icon: Users,
      title: 'Partnership Equality',
      description: 'We believe in balanced partnerships where both individuals have equal voice, rights, and responsibilities.'
    },
    {
      icon: Award,
      title: 'Evidence-Based Methods',
      description: 'Our frameworks combine behavioral psychology, emotional intelligence research, and proven relationship mediation techniques.'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Founded with vision to modernize premarital counseling' },
    { year: '2012', event: 'Introduced Partnership Accord framework' },
    { year: '2015', event: 'Reached 100+ couples milestone' },
    { year: '2018', event: 'Expanded to virtual sessions nationwide' },
    { year: '2022', event: 'Launched specialized family integration programs' },
    { year: '2024', event: '500+ couples guided to harmonious partnerships' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Kaushal
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We're not therapists. We're not marriage counselors. We're partnership architects who help couples build lasting foundations before they say "I do."
            </p>
            <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
              <p>
                Founded in 2009, Kaushal emerged from a simple observation: couples spend months planning perfect weddings but little time planning their actual marriages. We changed that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl border border-amber-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To transform marriage from a gamble into a conscious choice by equipping couples with the emotional, financial, and practical skills needed for lifelong partnership success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-2xl border border-orange-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A world where every couple enters marriage with clarity, confidence, and a personalized roadmap for navigating life's complexities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide every conversation, every framework, every partnership we facilitate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex p-4 rounded-xl bg-amber-100 mb-4">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">15+ years of helping couples build stronger foundations</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-8 group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 group-hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-gray-700 text-lg">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    {milestone.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Approach in Action</h2>
              <p className="text-gray-600 text-lg">Watch how we guide couples through meaningful conversations</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full">
                <source src="https://cdn.pixabay.com/video/2021/08/23/86436-593466690_large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;