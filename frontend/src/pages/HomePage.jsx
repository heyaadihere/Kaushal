import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedStats from '../components/AnimatedStats';
import WhyChoose from '../components/WhyChoose';
import BenefitsSection from '../components/BenefitsSection';
import Services from '../components/Services';
import Process from '../components/Process';
import ReadinessCalculator from '../components/ReadinessCalculator';
import VideoGallery from '../components/VideoGallery';
import Packages from '../components/Packages';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <AnimatedStats />
      <WhyChoose />
      <BenefitsSection />
      <Services />
      <Process />
      <ReadinessCalculator />
      <VideoGallery />
      <Packages />
      <SuccessStories />
      <Testimonials />
    </div>
  );
};

export default HomePage;