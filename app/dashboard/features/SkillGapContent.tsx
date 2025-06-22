import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"

// Skill Gap Content
export default function SkillGapContent() {
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
