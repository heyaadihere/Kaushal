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

const HomePage = () => {\n  return (\n    <div>\n      <Hero />\n      <About />\n      <AnimatedStats />\n      <WhyChoose />\n      <BenefitsSection />\n      <Services />\n      <InteractiveTimeline />\n      <Process />\n      <ReadinessCalculator />\n      <VideoGallery />\n      <Packages />\n      <ComparisonTool />\n      <SuccessStories />\n      <Testimonials />\n    </div>\n  );\n};\n\nexport default HomePage;