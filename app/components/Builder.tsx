"use client"

import React from "react"
import { Button } from "./ui/button"
import { useInView } from "react-intersection-observer"
import { ResumeBuilder } from "./resume-builder"
import { SkillsAssessment } from "./skills-assessment"
import {
  Check,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  FileText,
  BarChart3,
  Zap,
  Award,
  Sparkles,
  Brain,
  Lightbulb,
  Rocket,
  Briefcase,
  LineChart,
  Target,
  Cpu,
  Layers,
  Compass,
  TrendingUp,
  Repeat,
  BookOpen,
  LogIn,
} from "lucide-react"


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


const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500 dark:text-purple-300" />,
    title: "Smart Suggestions",
    description: "Get real-time, AI-powered suggestions to improve your resume content and formatting.",
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500 dark:text-purple-300" />,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get recommendations to boost your job match.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-500 dark:text-purple-300" />,
    title: "Keyword Optimization",
    description: "Optimize your resume with keywords tailored to your target job description.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-purple-500 dark:text-purple-300" />,
    title: "Instant Feedback",
    description: "Receive instant feedback on your resume’s strengths and areas for improvement.",
  },
];

export default function Builder() {
  const [activeFeature, setActiveFeature] = React.useState<number | null>(null);

  return (
    <>
      <section className="w-full py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
              <FileText className="h-3.5 w-3.5 mr-1.5" />
              <span>Introducing</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
              Interactive Resume Builder
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
              Create professional, ATS-optimized resumes with our intuitive drag-and-drop builder
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={200}>
            <ResumeBuilder />
          </FadeInWhenVisible>

          <div className="mt-12 text-center">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white" size="lg">
              Build Your Resume Now
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="w-full py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
              <Award className="h-3.5 w-3.5 mr-1.5" />
              <span>New Feature</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
              Skills Assessment
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
              Discover your strengths and get personalized resume recommendations
            </p>
          </FadeInWhenVisible>

          <div className="max-w-2xl mx-auto">
            <FadeInWhenVisible delay={200}>
              <SkillsAssessment />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">TRUSTED BY PROFESSIONALS FROM</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map((brand) => (
              <div key={brand} className="text-gray-400 dark:text-gray-500 font-semibold text-xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 relative">
          <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
              <Cpu className="h-3.5 w-3.5 mr-1.5" />
              <span>Innovative Technology</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
              Powered by Advanced AI
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
              Our cutting-edge AI technology analyzes your resume from multiple angles to provide comprehensive
              insights
            </p>
          </FadeInWhenVisible>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeInWhenVisible className="relative">
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-purple-100 dark:border-purple-800"
              >
                <div className="p-6 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border-b border-purple-100 dark:border-purple-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">AI-Powered Features</h3>
                  <p className="text-gray-600 dark:text-gray-300">Hover over each feature to learn more</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.01] ${activeFeature === index ? "bg-purple-50 dark:bg-purple-900/20 shadow-sm" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                        onMouseEnter={() => setActiveFeature(index)}
                      >
                        <div
                          className={`p-3 rounded-lg ${activeFeature === index ? "bg-purple-100 dark:bg-purple-900/40" : "bg-gray-100 dark:bg-gray-700"} transition-colors duration-300`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <div className="space-y-8">
              <FadeInWhenVisible delay={150}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-purple-600 dark:text-purple-400">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Job Match Analysis</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Upload a job description and our AI will analyze how well your resume matches the requirements,
                    highlighting gaps and suggesting improvements.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Job Match Score</span>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">72%</span>
                    </div>
                    <div className="progress-bar dark:bg-gray-700 mb-4">
                      <div className="progress-value" style={{ width: "72%" }}></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Required Skills</span>
                        <span className="text-gray-900 dark:text-gray-100">8/10 matched</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Experience Level</span>
                        <span className="text-gray-900 dark:text-gray-100">Meets requirements</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Missing Keywords</span>
                        <span className="text-purple-600 dark:text-purple-400">3 critical terms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={300}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg text-purple-600 dark:text-purple-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Salary Estimator</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Based on your skills, experience, and education, our AI calculates your market value and potential
                    salary range.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">$85,000 - $105,000</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Estimated annual salary range</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                        <div className="font-medium text-gray-900 dark:text-white">$92,500</div>
                        <div className="text-gray-500 dark:text-gray-400">Average</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                        <div className="font-medium text-gray-900 dark:text-white">+12%</div>
                        <div className="text-gray-500 dark:text-gray-400">vs. Industry</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                        <div className="font-medium text-gray-900 dark:text-white">+$8,500</div>
                        <div className="text-gray-500 dark:text-gray-400">Potential Gain</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}