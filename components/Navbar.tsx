'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'motion/react'
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

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Work', href: '#work' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 px-6 lg:px-12">
      {/* <GlassCard> */}
      <div 
        className={`max-w-2xl lg:max-w-3xl mx-auto px-6 lg:px-12 border rounded-3xl transition-all duration-300 ${
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
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className="text-dark/70 font-body text-sm font-medium hover:text-dark transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
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
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="block py-3 px-4 text-dark font-body text-base font-medium hover:bg-primary/20 hover:text-accent rounded-sm transition-all duration-200 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-200 rounded-r-sm"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      {/* </GlassCard> */}

      {/* Mobile Menu */}
     
    </nav>
  )
}

