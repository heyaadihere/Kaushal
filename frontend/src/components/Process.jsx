import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate through steps when section is visible
            let step = 0;
            const interval = setInterval(() => {
              if (step < 5) {
                setActiveStep(step);
                step++;
              } else {
                clearInterval(interval);
              }
            }, 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: 'Initial Consultation',
      description: '15-minute clarity call to understand your needs and recommend the right program',
      duration: 'Free'
    },
    {
      title: 'Package Selection',
      description: 'Choose from Saamanjasya, Sammati, or Sankalp based on your partnership goals',
      duration: 'Day 1'
    },
    {
      title: 'Guided Sessions',
      description: 'Structured conversations with expert facilitators covering all partnership aspects',
      duration: '3-8 Weeks'
    },
    {
      title: 'Partnership Accord Creation',
      description: 'Document your shared values, agreements, and commitments in a formal accord',
      duration: 'Final Week'
    },
    {
      title: 'Ongoing Support',
      description: 'Access to resources, follow-up sessions, and continued guidance as you build your life together',
      duration: 'Lifetime'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Our Process</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to a Strong Partnership
          </h2>
          <p className="text-lg text-gray-600">
            A clear, step-by-step path from first conversation to lasting commitment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-500 ${
                  index <= activeStep
                    ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg scale-105'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex-shrink-0">
                  {index <= activeStep ? (
                    <CheckCircle2 className="w-8 h-8 text-amber-600 animate-scale-in" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                    <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=800&fit=crop&q=80"
                alt="Couple planning together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-1">95%</div>
                <p className="text-sm text-gray-600">Completion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;