'use client';

import Hero from "./components/Hero"
import Builder from './components/Builder';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { X } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero resumeScore={85} />
      <Builder />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  ) 
}