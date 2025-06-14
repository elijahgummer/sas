'use client';

import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import Hero from "./components/Hero"
import Builder from './components/Builder';

export default function Home() {
  return (
    <>
      <ResumeAnalyzerApp />
      <Hero resumeScore={85} />
      <Builder />
      
    </>
  ) 
}