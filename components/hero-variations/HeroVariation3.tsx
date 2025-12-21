'use client'

import { motion } from 'motion/react'
import { HiBriefcase } from 'react-icons/hi'
import Navbar from '../Navbar'
import { TextAnimate } from '@/components/ui/text-animate'
import RippleButton from '@/components/ui/RippleButton'
import Magnet from '../Magnet'

export default function HeroVariation3() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'linear-gradient(#C0B6B6 1px, transparent 1px), linear-gradient(90deg, #C0B6B6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Centered */}
      <section className="relative z-10 pt-32 pb-32 px-6 lg:px-12 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Greeting */}
          <TextAnimate
            as="h2"
            className="text-[#4e4b4b] font-body text-2xl mb-6"
            animation="blurInUp"
            by="word"
            delay={0.2}
          >
            Hello👋! I&apos;m Adeoluwa
          </TextAnimate>

          {/* Large Typography Headline */}
          <TextAnimate
            as="h1"
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-dark mb-8 leading-[1.05]"
            animation="blurInUp"
            by="word"
            delay={0.4}
          >
            A Full Stack Developer
          </TextAnimate>

          {/* Subtitle */}
          <TextAnimate
            as="p"
            className="font-body text-lg md:text-xl text-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            animation="fadeIn"
            by="word"
            delay={0.6}
          >
            Crafting thoughtful digital solutions that deliver real value
            through clean code and intentional design.
          </TextAnimate>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <RippleButton
              href="#projects"
              variant="primary"
              className="inline-flex px-5 py-4"
            >
              View My Work
              <HiBriefcase className="text-xl" />
            </RippleButton>
            <Magnet disabled={false} padding={120} magnetStrength={2}>
               <RippleButton
              href="#projects"
              variant="secondary"
              className="inline-flex px-8 py-4"
            >
              Hire Me <span className="bg-red-400 w-2 h-2 rounded-full animate-pulse"></span>
            </RippleButton></Magnet>
            
          </motion.div>
          {/* CTA */}
        
        </div>
      </section>
    </div>
  )
}






