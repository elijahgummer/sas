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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#how-it-works" className="nav-link">How It Works</Link>
          <Link href="#testimonials" className="nav-link">Testimonials</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
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
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="flex items-center gap-2 md:hidden">
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

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
          {/* Menu panel */}
          <nav className="relative ml-auto w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-lg h-full flex flex-col p-8 gap-6 animate-slide-in">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
            <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.png" alt="CVWorth Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">
                <span className="text-gray-800 dark:text-gray-200">CV</span>
                <span className="gradient-text">Worth</span>
              </span>
            </Link>
            <Link href="#features" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#how-it-works" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link href="#testimonials" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            <Link href="#pricing" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <div className="flex flex-col gap-4 mt-8">
              <Button variant="outline" asChild>
                <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>Log in</Link>
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white" asChild>
                <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}