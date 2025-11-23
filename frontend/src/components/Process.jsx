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
      description: 'Co-create your personalized agreement documenting commitments and expectations',
      duration: 'Throughout'
    },
    {
      title: 'Implementation & Follow-up',
      description: 'Take-home frameworks, resources, and optional follow-up sessions for continued growth',
      duration: 'Ongoing'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Our Process</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to Partnership Clarity
          </h2>
          <p className="text-lg text-gray-600">
            A structured, proven approach to building lasting marital harmony
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative pl-12 pb-12 transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                }`}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-5 top-12 w-0.5 h-full transition-all duration-1000 ${
                      index < activeStep ? 'bg-amber-600' : 'bg-gray-300'
                    }`}
                  ></div>
                )}

                {/* Step Circle */}
                <div className="absolute left-0 top-0">
                  {index <= activeStep ? (
                    <CheckCircle2 className="w-12 h-12 text-amber-600 animate-bounce" />
                  ) : (
                    <Circle className="w-12 h-12 text-gray-300" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.pixabay.com/video/2019/08/01/25634-353034926_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-1">100%</div>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;