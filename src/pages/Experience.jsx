import Grouped from '../components/Grouped'
const experiences = [
  {
    company: "Plexiweb Studio",
    role: "Frontend Developer",
    period: "2024 - Present",
    responsibilities: [
      "Woeked with other Frontend Developer, Backend, Desinger in creating responsive web applications",
      "Implemented new features resulting in a 30% increase in user engagement",
      "Optimized website performance, improving load times by 40%"
    ]
  },
  {
    company: "Crezlo",
    role: "Back-end Engineer",
    period: "2024 - Present",
    responsibilities: [
      "Developed and maintained multiple client websites using  Node.js and Php",
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

 function Experience() {
  return (
    <section className="relative py-24 ">
        <Grouped titleO="<experience>" titleC='</experience>'/>
      <div className="relative z-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-50">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-purple-900  rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg animate__animated animate__pulse"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-300">{exp.company}</h3>
                <span className="text-sm font-medium text-gray-100 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-lg font-medium text-gray-50 mb-3">{exp.role}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience