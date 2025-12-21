'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { HiExternalLink, HiCode, HiArrowRight } from 'react-icons/hi'

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

export default function ProjectVariation2() {
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
      <div className="max-w-6xl mx-auto">
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

        {/* Projects List - Masonry Style */}
        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border-2 border-secondary rounded-sm hover:border-accent transition-all duration-300">
                {/* Project Image/Icon */}
                <div className="md:w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="text-6xl opacity-20">💻</div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="font-body text-base text-dark/70 mb-4 leading-relaxed">
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
                  <div className="flex items-center gap-6 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-dark/70 hover:text-accent transition-colors font-body text-sm font-medium group/link"
                      >
                        <HiExternalLink className="text-lg" />
                        Live Demo
                        <HiArrowRight className="text-sm opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-dark/70 hover:text-accent transition-colors font-body text-sm font-medium group/link"
                      >
                        <HiCode className="text-lg" />
                        Code
                        <HiArrowRight className="text-sm opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

