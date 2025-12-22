import React from 'react';
import { Shield, TrendingUp, Heart, Users, Clock, Award, CheckCircle, Target } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Conflict Prevention",
      description: "Address potential issues before they become problems. 80% fewer recurring arguments reported by our couples.",
      stat: "80%",
      statLabel: "Fewer Conflicts"
    },
    {
      icon: TrendingUp,
      title: "Financial Clarity",
      description: "Create transparent financial systems together. Couples report 95% satisfaction with financial discussions.",
      stat: "95%",
      statLabel: "Satisfaction Rate"
    },
    {
      icon: Heart,
      title: "Emotional Intimacy",
      description: "Deepen your connection through vulnerability and authentic communication. Stronger bonds reported by 92% of couples.",
      stat: "92%",
      statLabel: "Stronger Bonds"
    },
    {
      icon: Users,
      title: "Family Harmony",
      description: "Navigate extended family dynamics with confidence and clear boundaries. Reduced family stress by 70%.",
      stat: "70%",
      statLabel: "Less Stress"
    },
    {
      icon: Clock,
      title: "Time Investment",
      description: "3-8 sessions that save years of potential conflict. Every hour invested returns exponentially.",
      stat: "3-8",
      statLabel: "Sessions"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Learn from facilitators with 15+ years of relationship mediation experience and proven frameworks.",
      stat: "15+",
      statLabel: "Years Experience"
    },
    {
      icon: CheckCircle,
      title: "Actionable Outcomes",
      description: "Leave with documented agreements, frameworks, and tools you'll use for decades.",
      stat: "100%",
      statLabel: "Documented"
    },
    {
      icon: Target,
      title: "Goal Alignment",
      description: "Create shared vision for your future. 98% of couples feel more aligned after our programs.",
      stat: "98%",
      statLabel: "Aligned"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Why Invest in Pre-Marital Preparation?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            The data speaks for itself. Couples who invest in pre-marital preparation report significantly higher satisfaction and lower conflict rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-3d bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group animate-scale-in stagger-${(index % 4) + 1} hover:shadow-2xl"
              >
                <div className="inline-flex p-4 rounded-xl bg-white/20 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{benefit.description}</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="text-4xl font-bold text-white mb-1">{benefit.stat}</div>
                  <div className="text-white/80 text-sm font-medium">{benefit.statLabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research backing */}
        <div className="mt-20 max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Research-Backed Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">85%</div>
              <p className="text-white/90">Increase in relationship satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">60%</div>
              <p className="text-white/90">Reduction in divorce likelihood</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <p className="text-white/90">Would recommend to others</p>
            </div>
          </div>
          <p className="text-white/80 text-center mt-8 italic">
            *Based on 5-year follow-up study with 500+ couples who completed our programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;