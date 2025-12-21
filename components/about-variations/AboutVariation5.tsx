'use client'

'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutVariation5() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'Started my journey into web development with HTML, CSS, and JavaScript.',
    },
    {
      year: '2024',
      title: 'Full Stack Learning',
      description: 'Dived deep into React, Node.js, and MongoDB, building my first full-stack applications.',
    },
    {
      year: '2025',
      title: 'Professional Growth',
      description: 'Working on real-world projects, contributing to open source, and continuously learning new technologies.',
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-6xl font-bold text-dark mb-20 text-center"
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <p className="font-body text-xl md:text-2xl text-dark/70 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with a love for creating digital solutions that make a difference.
          </p>
          <p className="font-body text-lg text-dark/60 leading-relaxed">
            My journey into tech began with curiosity about how websites work, which led me to explore various programming languages and frameworks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} ml-16 md:ml-0`}>
                  <div className="font-heading text-2xl font-bold text-accent mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-base text-dark/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

