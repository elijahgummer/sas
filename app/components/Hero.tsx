"use client"

import { Button } from "./ui/button"
import { ChevronRight, ArrowRight, FileText, Sparkles } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"


import React from "react"

const FadeInWhenVisible = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}


interface HeroProps {
  resumeScore: number
  resumeScoreRef?: React.RefObject<HTMLSpanElement>
}

export default function Hero({ resumeScore, resumeScoreRef }: HeroProps) {
  return (
    <section className="w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <FadeInWhenVisible className="space-y-8 w-full">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mx-auto">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              <span>AI-Powered Resume Analysis</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                Discover Your Resume&apos;s <span className="gradient-text">True Value</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Our AI analyzes your resume, calculates its market worth, and provides personalized improvements to
                help you land your dream job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-purple-500 hover:bg-purple-600 text-white purple-glow transition-all duration-300 hover:scale-105 text-base group"
              >
                Analyze My Resume
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 text-base"
              >
                See How It Works
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/65.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((url, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-800"
                  >
                    <Image
                      src={url}
                      width={32}
                      height={32}
                      alt={`User ${i + 1}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-gray-200 font-medium">10,000+</span> resumes analyzed this
                month
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible className="mt-16 w-full max-w-xl mx-auto" delay={200}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-violet-500 rounded-2xl blur-sm opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl card-shadow border border-purple-100 dark:border-purple-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-500" />
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Resume Analysis</h3>
                  </div>
                  <div className="text-sm font-medium text-purple-500 dark:text-purple-400">Premium</div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Overall Score</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100" ref={resumeScoreRef}>
                        {resumeScore}/100
                      </span>
                    </div>
                    <div className="progress-bar dark:bg-gray-700">
                      <div className="progress-value" style={{ width: `${resumeScore}%` }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-sm cursor-pointer">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Experience</div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        85<span className="text-sm text-gray-500 dark:text-gray-400">/100</span>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-sm cursor-pointer">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Skills</div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        72<span className="text-sm text-gray-500 dark:text-gray-400">/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Top Improvements</h4>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/30 cursor-pointer">
                      <div className="text-sm text-gray-800 dark:text-gray-200">
                        Add more quantifiable achievements to your experience section
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white group">
                      View Full Analysis
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}