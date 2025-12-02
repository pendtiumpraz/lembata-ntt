"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Econexus Foundation</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition font-medium">
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-600 hover:text-blue-600 transition font-medium py-2">
              Home
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition font-medium py-2">
              Services
            </Link>
            <Link href="/gallery" className="block text-gray-600 hover:text-blue-600 transition font-medium py-2">
              Gallery
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition font-medium py-2">
              About
            </Link>
            <Link href="/contact" className="block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition font-medium text-center">
              Get Involved
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
