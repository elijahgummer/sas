import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui/badge"
import { Target, Plus, Zap, AlertCircle, CheckCircle } from "lucide-react"

// Keyword Analyzer Content
export default function KeywordAnalyzerContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Keyword Match Analyzer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Optimize your resume for ATS systems</p>
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Job Description
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                ATS Compatibility Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">92%</div>
                <p className="text-gray-600 dark:text-gray-400">Excellent ATS compatibility</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Keywords Matched</span>
                    <span className="font-medium">18/25</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Format Score</span>
                    <span className="font-medium">95/100</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Section Structure</span>
                    <span className="font-medium">88/100</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Missing Keywords</CardTitle>
              <CardDescription>Add these keywords to improve your match score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-gray-900 dark:text-white">High Impact</h4>
                  <div className="space-y-2">
                    <Badge variant="destructive" className="w-full justify-center">
                      Machine Learning
                    </Badge>
                    <Badge variant="destructive" className="w-full justify-center">
                      Python
                    </Badge>
                    <Badge variant="destructive" className="w-full justify-center">
                      Data Analysis
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-gray-900 dark:text-white">Medium Impact</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      TensorFlow
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-center">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-center">
                      AWS
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                <Zap className="h-4 w-4 mr-2" />
                Auto-Add Keywords
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Matched Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                >
                  Git
                </Badge>
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                >
                  Agile
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Add technical skills section</p>
                  <p className="text-gray-500">Include programming languages and tools</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Good use of action verbs</p>
                  <p className="text-gray-500">Continue using strong action words</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
