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
              We are partnership architects who help couples build lasting foundations before they say "I do." Through structured conversations, emotional intelligence, and proven frameworks, we guide partners in designing relationships with intention, clarity, and courage.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl border border-amber-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg font-medium">
                  At Kaushal, our mission is to empower individuals and couples to design their relationships with intention, clarity, and courage. We do this by turning partnership into a practical skill - one that can be learned, practised, and improved over time.
                </p>
                <p className="font-semibold text-gray-900 mt-6 mb-3">We are committed to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Normalising Pre-Marital Conversations</strong> - Offering structured, stigma-free spaces where couples can honestly discuss money, careers, families, boundaries, conflict, intimacy, and future plans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Creating Clear, Human-Centred Frameworks</strong> - Through tools like the Pre-Marital Partnership Accord and Relationship Constitutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Offering Neutral, Compassionate Facilitation</strong> - Acting as a calm third party, helping both partners feel seen, heard, and respected.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Building Emotional and Legal Literacy</strong> - Simplifying complex topics into accessible, culturally sensitive language.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Honouring Individuality Within Partnership</strong> - Designing relationship models that reflect your values, whether equal, queer-affirming, inter-faith, or blended families.</span>
                  </li>
                </ul>
                <p className="italic mt-6 text-gray-600">
                  Through our sessions, content, and tools, we quietly upgrade how people think about love - from "we'll manage somehow" to "we will learn how to do this well, together."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-2xl border border-orange-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  At Kaushal, we envision a world where partnership is recognised, learned, and practised as a skill - not left to luck, habit, or unspoken expectations. We aim to make structured, pre-marital mediation as normal as planning a wedding, so that every couple walks into commitment with clarity, consent, and shared ownership of their future.
                </p>
                <p>
                  We see Kaushal as India's leading space for informed, emotionally intelligent marriages, where couples are gently guided to talk through money, careers, family dynamics, conflict, intimacy, and long-term life choices before they become fault lines.
                </p>
                <p>
                  Our vision is to replace silent assumptions with clear, humane agreements, captured in living documents like the Partnership Accord and Relationship Constitution that couples actually use in daily life.
                </p>
                <p>
                  Over time, we want to shift the cultural default: from "manage somehow" to "prepare with intention". We aspire to build a generation of couples who know how to listen, negotiate, and realign without hostility.
                </p>
                <p className="font-semibold text-gray-900 mt-6">
                  Ultimately, our vision is simple and radical: that fewer relationships break from preventable misunderstandings, and more marriages thrive because two people chose to practise partnership as a lifelong, evolving skill.
                </p>
              </div>
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

      {/* Image Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Approach in Action</h2>
              <p className="text-gray-600 text-lg">Guiding couples through meaningful conversations</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1200&h=600&fit=crop&q=80"
                alt="Couple counseling"
                className="w-full"
              />
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1560745155-a978f7ef4d06?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1627964464837-6328f5931576?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1501901609772-df0848060b33?w=400&h=400&fit=crop&q=80',
                'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&q=80'
              ].map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
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
    </div>
  );
};

export default AboutPage;