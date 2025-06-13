'use client';

import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <ResumeAnalyzerApp />
      <Hero resumeScore={85} />
    </>
  ) 
}