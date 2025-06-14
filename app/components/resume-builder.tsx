"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { FileText, Plus, Briefcase, GraduationCap, Award, Download, Settings } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("personal")
  const [showFullEditor, setShowFullEditor] = useState(false)

  const sections = [
    { id: "personal", icon: <FileText className="h-4 w-4" />, title: "Personal Info" },
    { id: "experience", icon: <Briefcase className="h-4 w-4" />, title: "Experience" },
    { id: "education", icon: <GraduationCap className="h-4 w-4" />, title: "Education" },
    { id: "skills", icon: <Award className="h-4 w-4" />, title: "Skills" },
  ]

  return (
    <Card className="w-full overflow-hidden border border-purple-200 shadow-md">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100 px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg text-gray-900">Resume Builder</CardTitle>
            <CardDescription>Create and customize your resume</CardDescription>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="text-xs border-purple-300 hover:bg-purple-50"
            onClick={() => setShowFullEditor(!showFullEditor)}
          >
            {showFullEditor ? "Quick View" : "Full Editor"}
            <Settings className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Sidebar */}
          <div className="w-full sm:w-[240px] sm:border-r border-b sm:border-b-0 border-purple-100">
            <nav className="flex sm:flex-col overflow-x-auto sm:overflow-visible">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium w-full text-left ${
                    activeSection === section.id
                      ? "bg-purple-50 text-purple-800 border-b-2 sm:border-b-0 sm:border-l-2 border-purple-500"
                      : "text-gray-600 hover:bg-purple-50/50"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>

            {showFullEditor && (
              <div className="p-4 border-t border-purple-100">
                <Button
                  variant="outline"
                  className="w-full text-sm justify-start text-purple-800 bg-purple-50 border-purple-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            {activeSection === "personal" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label>
                    <Input placeholder="First Name" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Last Name</label>
                    <Input placeholder="Last Name" className="border-purple-200 focus:border-purple-500" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Professional Title</label>
                  <Input
                    placeholder="e.g. Senior Software Engineer"
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>

                {showFullEditor && (
                  <>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Summary</label>
                      <Textarea
                        placeholder="Briefly describe yourself and your qualifications"
                        className="border-purple-200 focus:border-purple-500 min-h-[100px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
                        <Input placeholder="(555) 123-4567" className="border-purple-200 focus:border-purple-500" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeSection === "experience" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-900">Work Experience</h4>
                  {showFullEditor && (
                    <Button size="sm" variant="outline" className="h-8 text-xs">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Experience
                    </Button>
                  )}
                </div>

                <div className="p-3 border border-dashed border-purple-200 rounded-md bg-purple-50/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-gray-900">Company Name</h5>
                      <p className="text-sm text-gray-600">Job Title</p>
                      <p className="text-xs text-gray-500 mt-1">Jan 2020 - Present</p>
                    </div>
                    {showFullEditor && (
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <Settings className="h-3 w-3" />
                      </Button>
                    )}
                  </div>

                  {showFullEditor && (
                    <div className="mt-2 text-sm text-gray-700">
                      <p>• Led development of key product features</p>
                      <p>• Improved performance by 35%</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === "education" && (
              <div className="text-center py-6">
                <GraduationCap className="mx-auto h-8 w-8 text-purple-400 mb-2" />
                <h4 className="text-gray-900 font-medium">Education Section</h4>
                <p className="text-gray-600 text-sm mt-1">Add your education background</p>
              </div>
            )}

            {activeSection === "skills" && (
              <div className="text-center py-6">
                <Award className="mx-auto h-8 w-8 text-purple-400 mb-2" />
                <h4 className="text-gray-900 font-medium">Skills Section</h4>
                <p className="text-gray-600 text-sm mt-1">Add your skills and expertise</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 border-t border-purple-100 p-3 flex justify-between">
        <div className="text-xs text-gray-500">Last saved: 2 mins ago</div>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          <Download className="h-3 w-3 mr-1" />
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  )
}
