'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import ScrollReveal from '../ScrollReveal'
import { BorderBeam } from '@/components/ui/border-beam'

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
      icon: '🎵',
      title: 'Music',
      description: 'Love listening to music and also creating melodies in my free time',
    },
    {
      icon: '💻',
      title: 'Software',
      description: 'Building cool and innovative digital solutions',
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
            My name is AdeOluwa Gberno, and I&apos;m a Full-Stack Developer and Software Engineer with a strong focus on building modern, scalable web applications.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            My journey into tech started during the COVID-19 lockdown. At the time, I spent most of my days gaming, browsing the internet, and watching YouTube. I played games like GTA San Andreas, which often required custom installations, configurations, and troubleshooting. To get things working, I constantly searched for tutorials and followed step-by-step guides on YouTube.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            Over time, I became curious — not just about how things worked, but why. I often wondered how YouTubers understood these technical concepts so deeply. One day, at the end of a video, a YouTuber asked viewers to support his journey to becoming a software engineer. That moment stuck with me.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            I searched for what a software engineer actually does, and I discovered a world of people building websites, applications, and digital products. I was instantly hooked. That curiosity turned into a genuine passion.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            I began learning to code in 2022, starting with HTML on freeCodeCamp. At the time, I didn&apos;t even own a laptop, so progress was slow. The following year, I got one — and that&apos;s when my learning accelerated. I moved from HTML to CSS and JavaScript, and eventually into modern frameworks and tools.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            Over the years, I&apos;ve worked with technologies such as React, Next.js, Tailwind CSS, Bootstrap, Node.js, MongoDB, PostgreSQL, Supabase, and many other libraries and tools in the JavaScript ecosystem.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            I consider myself strongly frontend-focused, with solid experience building responsive, user-friendly interfaces and scalable frontend architectures. My backend skills are practical and growing, allowing me to design APIs, manage databases, and understand full-stack systems end-to-end.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName=""
            textClassName="text-dark font-body"
          >
            Today, I have over three years of hands-on experience building web applications, continuously learning, and exploring new technologies. I&apos;m driven by curiosity, problem-solving, and the desire to build products that actually work well and scale.
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
                className="relative p-6 bg-white border-2 border-secondary rounded-sm transition-colors overflow-hidden"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="font-heading text-xl font-bold text-dark mb-2">
                  {interest.title}
                </h4>
                <p className="font-body text-sm text-dark/60">
                  {interest.description}
                </p>
                <BorderBeam 
                  duration={8} 
                  size={100} 
                  colorFrom="#93A091"
                  colorTo="#93A091"
                  borderWidth={1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

