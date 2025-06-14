"use client"

import { useInView } from "react-intersection-observer"
import {
  Zap,
  BarChart3,
  Brain,
  Lightbulb,
  Award,
  Target,
  Repeat,
  Rocket,
  BookOpen,
  Briefcase,
} from "lucide-react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"


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

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-28 relative bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 relative">
        <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
            <Zap className="h-3.5 w-3.5 mr-1.5" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
            Everything you need to improve your resume
          </h2>
          <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
            Our AI-powered platform provides comprehensive analysis and actionable insights to help you stand out in
            the job market.
          </p>
        </FadeInWhenVisible>

        <Tabs defaultValue="analysis" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="analysis" className="text-sm md:text-base">
              Resume Analysis
            </TabsTrigger>
            <TabsTrigger value="optimization" className="text-sm md:text-base">
              ATS Optimization
            </TabsTrigger>
            <TabsTrigger value="career" className="text-sm md:text-base">
              Career Growth
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="scale-in-animation">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FadeInWhenVisible>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <BarChart3 className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Resume Worth Score</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Get a detailed breakdown of your resume&#39;s market value based on experience, skills, and
                        education.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={150}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Brain className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">AI-Powered Analysis</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Our advanced AI analyzes every aspect of your resume and provides personalized improvement
                        suggestions.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={300}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Lightbulb className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Smart Suggestions</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Receive tailored recommendations to enhance your resume&#39;s impact and appeal to hiring
                        managers.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="scale-in-animation">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FadeInWhenVisible>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Award className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">ATS Optimization</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Ensure your resume passes through Applicant Tracking Systems with keyword optimization and
                        format checking.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={150}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Target className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Keyword Matcher</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Automatically identify and suggest industry-specific keywords to include in your resume for
                        better visibility.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={300}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Repeat className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">A/B Testing</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Create multiple versions of your resume and track which one performs better with employers.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>
            </div>
          </TabsContent>

          <TabsContent value="career" className="scale-in-animation">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FadeInWhenVisible>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Rocket className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Career Advancement</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Get insights on skills and experiences that can help you advance to the next level in your
                        career.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={150}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <BookOpen className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Skill Gap Analysis</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Identify skills you need to develop for your target roles with personalized learning
                        recommendations.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={300}>
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
                    <CardHeader>
                      <div className="p-3 rounded-lg feature-icon-bg dark:bg-purple-900/20 w-fit mb-3 border border-purple-200 dark:border-purple-800">
                        <Briefcase className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Industry Insights</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Access real-time data on industry trends, in-demand skills, and salary benchmarks for your
                        field.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </FadeInWhenVisible>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}