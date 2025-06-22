import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Edit3, CheckCircle, Sparkles, Zap } from "lucide-react"

// AI Rewriter Content
export default function AIRewriterContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Resume Rewriter</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Improve your resume sections with AI</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Resume Sections</CardTitle>
            <CardDescription>Click &quot;Improve&quot; to enhance any section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Professional Summary</h4>
                <Button size="sm" variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Improve
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Experienced software developer with 5 years of experience in web development...
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Work Experience</h4>
                <Button size="sm" variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Improve
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                • Developed web applications using React and Node.js • Worked with team members on various projects...
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Skills</h4>
                <Button size="sm" variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Improve
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                JavaScript, React, Node.js, Python, SQL, Git...
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>Recent improvements and recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800 dark:text-green-300">Improved</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">Professional Summary</p>
              <p className="text-xs text-green-600 dark:text-green-400">
                Added quantifiable achievements and stronger action verbs
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-800 dark:text-blue-300">Suggestion</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Work Experience</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Consider adding metrics and specific technologies used in each role
              </p>
              <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                Apply Suggestion
              </Button>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-purple-600" />
                <span className="font-medium text-purple-800 dark:text-purple-300">AI Tip</span>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Use the STAR method (Situation, Task, Action, Result) for better impact in your experience bullets.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}