"use client"

import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"

export default function SignInPage() {
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
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">
                <span className="text-gray-800 dark:text-gray-200">CV</span>
                <span className="gradient-text">Worth</span>
              </span>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </div>
        </div>
      </div>
      {/* Right side - Image/Info */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-400 to-violet-600 object-cover">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <div className="max-w-md text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg mb-8">
                Sign in to access your dashboard and unlock your resume insights.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Why CVWorth?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span>✔️ Secure & private</span>
                  </li>
                  <li className="flex items-start">
                    <span>✔️ Fast, AI-powered analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span>✔️ Personalized career growth tips</span>
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