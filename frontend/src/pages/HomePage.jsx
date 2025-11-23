import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedStats from '../components/AnimatedStats';
import WhyChoose from '../components/WhyChoose';
import Services from '../components/Services';
import Process from '../components/Process';
import ReadinessCalculator from '../components/ReadinessCalculator';
import VideoGallery from '../components/VideoGallery';
import Testimonials from '../components/Testimonials';
import Packages from '../components/Packages';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <AnimatedStats />
      <WhyChoose />
      <Services />
      <Process />
      <ReadinessCalculator />
      <VideoGallery />
      <Packages />
      <Testimonials />
    </div>
  );
};

export default HomePage;