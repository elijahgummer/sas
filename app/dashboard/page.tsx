import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Upload, BarChart3, Settings, ArrowRight } from "lucide-react"
import { auth } from "@clerk/nextjs/server"

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to your Dashboard!</h1>
        <p className="text-gray-600 mt-1">Here{"'"}s an overview of your resume performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Resume Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78/100</div>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last update</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">ATS Compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-sm text-green-600 mt-1">↑ 8% from last update</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estimated Salary Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$85k - $105k</div>
            <p className="text-sm text-gray-600 mt-1">Based on your experience</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Resume Analysis</CardTitle>
            <CardDescription>Your latest resume analysis results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Overall Score</span>
                  <span className="font-medium text-gray-900">78/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium text-gray-900">85/100</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Skills</span>
                    <span className="font-medium text-gray-900">72/100</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Education</span>
                    <span className="font-medium text-gray-900">90/100</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Format</span>
                    <span className="font-medium text-gray-900">65/100</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                View Full Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Button className="justify-start h-auto py-4 px-4" variant="outline">
                <div className="mr-3 p-2 bg-blue-100 rounded-lg">
                  <Upload className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Upload New Resume</div>
                  <div className="text-sm text-gray-500">Add a new resume for analysis</div>
                </div>
              </Button>

              <Button className="justify-start h-auto py-4 px-4" variant="outline">
                <div className="mr-3 p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Compare with Job Description</div>
                  <div className="text-sm text-gray-500">See how well your resume matches a job</div>
                </div>
              </Button>

              <Button className="justify-start h-auto py-4 px-4" variant="outline">
                <div className="mr-3 p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <div className="font-medium">View Salary Insights</div>
                  <div className="text-sm text-gray-500">Get detailed salary information</div>
                </div>
              </Button>

              <Button className="justify-start h-auto py-4 px-4" variant="outline">
                <div className="mr-3 p-2 bg-blue-100 rounded-lg">
                  <Settings className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Account Settings</div>
                  <div className="text-sm text-gray-500">Manage your account preferences</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

