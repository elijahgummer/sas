"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ArrowRight, Award, LightbulbIcon, Zap } from "lucide-react"

export function SkillsAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      category: "Technical Skills",
      question: "Which programming languages are you proficient in?",
      options: ["JavaScript", "Python", "Java", "C++", "Other"],
      multiSelect: true,
    },
    {
      category: "Soft Skills",
      question: "How would you rate your communication skills?",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"],
      multiSelect: false,
    },
    {
      category: "Technical Skills",
      question: "What is your experience level with cloud platforms?",
      options: ["No experience", "Basic understanding", "Intermediate user", "Advanced user"],
      multiSelect: false,
    },
  ]

  const handleAnswer = (option) => {
    if (questions[currentQuestion].multiSelect) {
      // For multi-select questions
      const newAnswers = [...answers]
      if (!newAnswers[currentQuestion]) {
        newAnswers[currentQuestion] = []
      }

      if (newAnswers[currentQuestion].includes(option)) {
        newAnswers[currentQuestion] = newAnswers[currentQuestion].filter((item) => item !== option)
      } else {
        newAnswers[currentQuestion] = [...newAnswers[currentQuestion], option]
      }

      setAnswers(newAnswers)
    } else {
      // For single-select questions
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = option
      setAnswers(newAnswers)

      // Auto-advance to next question after selection
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1)
        }, 500)
      }
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const isOptionSelected = (option) => {
    if (!answers[currentQuestion]) return false

    if (Array.isArray(answers[currentQuestion])) {
      return answers[currentQuestion].includes(option)
    } else {
      return answers[currentQuestion] === option
    }
  }

  const calculateProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100
  }

  return (
    <Card className="w-full border-purple-200 shadow-md">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <Award className="h-5 w-5 text-purple-500" />
          Skills Assessment
        </CardTitle>
        <CardDescription>Evaluate your skills to get personalized resume recommendations</CardDescription>
      </CardHeader>

      {!showResults ? (
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-purple-700 font-medium">{questions[currentQuestion].category}</span>
              <span className="text-gray-500">
                Question {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <Progress value={calculateProgress()} className="h-2 bg-purple-100" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">{questions[currentQuestion].question}</h3>

            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                    isOptionSelected(option)
                      ? "border-purple-400 bg-purple-50 text-purple-800"
                      : "border-gray-200 hover:border-purple-200 hover:bg-purple-50/50"
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isOptionSelected(option) && <CheckCircle2 className="h-5 w-5 text-purple-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "View Results"
              )}
            </Button>
          </div>
        </CardContent>
      ) : (
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
              <LightbulbIcon className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Assessment Complete!</h3>
            <p className="text-gray-600 mt-1">Here's your personalized skill analysis</p>
          </div>

          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="summary">Skills Summary</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Zap className="h-4 w-4 text-purple-500 mr-1" />
                  Technical Skills
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Programming</span>
                      <span className="text-purple-700 font-medium">Advanced</span>
                    </div>
                    <Progress value={80} className="h-2 bg-purple-100" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Cloud Platforms</span>
                      <span className="text-purple-700 font-medium">Intermediate</span>
                    </div>
                    <Progress value={60} className="h-2 bg-purple-100" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Zap className="h-4 w-4 text-purple-500 mr-1" />
                  Soft Skills
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Communication</span>
                      <span className="text-purple-700 font-medium">Advanced</span>
                    </div>
                    <Progress value={75} className="h-2 bg-purple-100" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-medium text-gray-900 mb-1">Highlight Your Programming Skills</h4>
                  <p className="text-sm text-gray-600">
                    Your technical skills are a strong asset. Make sure to showcase specific projects and
                    accomplishments with JavaScript and Python in your resume.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-medium text-gray-900 mb-1">Develop Cloud Expertise</h4>
                  <p className="text-sm text-gray-600">
                    Consider obtaining a cloud certification to strengthen your resume and increase your marketability
                    in tech roles.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-medium text-gray-900 mb-1">Communication Skills</h4>
                  <p className="text-sm text-gray-600">
                    Emphasize your advanced communication skills by including specific examples of presentations,
                    reports, or team collaborations.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}

      <CardFooter className="bg-gray-50 border-t border-purple-100 p-4 flex justify-between">
        {!showResults ? (
          <div className="text-xs text-gray-500">Your data is used to provide personalized recommendations</div>
        ) : (
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Add Skills To Resume</Button>
        )}
      </CardFooter>
    </Card>
  )
}

