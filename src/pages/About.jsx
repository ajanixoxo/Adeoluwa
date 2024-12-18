
import { GamepadIcon as GameController, Piano, Code, Coins } from 'lucide-react'
import Grouped from '../components/Grouped'

const interests = [
  {
    icon: <GameController className="w-12 h-12" />,
    title: "Gaming",
    description: "Exploring virtual worlds and strategic challenges"
  },
  {
    icon: <Piano className="w-12 h-12" />,
    title: "Piano",
    description: "Creating melodies in my free time"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Software",
    description: "Building innovative digital solutions"
  },
  {
    icon: <Coins className="w-12 h-12" />,
    title: "Finance",
    description: "Growing wealth through smart investments"
  }
]
const techStack = [
  "JavaScript", "React", "Node.js", "Express", "MongoDB",  "PHP", "MySQL", "PostgreSQL", "Nextjs", "Typescript", "HTML5", "CSS3", "Tailwind CSS", "Git"
]


 function About() {
  return (
    <section className="relative py-24 " id="about">
    <Grouped titleO="<about>" titleC="</about>" />
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center lg:flex-row gap-12">
        {/* Left side - Interests Grid */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="mb-4 text-purple-400 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
             
              </div>
            ))}
          </div>
        </div>

        {/* Right side - About Me Content */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                I'm a passionate Full Stack Web Developer (MERN) seeking a role in an IT company to enhance my skills, gain experience, and contribute to technological advancement in Nigeria and Africa, despite having no prior team experience.
              </p>
              <p className="text-gray-300 mt-4">
                My journey into tech began with a curiosity about how websites work. This curiosity led me to explore various programming languages and frameworks, eventually falling in love with the MERN stack. Through self-study and practical projects, I've developed a strong foundation in both frontend and backend development.
              </p>
              <p className="text-gray-300 mt-4">
                When I'm not coding, you'll find me playing video games, creating music on my piano, or exploring new technologies. I believe in continuous learning and staying updated with the latest tech trends.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://flowcv.com/resume/o614k8s695"
                  className="inline-flex items-center rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-colors"
                >
                 Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg border border-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500/10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default About