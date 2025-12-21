'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
// import {GlassCard} from  "@developer-hub/liquid-glass"
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4">
      {/* <GlassCard> */}
      <div 
        className={`max-w-3xl mx-auto px-6 lg:px-12 border rounded-3xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-dark/20 shadow-sm' 
            : 'border-white/30'
        }`}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-dark text-4xl font-bold font-brand">
           ADÉ 
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark/70 font-body text-sm font-medium hover:text-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* </GlassCard> */}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-dark/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-dark font-body text-base font-medium hover:text-dark/70 transition-colors"
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

