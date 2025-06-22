"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  BarChart3,
  Target,
  PenTool,
  Mail,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Plus,
  Download,
  Edit3,
  Zap,
  Award,
} from "lucide-react"
import { ResumeAnalyzerApp } from "../components/resume-analyzer-app"

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







// Career Fit Content
function CareerFitContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Fit Analysis</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Discover roles that match your profile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Career Paths</CardTitle>
              <CardDescription>Based on your skills and experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Senior Software Engineer</h4>
                  <Badge className="bg-green-600 text-white">92% Match</Badge>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Perfect fit based on your 5+ years experience and technical skills
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">Salary Range: </span>
                    <span className="text-green-700 dark:text-green-300">$95k - $130k</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Full Stack Developer</h4>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    87% Match
                  </Badge>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Strong match with your React and Node.js experience
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">Salary Range: </span>
                    <span className="text-blue-700 dark:text-blue-300">$80k - $110k</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-300 text-blue-600">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">Technical Lead</h4>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    78% Match
                  </Badge>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Consider developing leadership skills for this growth path
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">Salary Range: </span>
                    <span className="text-purple-700 dark:text-purple-300">$110k - $150k</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-purple-300 text-purple-600">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">High Growth Potential</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Software engineering roles are projected to grow 22% over the next decade
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Skill Alignment</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your current skills align well with market demands in web development
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Profile Strength</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Technical Skills</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Experience Level</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Education</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Certifications</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Industry Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium mb-1">Hot Skills</div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Docker
                  </Badge>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium mb-1">Emerging Technologies</div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Blockchain
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WebAssembly
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Skill Gap Content
function SkillGapContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Skill Gap Analysis</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Identify and close skill gaps for your target roles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Missing Skills for Target Roles</CardTitle>
              <CardDescription>Skills you should develop to improve your competitiveness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-red-800 dark:text-red-300">Critical Skills Gap</h4>
                  <Badge variant="destructive">High Priority</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TypeScript</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Required by 78% of jobs
                      </Badge>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Learn Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Docker</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Required by 65% of jobs
                      </Badge>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Learn Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Moderate Skills Gap</h4>
                  <Badge className="bg-yellow-600 text-white">Medium Priority</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AWS Certification</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Preferred by 45% of jobs
                      </Badge>
                      <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-600">
                        Learn Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">GraphQL</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Preferred by 32% of jobs
                      </Badge>
                      <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-600">
                        Learn Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Nice to Have</h4>
                  <Badge className="bg-blue-600 text-white">Low Priority</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Kubernetes</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Mentioned in 28% of jobs
                      </Badge>
                      <Button size="sm" variant="outline" className="border-blue-300 text-blue-600">
                        Learn Later
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Recommended courses and materials</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="free" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="free">Free Resources</TabsTrigger>
                  <TabsTrigger value="paid">Paid Courses</TabsTrigger>
                </TabsList>
                <TabsContent value="free" className="space-y-3 mt-4">
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">TypeScript Handbook</h4>
                      <p className="text-xs text-gray-500">Official TypeScript documentation</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Docker Tutorial - YouTube</h4>
                      <p className="text-xs text-gray-500">Comprehensive Docker course</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="paid" className="space-y-3 mt-4">
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">AWS Solutions Architect</h4>
                      <p className="text-xs text-gray-500">Coursera • $49/month</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Complete TypeScript Course</h4>
                      <p className="text-xs text-gray-500">Udemy • $89.99</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>TypeScript</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Started 3 days ago</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Docker</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Not started</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skill Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium mb-1">Salary Increase Potential</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">+$15k</div>
                <p className="text-xs text-gray-500">With TypeScript + Docker skills</p>
              </div>
              <div className="text-sm">
                <div className="font-medium mb-1">Job Match Improvement</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+23%</div>
                <p className="text-xs text-gray-500">Expected match score increase</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Week 1-2: TypeScript Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Week 3-4: Docker Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Week 5-6: AWS Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Week 7-8: Practice Projects</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
