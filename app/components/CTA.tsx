"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useInView } from "react-intersection-observer"

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

export default function CTA() {
  return (
    <section id="cta" className="w-full py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-700 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-700 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>

          <FadeInWhenVisible className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
                Ready to discover your resume&apos;s true value?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                Join thousands of professionals who have improved their resumes and advanced their careers with
                CVWorth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white purple-glow transition-all duration-300 hover:scale-105 group"
              >
                Analyze My Resume Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No credit card required. Start with a free analysis.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}