import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { servicesData } from '../mock';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="pt-20 min-h-screen flex items-center justify-center">Service not found</div>;
  }

  const serviceDetails = {
    1: {
      fullDescription: "Our Foundational Agreements program establishes the essential building blocks of your partnership. Through structured conversations and proven frameworks, you'll create clear agreements on the most critical aspects of married life.",
      whatYouGet: [
        'Financial transparency framework and budgeting tools',
        'Role and responsibility mapping',
        'Communication protocols for major decisions',
        'Conflict resolution starter toolkit',
        'Written summary of agreed-upon frameworks',
        'Digital workbook with exercises',
        'Follow-up resources and templates'
      ],
      idealFor: [
        'Couples in the early stages of relationship planning',
        'Partners looking to align on practical matters',
        'Those who want a structured approach to important conversations',
        'Couples preparing for engagement or marriage'
      ],
      duration: '3 sessions over 3-4 weeks',
      format: 'Virtual or In-Person',
      investment: '₹15,000'
    },
    2: {
      fullDescription: "Master the art of partnership communication with our Constructive Dialogue Toolkit. This program goes beyond basic communication to teach you advanced emotional intelligence, active listening, and conflict transformation techniques.",
      whatYouGet: [
        'Advanced communication frameworks',
        'Emotional intelligence training modules',
        'Conflict transformation techniques',
        'Intimacy and boundaries exploration',
        'Parenting philosophy discussions',
        'Career ambition alignment strategies',
        'Comprehensive dialogue toolkit',
        'Personalized communication playbook'
      ],
      idealFor: [
        'Couples who struggle with difficult conversations',
        'Partners wanting to deepen emotional connection',
        'Those preparing for major life transitions',
        'Couples seeking to prevent recurring conflicts'
      ],
      duration: '5 sessions over 5-6 weeks',
      format: 'Virtual or In-Person',
      investment: '₹28,000'
    },
    3: {
      fullDescription: "Navigate the complex dynamics of merging families with our specialized Family Integration Strategy. This program addresses cultural differences, generational expectations, and boundary-setting with extended family.",
      whatYouGet: [
        'Cultural and familial expectation mapping',
        'Boundary-setting frameworks',
        'In-law relationship navigation strategies',
        'Holiday and celebration planning protocols',
        'Tradition integration and creation',
        'Extended family communication guidelines',
        'Crisis management frameworks',
        'Family harmony playbook'
      ],
      idealFor: [
        'Couples from different cultural backgrounds',
        'Partners with complex family dynamics',
        'Those navigating in-law relationships',
        'Couples blending families or traditions'
      ],
      duration: '4 sessions over 4-5 weeks',
      format: 'Virtual or In-Person',
      investment: '₹22,000'
    }
  };

  const details = serviceDetails[service.id];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-2xl text-amber-600 font-semibold mb-6">{service.subtitle}</p>
            <p className="text-xl text-gray-700 leading-relaxed">{details.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video autoPlay loop muted playsInline className="w-full">
              <source src={service.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{details.duration}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">{details.format}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">{details.investment}</div>
              <h3 className="font-semibold text-gray-900">Investment</h3>
            </div>
          </div>

          {/* What You Get */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Get</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ul className="space-y-4">
                {details.whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ideal For */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ideal For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.idealFor.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">Book a free consultation to discuss this service</p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-amber-700 px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;