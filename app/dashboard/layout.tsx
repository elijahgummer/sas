import type React from "react";
import Link from "next/link";
import { ThemeToggle } from "../components/theme-toggle";
import { NotificationBell } from "../components/notification-bell";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
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
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0"
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

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <NotificationBell />
            {/* <UserButton afterSignOutUrl="/" /> */}
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                JD
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
