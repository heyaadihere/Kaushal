import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <WhyChoose />
          <Services />
          <Packages />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
