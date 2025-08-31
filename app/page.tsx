import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechSection from '@/components/TechSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
