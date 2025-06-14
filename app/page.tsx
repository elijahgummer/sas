'use client';

import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import Hero from "./components/Hero"
import Builder from './components/Builder';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
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