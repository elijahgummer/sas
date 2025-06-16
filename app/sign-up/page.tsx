"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { Separator } from "../components/ui/separator"
import { ArrowLeft, Github, Mail, Check } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"
import { useTheme } from "next-themes"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Left side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="flex items-center text-purple-500 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
          </div>

          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-purple-500 rounded-md blur-[2px] opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-md w-full h-full flex items-center justify-center border border-purple-200 dark:border-purple-700">
                  <span className="text-purple-500 font-bold text-base">CV</span>
                </div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-gray-800 dark:text-gray-200">CV</span>
                <span className="gradient-text">Worth</span>
              </span>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSignUp} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-gray-900 dark:text-gray-200">
                      First name
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="last-name" className="text-gray-900 dark:text-gray-200">
                      Last name
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 dark:text-gray-200">
                    Email address
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-900 dark:text-gray-200">
                    Password
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    I agree to the{" "}
                    <Link href="#" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-gray-50 dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-400 to-violet-600 object-cover">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <div className="max-w-md text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Start Your Career Transformation</h2>
              <p className="text-lg mb-8">
                Create an account today and discover how our AI-powered platform can help you land your dream job.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">What you&#39;ll get:</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Comprehensive resume analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Personalized improvement suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>ATS optimization for better visibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Industry-specific insights and benchmarks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
