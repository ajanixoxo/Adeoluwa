'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function BlogSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-4">
            Blog
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Section - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-8 leading-tight">
              I share my thoughts occasionally
            </h3>
            <a
              href="#blog"
              className="inline-flex items-center font-body text-lg text-dark hover:text-gray-700 underline transition-colors"
            >
              Read All
            </a>
          </motion.div>

          {/* Right Section - No Blog Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center min-h-[400px]"
          >
            <div className="text-center">
              <p className="font-body text-xl text-dark/60">
                No blog posts for now
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

