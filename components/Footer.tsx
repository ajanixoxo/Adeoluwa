'use client'

import { motion } from 'motion/react'
import { FaXTwitter, FaGithub, FaEnvelope, FaTiktok, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      href: 'https://x.com/dexcoded01',
    },
    {
     name:"Whatsapp",
     icon: FaEnvelope,
     href: 'https://wa.me/2349130300630',
    },
    {
      name: 'Tiktok',
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@certifiedtechbrvh',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ajanixoxo',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/adeoluwa-gberno-4b755525a/',
    }, 
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:joelayomide35@gmail.com',
    },
  ]

  return (
    <footer className="bg-white py-12 px-6 lg:px-12 border-t border-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm text-dark/60"
          >
            Copyright © {currentYear} Adeoluwa Gberno.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-dark/60 hover:text-dark transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

