import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "../components/theme-toggle"
import { NotificationBell } from "../components/notification-bell"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Remove auth check for now since we don't have Clerk setup
  // const { userId } = auth()
  // if (!userId) {
  //   redirect("/sign-in")
  // }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-purple-500 rounded-md blur-[2px] opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-md w-full h-full flex items-center justify-center border border-purple-200 dark:border-purple-800">
                <span className="text-purple-500 font-bold text-base">CV</span>
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gray-800 dark:text-gray-200">CV</span>
              <span className="gradient-text">Worth</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <NotificationBell />
            {/* <UserButton afterSignOutUrl="/" /> */}
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  )
}
