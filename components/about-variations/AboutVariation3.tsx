'use client'

'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutVariation3() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const techStack = [
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'PHP', 'MySQL', 'PostgreSQL', 'Next.js', 'TypeScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git'
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-6xl font-bold text-dark mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Main Content - Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating digital solutions that make a difference.
            </p>
            <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed">
              My journey into tech began with curiosity about how websites work, which led me to explore various programming languages and frameworks.
            </p>
            <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed">
              Through self-study and practical projects, I've developed a strong foundation in both frontend and backend development.
            </p>
            <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed">
              When I'm not coding, you'll find me playing video games, creating music on my piano, or exploring new technologies.
            </p>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-3xl font-bold text-dark mb-6">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-accent/20 text-dark rounded-sm font-body text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

