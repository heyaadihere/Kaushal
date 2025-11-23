import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedStats from '../components/AnimatedStats';
import WhyChoose from '../components/WhyChoose';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <AnimatedStats />
      <WhyChoose />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;