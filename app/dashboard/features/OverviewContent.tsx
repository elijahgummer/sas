import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Progress } from "../../components/ui/progress"
import { BarChart3, CheckCircle, Target, TrendingUp, Plus, PenTool, Mail } from "lucide-react"

export default function OverviewContent({ onShowUpload }: { onShowUpload?: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Here&apos;s your resume performance overview</p>
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600" onClick={onShowUpload}>
          <Plus className="h-4 w-4 mr-2" />
          Upload New Resume
        </Button>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Resume Score</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">85/100</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">ATS Compatibility</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">92%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">Excellent compatibility</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Keywords Matched</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">18/25</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                <Target className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">7 keywords missing</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Career Match</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">78%</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">Good fit for target roles</p>
          </CardContent>
        </Card>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <Target className="h-5 w-5 mr-3 text-purple-500" />
              <div className="text-left">
                <div className="font-medium">Analyze Keywords</div>
                <div className="text-sm text-gray-500">Check ATS compatibility</div>
              </div>
            </Button>
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <PenTool className="h-5 w-5 mr-3 text-purple-500" />
              <div className="text-left">
                <div className="font-medium">Improve Sections</div>
                <div className="text-sm text-gray-500">AI-powered rewriting</div>
              </div>
            </Button>
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <Mail className="h-5 w-5 mr-3 text-purple-500" />
              <div className="text-left">
                <div className="font-medium">Generate Cover Letter</div>
                <div className="text-sm text-gray-500">Tailored to job description</div>
              </div>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest resume improvements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Resume score improved</p>
                <p className="text-xs text-gray-500">+12 points • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <PenTool className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Experience section rewritten</p>
                <p className="text-xs text-gray-500">AI suggestions applied • 1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Cover letter generated</p>
                <p className="text-xs text-gray-500">For Software Engineer role • 2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}