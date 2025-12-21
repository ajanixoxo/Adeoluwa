'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
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

export default function ProjectVariation3() {
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: true, amount: 0.2 })

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media performance with detailed insights and reports.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with markdown support.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-12">
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

        {/* Horizontal Scrolling Container */}
        <div ref={projectsRef} className="overflow-x-auto pb-6 -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-[350px] flex-shrink-0 bg-white border-2 border-secondary rounded-sm overflow-hidden hover:border-accent transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-20">💻</div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="px-4 py-2 bg-white text-dark rounded-sm font-body text-sm font-medium hover:bg-accent hover:text-white transition-colors flex items-center gap-2"
                      >
                        <HiExternalLink />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="px-4 py-2 bg-white text-dark rounded-sm font-body text-sm font-medium hover:bg-accent hover:text-white transition-colors flex items-center gap-2"
                      >
                        <HiCode />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-xl font-bold text-dark group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="font-body text-sm text-dark/60 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/30 text-dark text-xs font-medium rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary/30 text-dark text-xs font-medium rounded-sm">
                        +{project.technologies.length - 3}
                      </span>
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="font-body text-sm text-dark/50">
            ← Scroll to see more projects →
          </p>
        </motion.div>
      </div>
    </section>
  )
}

