"use client"

import { useState } from "react"
import { ResumeAnalyzerApp } from "../components/resume-analyzer-app"
import OverviewContent from "./features/OverviewContent"
import KeywordAnalyzerContent from "./features/KeywordAnalyzerContent"
import AIRewriterContent from "./features/AIRewriterContent"
import CoverLetterContent from "./features/CoverLetterContent"
import CareerFitContent from "./features/CareerFitContent"
import SkillGapContent from "./features/SkillGapContent"
import {
  BarChart3,
  Target,
  PenTool,
  Mail,
  TrendingUp,
  BookOpen,
  Sparkles,
  Award,
} from "lucide-react"

export default function DashboardPage() {
  const [activeFeature, setActiveFeature] = useState("overview")

  const features = [
    {
      id: "overview",
      name: "Overview",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Dashboard overview",
    },
    {
      id: "resume-analyzer",
      name: "Resume Worth",
      icon: <Award className="h-5 w-5" />,
      description: "Analyze resume value & worth",
    },
    {
      id: "keyword-analyzer",
      name: "Keyword Analyzer",
      icon: <Target className="h-5 w-5" />,
      description: "ATS Compatibility & Keywords",
    },
    {
      id: "ai-rewriter",
      name: "AI Rewriter",
      icon: <PenTool className="h-5 w-5" />,
      description: "Improve resume sections",
    },
    {
      id: "cover-letter",
      name: "Cover Letter",
      icon: <Mail className="h-5 w-5" />,
      description: "Generate tailored cover letters",
    },
    {
      id: "career-fit",
      name: "Career Fit",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Role recommendations",
    },
    {
      id: "skill-gap",
      name: "Skill Gap",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Identify missing skills",
    },
  ]

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case "overview":
        return <OverviewContent />
      case "resume-analyzer":
        return <ResumeAnalyzerApp />
      case "keyword-analyzer":
        return <KeywordAnalyzerContent />
      case "ai-rewriter":
        return <AIRewriterContent />
      case "cover-letter":
        return <CoverLetterContent />
      case "career-fit":
        return <CareerFitContent />
      case "skill-gap":
        return <SkillGapContent />
      default:
        return <OverviewContent />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI-powered resume tools</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeFeature === feature.id
                  ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <div
                className={`p-1.5 rounded-md ${
                  activeFeature === feature.id
                    ? "bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300"
                    : "bg-gray-100 dark:bg-gray-600"
                }`}
              >
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{feature.name}</div>
                <div className="text-xs opacity-75 truncate">{feature.description}</div>
              </div>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Pro Tip</span>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400">
              Use the Keyword Analyzer before applying to jobs for better ATS compatibility.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{renderFeatureContent()}</div>
      </div>
    </div>
  )
}