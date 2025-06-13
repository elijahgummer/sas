"use client";

import ResumeAnalyzerApp from "./components/ResumeAnalyzerApp";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
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
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./components/theme-toggle";
import { ResumeBuilder } from "./components/resume-builder";
import { ChatSupport } from "./components/chat-support";
import { SkillsAssessment } from "./components/skills-assessment";
import { NotificationBell } from "./components/notification-bell";

const FadeInWhenVisible = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
  );
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [resumeScore, setResumeScore] = useState(0);
  const resumeScoreRef = useRef(null);
  const { theme, setTheme } = useTheme();

  // Resume score animation
  useEffect(() => {
    if (resumeScore < 78) {
      const timer = setTimeout(() => setResumeScore((prev) => prev + 1), 30);
      return () => clearTimeout(timer);
    }
  }, [resumeScore]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Feature rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveFeature((prev) => (prev + 1) % 5);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      title: "AI Resume Analyzer",
      description:
        "Our advanced AI analyzes every aspect of your resume and provides personalized improvement suggestions.",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: "Job Match Scoring",
      description:
        "Upload a job description and see how well your resume matches the requirements with specific improvement tips.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-purple-500" />,
      title: "Salary Estimator",
      description:
        "Get an accurate salary range based on your skills, experience, and current market rates in your industry.",
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-500" />,
      title: "Version Control",
      description:
        "Create multiple versions of your resume for different job applications and track performance of each.",
    },
    {
      icon: <Compass className="h-6 w-6 text-purple-500" />,
      title: "Career Path Planner",
      description:
        "Visualize potential career paths based on your current skills and experience with learning recommendations.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 subtle-pattern">
      {/* Chat Support */}
      <ChatSupport />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-purple-500 rounded-md blur-[2px] opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-md w-full h-full flex items-center justify-center border border-purple-200 dark:border-purple-800">
                <span className="text-purple-500 font-bold text-xl">CV</span>
              </div>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-800 dark:text-gray-200">CV</span>
              <span className="gradient-text">Worth</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <NotificationBell />
            <button
              className="z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="#features"
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-4 mt-8 w-64">
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-600 dark:text-purple-400 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                asChild
              >
                <Link href="/sign-in">Log in</Link>
              </Button>
              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                asChild
              >
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <NotificationBell />
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
              asChild
            >
              <Link href="/sign-in">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </Link>
            </Button>
            <Button
              className="bg-purple-500 hover:bg-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/sign-up">Sign up free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <FadeInWhenVisible className="space-y-8 w-full">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mx-auto">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  <span>AI-Powered Resume Analysis</span>
                  <ResumeAnalyzerApp />
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                    Discover Your Resume&#39;s{" "}
                    <span className="gradient-text">True Value</span>
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Our AI analyzes your resume, calculates its market worth,
                    and provides personalized improvements to help you land your
                    dream job.
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
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-800"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          width={32}
                          height={32}
                          alt={`User ${i}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-900 dark:text-gray-200 font-medium">
                      10,000+
                    </span>{" "}
                    resumes analyzed this month
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible
                className="mt-16 w-full max-w-xl mx-auto"
                delay={200}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-violet-500 rounded-2xl blur-sm opacity-20"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl card-shadow border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-purple-500" />
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                          Resume Analysis
                        </h3>
                      </div>
                      <div className="text-sm font-medium text-purple-500 dark:text-purple-400">
                        Premium
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Overall Score
                          </span>
                          <span
                            className="font-medium text-gray-900 dark:text-gray-100"
                            ref={resumeScoreRef}
                          >
                            {resumeScore}/100
                          </span>
                        </div>
                        <div className="progress-bar dark:bg-gray-700">
                          <div
                            className="progress-value"
                            style={{ width: `${resumeScore}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-sm cursor-pointer">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Experience
                          </div>
                          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            85
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              /100
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-sm cursor-pointer">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Skills
                          </div>
                          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            72
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              /100
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">
                          Top Improvements
                        </h4>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/30 cursor-pointer">
                          <div className="text-sm text-gray-800 dark:text-gray-200">
                            Add more quantifiable achievements to your
                            experience section
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

        {/* New Resume Builder Section */}
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
                Create professional, ATS-optimized resumes with our intuitive
                drag-and-drop builder
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={200}>
              <ResumeBuilder />
            </FadeInWhenVisible>

            <div className="mt-12 text-center">
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white"
                size="lg"
              >
                Build Your Resume Now
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Assessment Section */}
        <section className="w-full py-16 bg-purple-50 dark:bg-gray-800">
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
                Discover your strengths and get personalized resume
                recommendations
              </p>
            </FadeInWhenVisible>

            <div className="max-w-2xl mx-auto">
              <FadeInWhenVisible delay={200}>
                <SkillsAssessment />
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                TRUSTED BY PROFESSIONALS FROM
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="text-gray-400 dark:text-gray-500 font-semibold text-xl"
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Interactive Feature Showcase */}
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
                Our cutting-edge AI technology analyzes your resume from
                multiple angles to provide comprehensive insights
              </p>
            </FadeInWhenVisible>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <FadeInWhenVisible
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-purple-100 dark:border-purple-800">
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border-b border-purple-100 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      AI-Powered Features
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Hover over each feature to learn more
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.01] ${
                            activeFeature === index
                              ? "bg-purple-50 dark:bg-purple-900/20 shadow-sm"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onMouseEnter={() => setActiveFeature(index)}
                        >
                          <div
                            className={`p-3 rounded-lg ${
                              activeFeature === index
                                ? "bg-purple-100 dark:bg-purple-900/40"
                                : "bg-gray-100 dark:bg-gray-700"
                            } transition-colors duration-300`}
                          >
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                              {feature.description}
                            </p>
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Job Match Analysis
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Upload a job description and our AI will analyze how well
                      your resume matches the requirements, highlighting gaps
                      and suggesting improvements.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Job Match Score
                        </span>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          72%
                        </span>
                      </div>
                      <div className="progress-bar dark:bg-gray-700 mb-4">
                        <div
                          className="progress-value"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Required Skills
                          </span>
                          <span className="text-gray-900 dark:text-gray-100">
                            8/10 matched
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Experience Level
                          </span>
                          <span className="text-gray-900 dark:text-gray-100">
                            Meets requirements
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Missing Keywords
                          </span>
                          <span className="text-purple-600 dark:text-purple-400">
                            3 critical terms
                          </span>
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Salary Estimator
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Based on your skills, experience, and education, our AI
                      calculates your market value and potential salary range.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="text-center mb-3">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          $85,000 - $105,000
                        </span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Estimated annual salary range
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                          <div className="font-medium text-gray-900 dark:text-white">
                            $92,500
                          </div>
                          <div className="text-gray-500 dark:text-gray-400">
                            Average
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                          <div className="font-medium text-gray-900 dark:text-white">
                            +12%
                          </div>
                          <div className="text-gray-500 dark:text-gray-400">
                            vs. Industry
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
                          <div className="font-medium text-gray-900 dark:text-white">
                            +$8,500
                          </div>
                          <div className="text-gray-500 dark:text-gray-400">
                            Potential Gain
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-20 md:py-28 relative bg-gray-50 dark:bg-gray-800"
        >
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
                Our AI-powered platform provides comprehensive analysis and
                actionable insights to help you stand out in the job market.
              </p>
            </FadeInWhenVisible>

            <Tabs defaultValue="analysis" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="analysis" className="text-sm md:text-base">
                  Resume Analysis
                </TabsTrigger>
                <TabsTrigger
                  value="optimization"
                  className="text-sm md:text-base"
                >
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Resume Worth Score
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Get a detailed breakdown of your resume&#39;s market
                            value based on experience, skills, and education.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            AI-Powered Analysis
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Our advanced AI analyzes every aspect of your resume
                            and provides personalized improvement suggestions.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Smart Suggestions
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Receive tailored recommendations to enhance your
                            resume&#39;s impact and appeal to hiring managers.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            ATS Optimization
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Ensure your resume passes through Applicant Tracking
                            Systems with keyword optimization and format
                            checking.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Keyword Matcher
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Automatically identify and suggest industry-specific
                            keywords to include in your resume for better
                            visibility.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            A/B Testing
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Create multiple versions of your resume and track
                            which one performs better with employers.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Career Advancement
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Get insights on skills and experiences that can help
                            you advance to the next level in your career.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Skill Gap Analysis
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Identify skills you need to develop for your target
                            roles with personalized learning recommendations.
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
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            Industry Insights
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                            Access real-time data on industry trends, in-demand
                            skills, and salary benchmarks for your field.
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

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-20 md:py-28 bg-white dark:bg-gray-900"
        >
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
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      Basic
                    </CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        Free
                      </span>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      Perfect for getting started with resume improvement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Basic resume analysis
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Overall score calculation
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          3 improvement suggestions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Limited ATS check
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={150}>
                <Card className="bg-white dark:bg-gray-800 border-purple-500 dark:border-purple-600 relative transition-all duration-300 card-shadow h-full scale-105 shadow-xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 inline-block rounded-full bg-purple-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      Professional
                    </CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        $19
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      Ideal for job seekers who want comprehensive analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Advanced resume analysis
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Detailed section scores
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Unlimited improvement suggestions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Full ATS optimization
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Industry benchmarking
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          3 resume versions
                        </span>
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
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      Enterprise
                    </CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        $49
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      For professionals seeking career advancement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Everything in Professional
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          AI-powered rewriting
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Career path recommendations
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Salary negotiation insights
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          1-on-1 expert consultation
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Unlimited resume versions
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-700 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-700 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>

              <FadeInWhenVisible className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
                    Ready to discover your resume&#39;s true value?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                    Join thousands of professionals who have improved their
                    resumes and advanced their careers with CVWorth.
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
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-purple-500 rounded-md blur-[2px] opacity-20"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-md w-full h-full flex items-center justify-center border border-purple-200 dark:border-purple-800">
                    <span className="text-purple-500 font-bold text-base">
                      CV
                    </span>
                  </div>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-gray-800 dark:text-gray-200">CV</span>
                  <span className="gradient-text">Worth</span>
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                AI-powered resume analysis and improvement to help you land your
                dream job.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Product
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#features"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Company
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-8 md:flex-row">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} CVWorth. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
