import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Star, Award } from 'lucide-react';

const AnimatedStats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, label: 'Couples Guided', value: 500, suffix: '+', color: 'text-amber-600' },
    { icon: Star, label: 'Success Rate', value: 95, suffix: '%', color: 'text-orange-600' },
    { icon: Heart, label: 'Partnership Accords', value: 450, suffix: '+', color: 'text-red-600' },
    { icon: Award, label: 'Expert Facilitators', value: 12, suffix: '+', color: 'text-yellow-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate counters
            stats.forEach((stat, index) => {
              let current = 0;
              const increment = stat.value / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, 40);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-md mb-4 group-hover:bg-white/30 transition-colors">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <p className="text-white/90 font-medium text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;