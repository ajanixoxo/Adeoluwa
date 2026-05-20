'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import { BorderBeam } from '@/components/ui/border-beam'
import { HiExternalLink, HiCode } from 'react-icons/hi'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectVariation1() {
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: true, amount: 0.2 })

  const projects: Project[] = [
    // {
    //   id: 2,
    //   title: 'Apture',
    //   description: 'Your Friendly Budget and expense planner',
    //   technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Express.js'],
    //   imageUrl: '/work/apture2.png',
    //   liveUrl: 'https://apture.app/',
    //   githubUrl: '#',
    //   featured: true,
    // },
    {
      id: 3,
      title: 'Residde',
      description: 'Discover properties for rent and sale with secure inspection services.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Express.js'],
      imageUrl: '/work/resside.png',
      liveUrl: 'https://residde-web.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Tee_shotz Website Portfolio',
      description: 'A portfolio website that showcases a photographers works, services and more...',
      technologies: ['React', 'Tailwind CSS', 'Next.js', 'AOS'],
      imageUrl: '/work/tee-shot.png',
      liveUrl: 'https://tee-shotz.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 10,
      title: 'Tourlity',
      description: 'A touring platform for booking tours to specific locations, offering both physical attendance and live-stream options with dedicated host, guest, and user roles.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'GSAP'],
      imageUrl: '/work/tourlity.png',
      liveUrl: 'https://tourlity.com',
      githubUrl: '#',
    },
    {
      id: 11,
      title: 'Eduflex',
      description: 'An AI-based learning platform for any user, designed to personalize learning and provide intelligent guidance across courses and topics.',
      technologies: ['Next.js', 'React', 'AI', 'Tailwind CSS'],
      imageUrl: '/work/placeholder.svg',
      liveUrl: 'https://myeduflex.com/',
      githubUrl: '#',
    },

    {
      id: 7,
      title: '3D Keyboard',
      description: 'A project showcase website that displays products using 3D technology, built with GSAP and Next.js.',
      technologies: ['Next.js', 'GSAP', 'Three.js'],
      imageUrl: '/work/3dkeyboard.png',
      liveUrl: 'https://keyboard-livid-six.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'Rain Fitness',
      description: 'A modern fitness website UI clone featuring personalized workout programs, nutrition coaching, and premium membership plans with a clean, minimalist design.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: '/work/rain-fitness.png',
      liveUrl: 'https://rain-fitness.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 9,
      title: 'KeyClash',
      description: 'A real-time typing battle game where players challenge friends or opponents to see who types faster and more accurately. Features live match chat and global leaderboards.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'WebSockets', 'Real-time'],
      imageUrl: '/work/keyclash.png',
      liveUrl: 'https://key-clash.vercel.app/',
      githubUrl: '#',
    },

  ]

  return (
    <section id="projects" className="min-h-screen bg-white py-32 px-6 lg:px-12">
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
            Projects
          </h2>
          <p className="font-body text-lg text-dark/70 max-w-2xl mx-auto">
            A collection of projects I&apos;ve built, showcasing my skills in full-stack development and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border-2 border-secondary rounded-sm overflow-hidden hover:border-accent transition-all duration-300"
            >
              {/* Project Image */}
              {project.imageUrl ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-48 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💻</div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-2xl font-bold text-dark group-hover:text-[#777575] transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-sm">
                      Featured
                    </span>
                  )}
                </div>

                <p className="font-body text-sm text-dark/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/30 text-dark text-xs font-medium rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-dark/70 hover:text-gray-700 transition-colors font-body text-sm font-medium"
                    >
                      <HiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-dark/70 hover:text-gray-700 transition-colors font-body text-sm font-medium"
                    >
                      <HiCode className="text-lg" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Border Beam Effect */}
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
    </section>
  )
}

