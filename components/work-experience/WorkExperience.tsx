'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

interface Company {
  id: number
  name: string
  logoPath: string
  alt: string
}

export default function WorkExperience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const companies: Company[] = [
    {
      id: 1,
      name: 'Apture',
      logoPath: '/work/apture.png',
      alt: 'Apture logo',
    },
    {
      id: 2,
      name: 'Funkash Family Holdings',
      logoPath: '/work/funkash.png',
      alt: 'Funkash Family Holdings logo',
    },
    {
      id: 3,
      name: 'MyPath2Tech',
      logoPath: '/work/mypath2tech.svg',
      alt: 'MyPath2Tech logo',
    },
    // Add more companies as you get their logos
    {
      id: 4,
      name: 'Pivot Integrated Technologies',
      logoPath: '/work/pivot.png',
      alt: 'Pivot Integrated Technologies logo',
    },
  ]

  return (
    <section id="work" ref={sectionRef} className="min-h-screen bg-white py-32 px-6 lg:px-12">
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
            Work Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-8 leading-tight">
              I&apos;ve had the privilege of collaborating with outstanding brands
            </h2>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center font-body text-lg text-dark hover:text-gray-700 underline transition-colors relative group"
              >
                Let&apos;s work together 
                {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> */}
              </a>
            </div>
          </motion.div>

          {/* Right Section - Company Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 lg:gap-8"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center aspect-square p-4"
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                  <Image
                    src={company.logoPath}
                    alt={company.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

