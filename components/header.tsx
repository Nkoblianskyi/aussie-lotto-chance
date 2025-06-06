"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-slate-900/95 backdrop-blur-sm border-b border-emerald-500/30 transition-all duration-300 hover:bg-slate-900/98">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <span className="text-3xl">🦘</span>
            <span>Aussie Lotto Chance</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/cookies-policy"
              className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105 relative group"
            >
              Cookies Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-400 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                LOG IN
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-pulse">
                SIGN UP
              </Button>
            </Link>
          </div>
          <p className="hidden md:block text-xs text-gray-400 mt-1 text-right hover:text-gray-300 transition-colors duration-300">
            Join thousands of winners and start your lottery journey today
          </p>

          <button
            className="md:hidden text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-emerald-500/30 animate-fade-in-up">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies-policy"
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
              >
                Cookies Policy
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 px-6 py-2 rounded-full w-full transition-all duration-300 hover:scale-105"
                >
                  LOG IN
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-2 rounded-full w-full transition-all duration-300 hover:scale-105">
                  SIGN UP
                </Button>
              </Link>
              <p className="text-xs text-gray-400 text-center hover:text-gray-300 transition-colors duration-300">
                Join thousands of winners and start your lottery journey today
              </p>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
