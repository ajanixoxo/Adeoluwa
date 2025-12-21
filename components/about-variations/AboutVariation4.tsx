'use client'

'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutVariation4() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const interests = [
    {
      icon: '🎮',
      title: 'Gaming',
      description: 'Exploring virtual worlds and strategic challenges',
    },
    {
      icon: '🎹',
      title: 'Piano',
      description: 'Creating melodies in my free time',
    },
    {
      icon: '💻',
      title: 'Software',
      description: 'Building innovative digital solutions',
    },
    {
      icon: '💰',
      title: 'Finance',
      description: 'Growing wealth through smart investments',
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-6xl font-bold text-dark mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="font-body text-xl md:text-2xl text-dark/70 leading-relaxed text-center mb-6">
            I'm a passionate Full Stack Developer with a love for creating digital solutions that make a difference.
          </p>
          <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed text-center">
            My journey into tech began with curiosity about how websites work, which led me to explore various programming languages and frameworks. Through self-study and practical projects, I've developed a strong foundation in both frontend and backend development.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 bg-white border-2 border-secondary/30 rounded-sm hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                {interest.title}
              </h3>
              <p className="font-body text-sm text-dark/60">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

