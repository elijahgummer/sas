'use client';

import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import Hero from "./components/Hero"
import Builder from './components/Builder';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <ResumeAnalyzerApp />
      <Hero resumeScore={85} />
      <Builder />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  ) 
}