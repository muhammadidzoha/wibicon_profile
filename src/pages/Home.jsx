import React from 'react';
import { Toaster } from '../components/ui/sonner';

import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Services from '@/components/section/Services';
import WhyChooseUs from '@/components/section/WhyChooseUs';
import Portfolio from '@/components/section/Portfolio';
import Contact from '@/components/section/Contact';
import MapSection from '@/components/section/MapSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Portfolio Section */}
      {/* <Portfolio /> */}

      {/* Contact Section */}
      <Contact />

      <MapSection />
    </div>
  );
};

export default Home;
