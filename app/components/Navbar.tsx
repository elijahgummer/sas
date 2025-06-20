"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogIn } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { NotificationBell } from "./notification-bell"
import { UserButton } from "@clerk/nextjs"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock background scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Helper to close menu and reset scroll lock
  const closeMenu = React.useCallback(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center w-full relative h-20 px-4">
          {/* Logo */}
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
              <span className="text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors">CV</span>
              <span className="gradient-text">Worth</span>
            </span>
          </Link>

          {/* Centered nav links */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#how-it-works" className="nav-link">How It Works</Link>
            <Link href="#testimonials" className="nav-link">Testimonials</Link>
            <Link href="#pricing" className="nav-link">Pricing</Link>
          </nav>

          {/* Actions and UserButton */}
          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <NotificationBell />
            <Button variant="ghost" asChild>
              <Link href="/sign-in">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </Link>
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white" asChild>
              <Link href="/sign-up">Sign up free</Link>
            </Button>
            <div className="ml-6">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center h-20 px-4 justify-between">
          {/* Logo */}
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
              <span className="text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors">CV</span>
              <span className="gradient-text">Worth</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NotificationBell />
            <button
              className="z-50"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay OUTSIDE header */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close menu"
          />
          {/* Full-width Menu panel */}
          <nav className="relative w-full bg-white dark:bg-gray-900 shadow-lg h-full flex flex-col items-center justify-center p-8 gap-6 animate-slide-in">
            <button
              className="absolute top-4 right-4"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
            <Link href="/" className="flex items-center gap-2 mb-8" onClick={closeMenu}>
              <Image src="/logo.png" alt="CVWorth Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">
                <span className="text-gray-800 dark:text-gray-200">CV</span>
                <span className="gradient-text">Worth</span>
              </span>
            </Link>
            <div className="flex flex-col items-center gap-6 w-full">
              <Link href="#features" className="nav-link-mobile text-center w-full" onClick={closeMenu}>Features</Link>
              <Link href="#how-it-works" className="nav-link-mobile text-center w-full" onClick={closeMenu}>How It Works</Link>
              <Link href="#testimonials" className="nav-link-mobile text-center w-full" onClick={closeMenu}>Testimonials</Link>
              <Link href="#pricing" className="nav-link-mobile text-center w-full" onClick={closeMenu}>Pricing</Link>
            </div>
            <div className="flex flex-col items-center gap-4 mt-8 w-full">
              <Button variant="outline" asChild className="w-full text-center">
                <Link href="/sign-in" onClick={closeMenu}>Log in</Link>
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full text-center" asChild>
                <Link href="/sign-up" onClick={closeMenu}>Sign up</Link>
              </Button>
              <div className="flex justify-center w-full">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}