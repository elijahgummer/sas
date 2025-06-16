"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { NotificationBell } from "./notification-bell";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span className="text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors">
              CV
            </span>
            <span className="gradient-text">Worth</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <NotificationBell />
          <button
            className="z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="#features"
            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="flex flex-col gap-4 mt-8 w-64">
            <Button
              variant="outline"
              className="w-full border-purple-500 text-purple-600 dark:text-purple-400 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              asChild
            >
              <Link href="/sign-in">Log in</Link>
            </Button>
            <Button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
              asChild
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Pricing
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <NotificationBell />
          <Button
            variant="ghost"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
            asChild
          >
            <Link href="/sign-in">
              <LogIn className="mr-2 h-4 w-4" />
              Log in
            </Link>
          </Button>
          <Button
            className="bg-purple-500 hover:bg-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href="/sign-up">Sign up free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
