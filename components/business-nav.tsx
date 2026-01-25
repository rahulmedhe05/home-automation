"use client";

import { useState } from "react";
import Link from "next/link";
import { BusinessConfig } from "@/lib/business-config";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradientClass = currentBusiness?.colors.gradient || "from-blue-600 to-blue-800";

  return (
    <header className={cn("bg-gradient-to-r text-white sticky top-0 z-50 shadow-lg", gradientClass)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            {currentBusiness ? (
              <span className="flex items-center gap-2">
                <span>{currentBusiness.icon}</span>
                <span className="hidden sm:inline">{currentBusiness.name}</span>
              </span>
            ) : (
              "Smart Home Vadodara"
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Home
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+916353583148"
              className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="py-2 hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="py-2 hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="py-2 hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="border-t border-white/20 pt-4">
              <a
                href="tel:+916353583148"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 63535 83148
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
