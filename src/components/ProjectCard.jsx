
 function ProjectCard({ title, description, image, link, categories, technologies }) {
  return (
    <div className="overflow-hidden relative z-20 rounded-lg bg-purple-900 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__pulse">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 p-2 bg-white/10 backdrop-blur-sm rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-400">Project Category</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {categories.map((category) => (
                <span key={category} className="px-2 py-1 text-xs font-semibold text-white bg-white/20 rounded-full">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Technologies Used</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-semibold text-purple-900 bg-white rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full text-center py-2 px-4 bg-white text-purple-900 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          View
        </a>
      </div>
    </div>
  )
}

export default ProjectCard