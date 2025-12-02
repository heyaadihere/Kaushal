import React, { useState } from 'react';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const InteractiveTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      phase: "Discovery",
      title: "Understanding Your Needs",
      description: "Free 15-minute clarity call to understand your relationship stage, concerns, and goals.",
      duration: "Week 0",
      activities: ["Initial consultation", "Needs assessment", "Package recommendation"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
    },
    {
      phase: "Foundation",
      title: "Building Communication Skills",
      description: "Learn the fundamentals of effective partnership dialogue and emotional intelligence.",
      duration: "Weeks 1-2",
      activities: ["Communication frameworks", "Active listening", "Conflict basics"],
      image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
    },
    {
      phase: "Exploration",
      title: "Deep Dive into Core Topics",
      description: "Structured conversations about finances, career, family, intimacy, and long-term goals.",
      duration: "Weeks 3-5",
      activities: ["Financial planning", "Career alignment", "Family dynamics", "Life goals"],
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
    },
    {
      phase: "Documentation",
      title: "Creating Your Partnership Accord",
      description: "Transform conversations into a written document that captures your shared commitments.",
      duration: "Weeks 6-7",
      activities: ["Draft agreements", "Review sessions", "Final accord"],
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
    },
    {
      phase: "Integration",
      title: "Living Your Agreement",
      description: "Implementation support and follow-up to ensure your accord becomes a living practice.",
      duration: "Ongoing",
      activities: ["Implementation plan", "Check-in sessions", "Resource access"],
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">Your Partnership Journey</h2>
          <p className="text-xl text-gray-600">A step-by-step roadmap from first conversation to lasting commitment</p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex gap-4">
            {journeySteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeStep === index
                    ? 'bg-amber-600 text-white shadow-lg scale-110'
                    : 'bg-white text-gray-600 hover:bg-amber-100 hover:scale-105'
                }`}
              >
                {step.phase}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={journeySteps[activeStep].image}
                  alt={journeySteps[activeStep].title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-semibold">
                    {journeySteps[activeStep].duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                  Phase {activeStep + 1}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{journeySteps[activeStep].title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{journeySteps[activeStep].description}</p>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Key Activities:</h4>
                <ul className="space-y-3">
                  {journeySteps[activeStep].activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                {activeStep < journeySteps.length - 1 && (
                  <Button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold group"
                  >
                    Next Phase
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
                {activeStep === journeySteps.length - 1 && (
                  <Button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Start Your Journey
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            {journeySteps.map((_, index) => (
              <div key={index} className="flex-1 flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    index <= activeStep
                      ? 'bg-amber-600 text-white scale-110'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {index + 1}
                </button>
                {index < journeySteps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 transition-all duration-500 ${
                    index < activeStep ? 'bg-amber-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;