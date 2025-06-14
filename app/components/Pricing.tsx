"use client"

import { Zap, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
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

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
            <Zap className="h-3.5 w-3.5 mr-1.5" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
            Choose the plan that&#39;s right for you
          </h2>
          <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
            All plans include a free resume analysis to get you started
          </p>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Basic</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">Free</span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  Perfect for getting started with resume improvement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Basic resume analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Overall score calculation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">3 improvement suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Limited ATS check</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
              </CardFooter>
            </Card>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={150}>
            <Card className="bg-white dark:bg-gray-800 border-purple-500 dark:border-purple-600 relative transition-all duration-300 card-shadow h-full scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 inline-block rounded-full bg-purple-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Professional</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$19</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  Ideal for job seekers who want comprehensive analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced resume analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Detailed section scores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Unlimited improvement suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Full ATS optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Industry benchmarking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">3 resume versions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white purple-glow">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={300}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Enterprise</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                  For professionals seeking career advancement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">AI-powered rewriting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Career path recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Salary negotiation insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">1-on-1 expert consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Unlimited resume versions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
              </CardFooter>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}