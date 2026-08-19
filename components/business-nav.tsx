"use client";

import { useState } from "react";
import Link from "next/link";
import { BusinessConfig } from "@/lib/business-config";
import { Menu, X, Phone } from "lucide-react";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 text-gray-950 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="VARNI DIGITAL"
              className="h-9 w-auto object-contain sm:h-11"
              style={{ maxWidth: "190px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-lg border border-black/10 bg-gray-50/80 p-1">
            <Link href="/" className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-pink-600 hover:shadow-sm">
              Home
            </Link>
            <Link href="/products" className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-pink-600 hover:shadow-sm">
              Products
            </Link>
            <Link href="/#about" className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-pink-600 hover:shadow-sm">
              About
            </Link>
            <Link href="/#contact" className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-pink-600 hover:shadow-sm">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919978713458"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-600"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg border border-black/10 p-2 text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-white shadow-lg lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/#about"
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <a
                href="tel:+919978713458"
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-3 font-semibold text-white"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 99787 13458
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
