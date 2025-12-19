'use client'

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
// import {GlassCard} from  "@developer-hub/liquid-glass"
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4">
      {/* <GlassCard> */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 liquid-glass rounded-3xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-white text-4xl font-bold font-brand">
            ADE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 font-body text-sm font-medium hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* </GlassCard> */}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white font-body text-base font-medium hover:text-white/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

