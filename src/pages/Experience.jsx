import Grouped from '../components/Grouped'
const experiences = [
  {
    company: "Plexiweb Studio",
    role: "Frontend Developer",
    period: "2024 - Present",
    responsibilities: [
      "Worked with other Frontend Developer, Backend, Designer in creating responsive web applications",
      "Implemented new features resulting in a 30% increase in user engagement",
      "Optimized website performance, improving load times by 40%"
    ]
  },
  {
    company: "Crezlo",
    role: "Back-end Engineer",
    period: "2024 - Present",
    responsibilities: [
      "Developed and maintained multiple client websites using Node.js and Php",
      "Collaborated with Front-end engineer to implement intuitive dynamic webpage",
      "Integrated third-party APIs to enhance website functionality"
    ]
  },
  {
    company: "Nina's Gloww",
    role: "Full Stack Developer",
    period: "2023 - 2024",
    responsibilities: [
      "Assisted in the development of a web-responsive e-commerce platform",
      "Conducted code reviews and implemented best practices",
      "Participated in agile development processes and sprint planning"
    ]
  }
]

export function Experience() {
  return (
    <div >
      <hr style={{
        width: "100%",
        height: "2",
      }} />
      <section className="relative py-24  overflow-hidden" id="experience">

        <Grouped titleO="<experience>" titleC='</experience>' />
        <div className="relative z-20 container mt-7 mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div
                  className="ml-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-opacity-20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-purple-300">{exp.company}</h3>
                    <span className="text-sm font-medium text-purple-200 mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-4">{exp.role}</h4>
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </section></div>
  )
}

export default Experience