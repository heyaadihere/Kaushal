import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedStats from '../components/AnimatedStats';
import WhyChoose from '../components/WhyChoose';
import BenefitsSection from '../components/BenefitsSection';
import Services from '../components/Services';
import InteractiveTimeline from '../components/InteractiveTimeline';
import Process from '../components/Process';
import ReadinessCalculator from '../components/ReadinessCalculator';
import VideoGallery from '../components/VideoGallery';
import Packages from '../components/Packages';
import ComparisonTool from '../components/ComparisonTool';
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
      <InteractiveTimeline />
      <Process />
      <ReadinessCalculator />
      <VideoGallery />
      <Packages />
      <ComparisonTool />
      <SuccessStories />
      <Testimonials />
    </div>
  );
};

export default HomePage;