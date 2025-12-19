'use client'

import Navbar from '../Navbar'

export default function HeroVariation3() {
  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
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
          <h2 className="text-[#e6dede] font-body text-2xl mb-6">
            Hello👋! I&apos;m Adeoluwa
          </h2>

          {/* Large Typography Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-8 leading-[1.05]">
            <span className="block  font-normal">A Full Stack Developer</span>
           
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting thoughtful digital solutions that deliver real value
            through clean code and intentional design.
          </p>

<div className="flex items-center justify-center gap-4"> 
   <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-4 bg-white text-dark font-body text-base font-medium rounded-sm hover:bg-primary transition-colors"
          >
            View My Work
            <span className="text-xl">⚒️</span>
          </a>
          <a
            href="#projects"
            className="inline-flex animate-pulse items-center gap-2 px-8 py-4 bg-transparent text-white border border-white font-body text-base font-medium rounded-sm hover:bg-primary transition-colors"
          >
          Hire Me <span className="bg-red-400 w-2 h-2 rounded-full"></span>
        
          </a>
          </div>
          {/* CTA */}
        
        </div>
      </section>
    </div>
  )
}






