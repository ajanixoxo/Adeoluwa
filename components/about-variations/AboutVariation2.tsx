'use client'

'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutVariation2() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const aboutContent = [
    {
      title: 'Who I Am',
      text: 'I\'m a passionate Full Stack Developer with a love for creating digital solutions that make a difference.',
    },
    {
      title: 'My Journey',
      text: 'My journey into tech began with curiosity about how websites work, which led me to explore various programming languages and frameworks.',
    },
    {
      title: 'My Skills',
      text: 'Through self-study and practical projects, I\'ve developed a strong foundation in both frontend and backend development, specializing in the MERN stack.',
    },
    {
      title: 'Beyond Code',
      text: 'When I\'m not coding, you\'ll find me playing video games, creating music on my piano, or exploring new technologies.',
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

        {/* Content Grid */}
        <div className="space-y-16">
          {aboutContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-l-4 border-accent pl-8"
            >
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                {item.title}
              </h3>
              <p className="font-body text-lg md:text-xl text-dark/70 leading-relaxed max-w-3xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

