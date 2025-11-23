import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AnimatedStats from "./components/AnimatedStats";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Process from "./components/Process";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <AnimatedStats />
          <WhyChoose />
          <Services />
          <Process />
          <Packages />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
