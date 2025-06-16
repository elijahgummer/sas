import type React from "react"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-500 rounded-md blur-[2px] opacity-20"></div>
              <div className="relative bg-white rounded-md w-full h-full flex items-center justify-center border border-blue-200">
                <span className="text-blue-500 font-bold text-base">CV</span>
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gray-800">CV</span>
              <span className="gradient-text">Worth</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/dashboard" className="text-blue-500 font-medium">
              Dashboard
            </Link>
            <Link href="/dashboard/resumes" className="text-gray-600 hover:text-blue-500 transition-colors">
              My Resumes
            </Link>
            <Link href="/dashboard/analytics" className="text-gray-600 hover:text-blue-500 transition-colors">
              Analytics
            </Link>
            <Link href="/dashboard/settings" className="text-gray-600 hover:text-blue-500 transition-colors">
              Settings
            </Link>
          </nav>

          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
