import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Edit3, Download, Mail, Plus } from "lucide-react"

// Cover Letter Content
export default function CoverLetterContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cover Letter Generator</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Create tailored cover letters for your applications</p>
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          New Cover Letter
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Cover Letter</CardTitle>
            <CardDescription>Tailored for Software Engineer at TechCorp</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-medium mb-2">Introduction</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dear Hiring Manager,
                  <br />
                  <br />I am writing to express my strong interest in the Software Engineer position at TechCorp. With
                  my 5 years of experience in full-stack development and proven track record of delivering scalable web
                  applications, I am excited about the opportunity to contribute to your innovative team.
                </p>
                <Button size="sm" variant="ghost" className="mt-2 text-purple-600">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Edit Section
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Body</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  In my current role at ABC Company, I have successfully led the development of multiple React-based
                  applications that serve over 10,000 users daily. My expertise in JavaScript, Node.js, and cloud
                  technologies aligns perfectly with your requirements. I am particularly drawn to TechCorp&apos;s commitment
                  to innovation and would love to contribute to your mission of transforming digital experiences.
                </p>
                <Button size="sm" variant="ghost" className="mt-2 text-purple-600">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Edit Section
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Closing</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I would welcome the opportunity to discuss how my skills and passion for technology can contribute to
                  TechCorp&apos;s continued success. Thank you for considering my application.
                  <br />
                  <br />
                  Sincerely,
                  <br />
                  [Your Name]
                </p>
                <Button size="sm" variant="ghost" className="mt-2 text-purple-600">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Edit Section
                </Button>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button className="bg-purple-500 hover:bg-purple-600">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Email Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-sm font-medium">Company</label>
                <p className="text-sm text-gray-600 dark:text-gray-400">TechCorp</p>
              </div>
              <div>
                <label className="text-sm font-medium">Position</label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
              </div>
              <div>
                <label className="text-sm font-medium">Key Requirements</label>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AWS
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cover Letter Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm">
                Professional & Formal
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                Creative & Personal
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                Technical Focus
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                Career Change
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}