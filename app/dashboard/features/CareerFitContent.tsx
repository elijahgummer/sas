import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui/badge"
import { TrendingUp, Target } from "lucide-react"


// Career Fit Content
export default function CareerFitContent() {
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