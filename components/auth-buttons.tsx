"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

export function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="text-gray-700 hover:text-blue-500 hover:bg-blue-50/50" asChild>
        <Link href="/sign-in">
          <LogIn className="mr-2 h-4 w-4" />
          Log in
        </Link>
      </Button>
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
        asChild
      >
        <Link href="/sign-up">Sign up free</Link>
      </Button>
    </div>
  )
}

