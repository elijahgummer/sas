"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Award,
  CheckCircle,
  FileText,
  Users,
  Clock,
  Target,
  Zap,
  ArrowUp,
  ArrowDown,
  Minus,
  Upload,
  Download,
  RefreshCw,
} from "lucide-react"

export function ResumeAnalyzerApp() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(true)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const overallScore = 78
  const marketValue = 92500
  const industryPercentile = 85

  const categoryScores = [
    { name: "Experience", score: 85, trend: "up", change: "+5" },
    { name: "Skills", score: 72, trend: "up", change: "+8" },
    { name: "Education", score: 90, trend: "neutral", change: "0" },
    { name: "Achievements", score: 68, trend: "down", change: "-2" },
    { name: "Format & Structure", score: 82, trend: "up", change: "+3" },
    { name: "Keywords", score: 75, trend: "up", change: "+12" },
  ]

  const strengths = [
    {
      title: "Strong Technical Background",
      description: "Excellent depth in software development with 5+ years experience",
      impact: "High",
      icon: <Award className="h-4 w-4" />,
    },
    {
      title: "Quantified Achievements",
      description: "Good use of metrics and numbers to demonstrate impact",
      impact: "High",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "Relevant Education",
      description: "Computer Science degree aligns well with career path",
      impact: "Medium",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      title: "Modern Tech Stack",
      description: "Experience with current technologies like React, Node.js",
      impact: "High",
      icon: <Zap className="h-4 w-4" />,
    },
  ]

  const improvements = [
    {
      title: "Add Leadership Experience",
      description: "Include examples of leading projects or mentoring team members",
      priority: "High",
      impact: "+8 points",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Industry Certifications",
      description: "Consider AWS, Google Cloud, or other relevant certifications",
      priority: "Medium",
      impact: "+5 points",
      icon: <Award className="h-4 w-4" />,
    },
    {
      title: "Open Source Contributions",
      description: "Showcase GitHub projects and community involvement",
      priority: "Medium",
      impact: "+4 points",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Professional Summary Enhancement",
      description: "Strengthen your professional summary with more impact",
      priority: "Low",
      impact: "+3 points",
      icon: <Target className="h-4 w-4" />,
    },
  ]

  const marketComparison = [
    { role: "Software Engineer", percentile: 78, salary: "$85k - $105k" },
    { role: "Senior Software Engineer", percentile: 65, salary: "$95k - $130k" },
    { role: "Full Stack Developer", percentile: 82, salary: "$80k - $110k" },
    { role: "Technical Lead", percentile: 45, salary: "$110k - $150k" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-3 w-3 text-green-500" />
      case "down":
        return <ArrowDown className="h-3 w-3 text-red-500" />
      default:
        return <Minus className="h-3 w-3 text-gray-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Worth Analyzer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive analysis of your resume&#39;s market value and potential
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleAnalyze} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Re-analyze
              </>
            )}
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600">
            <Upload className="h-4 w-4 mr-2" />
            Upload New Resume
          </Button>
        </div>
      </div>

      {/* Overall Score Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(overallScore / 100) * 314} 314`}
                    className="text-purple-500 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{overallScore}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">/ 100</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Overall Resume Score</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Above average performance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                Market Value
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">${marketValue.toLocaleString()}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated annual salary</p>
              <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                <ArrowUp className="h-3 w-3" />
                <span>+12% from last analysis</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">Percentile</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{industryPercentile}th</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Industry percentile</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">Better than 85% of candidates</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <Tabs defaultValue="breakdown" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="breakdown">Score Breakdown</TabsTrigger>
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="improvements">Improvements</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="breakdown" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Category Scores</CardTitle>
              <CardDescription>Detailed breakdown of your resume performance across key areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryScores.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(category.trend)}
                        <span className="text-sm font-medium">{category.score}/100</span>
                        <Badge variant="outline" className="text-xs">
                          {category.change}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={category.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Resume Strengths</CardTitle>
              <CardDescription>Key areas where your resume excels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg text-green-600 dark:text-green-300">
                        {strength.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-green-800 dark:text-green-300">{strength.title}</h4>
                          <Badge
                            className={`text-xs ${
                              strength.impact === "High"
                                ? "bg-green-600 text-white"
                                : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300"
                            }`}
                          >
                            {strength.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvements" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Improvement Opportunities</CardTitle>
              <CardDescription>Actionable recommendations to boost your resume score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {improvements.map((improvement, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                        {improvement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{improvement.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getPriorityColor(improvement.priority)}`}>
                              {improvement.priority}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {improvement.impact}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{improvement.description}</p>
                        <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                          Get Guidance
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Position Analysis</CardTitle>
              <CardDescription>How your resume compares across different roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketComparison.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{role.role}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Salary: {role.salary}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {role.percentile}th percentile
                        </div>
                        <div className="w-24">
                          <Progress value={role.percentile} className="h-2" />
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={role.percentile >= 70 ? "default" : "outline"}
                        className={role.percentile >= 70 ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {role.percentile >= 70 ? "Strong Match" : "Improve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Salary Potential</CardTitle>
              <CardDescription>Projected earnings based on improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Current</div>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">$92.5k</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">With Improvements</div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">$108k</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-lg font-semibold text-green-800 dark:text-green-300">Potential Gain</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">+$15.5k</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="bg-purple-500 hover:bg-purple-600">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          View Detailed Analysis
        </Button>
        <Button variant="outline">
          <Clock className="h-4 w-4 mr-2" />
          Schedule Review
        </Button>
      </div>
    </div>
  )
}
