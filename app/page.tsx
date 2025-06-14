'use client';

import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import Hero from "./components/Hero"
import Builder from './components/Builder';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <>
      <ResumeAnalyzerApp />
      <Hero resumeScore={85} />
      <Builder />
      <Features />
      <Pricing />
    </>
  ) 
}