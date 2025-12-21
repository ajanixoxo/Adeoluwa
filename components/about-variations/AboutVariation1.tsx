'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import ScrollReveal from '../ScrollReveal'

export default function AboutVariation1() {
  const interestsRef = useRef(null)
  const isInView = useInView(interestsRef, { once: true, amount: 0.2 })

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
    <section className="min-h-screen bg-white py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-20 text-center">
          About Me
        </h2>

        {/* Scroll-Revealed Content */}
        <div className="space-y-8 mb-32">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            I&apos;m a passionate Full Stack Developer with a love for creating digital solutions that make a difference.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            My journey into tech began with curiosity about how websites work, which led me to explore various programming languages and frameworks.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            Through self-study and practical projects, I&apos;ve developed a strong foundation in both frontend and backend development, specializing in the MERN stack.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            When I&apos;m not coding, you&apos;ll find me playing video games, creating music on my piano, or exploring new technologies.
          </ScrollReveal>
        </div>

        {/* Interests Grid */}
        <div ref={interestsRef} className="max-w-6xl mx-auto">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Interests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 bg-white border-2 border-secondary/30 rounded-sm hover:border-accent transition-colors"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="font-heading text-xl font-bold text-dark mb-2">
                  {interest.title}
                </h4>
                <p className="font-body text-sm text-dark/60">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

