import type React from "react"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server" // <-- FIXED IMPORT
import Image from "next/image"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth() // <-- await because it's async

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <Image
            src="/logo.png"
            alt="CVWorth Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className="text-2xl font-bold">
            <span className="text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors">
              CV
            </span>
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