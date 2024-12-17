import WP1 from '/project/wp1.png'
import WP2 from '/project/wp2.png'
import WP3 from '/project/wp3.png'
import WP4 from '/project/wp4.png'
import WP5 from '/project/wp5.png'
import WP6 from '/project/wp6.png'
import WP7 from '/project/wp7.png'
import WP8 from '/project/wp8.png'
import WP9 from '/project/WP9.png'
import WP10 from '/project/WP10.png'
import MP1 from '/project/mp1.jpg'
import MP2 from '/project/mp2.jpg'
import MP3 from '/project/mp3.jpg'
import Grouped from "../components/Grouped";
import  ProjectCard from '../components/ProjectCard'

const projects = [
    {
      title: "Rental Web Application Project",
      description: "A House Rental Website based on Matching Client with agent based on their area....",
      image: "/project/WP9.png",
      link: "https://nina-sglowstore.onrender.com/",
      categories: ["E-commerce", "Web App"],
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Web Application Project",
      description: "A Full Stack E-commerce skincare website.",
      image: "/project/wp1.png",
      link: "https://nina-sglowstore.onrender.com/",
      categories: ["E-commerce", "Web App"],
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Application Project",
      description: "DeFi Payment App Design.",
      image: "/project/mp2.jpg",
      link: "https://github.com/ajanixoxo/Pay-App",
      categories: ["Mobile", "DeFi"],
      technologies: ["React Native", "Blockchain"],
    },
    {
      title: "Client's Portfolio",
      description: "A modern portfolio website.",
      image: "/project/wp2.png",
      link: "https://bukolaoladiti.com.ng/",
      categories: ["Portfolio", "Web Design"],
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Piggy Saving App Design",
      description: "Mobile app for savings.",
      image: "/project/mp3.jpg",
      link: "https://github.com/ajanixoxo/Romrro-Mobile-App-UI/",
      categories: ["Mobile", "Finance"],
      technologies: ["React Native", "Redux"],
    },
    {
      title: "Mini Furniture Website",
      description: "E-commerce furniture store.",
      image: "/project/wp3.png",
      link: "https://furniture-q47n.onrender.com/",
      categories: ["E-commerce", "Web Design"],
      technologies: ["React", "Node.js", "Express"],
    },
    {
      title: "Website Design",
      description: "An Hero Section of a NFT Website",
      image: "/project/wp4.png",
      link: "https://nft-3-five.vercel.app/",
      categories: ["Web Design", "NFT"],
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "A Dashboard Website",
      description: "An Admin Dashboard.",
      image: "/project/wp5.png",
      link: "https://crownz-dasboard.vercel.app/",
      categories: ["Web App", "Dashboard"],
      technologies: ["React", "Chart.js", "Tailwind CSS"],
    },
    {
      title: "Web Design",
      description: "An Hero Section for a NFT Collection.",
      image: "/project/wp6.png",
      link: "https://mint-nft-lac-psi.vercel.app/",
      categories: ["Web Design", "NFT"],
      technologies: ["React", "Next.js", "Styled Components"],
    },
    {
      title: "Web Design",
      description: "A Car Hero Section.",
      image: "/project/wp8.png",
      link: "https://car-mustang-six.vercel.app/",
      categories: ["Web Design", "Automotive"],
      technologies: ["React", "Three.js", "GSAP"],
    },
    {
      title: "Web Application",
      description: "A hero section",
      image: "/project/wp7.png",
      link: "https://dami-s-nft-design.vercel.app/",
      categories: ["Web Design", "NFT"],
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "Web Design",
      description: "A Landing Page for a NFT.",
      image: "/project/WP10.png",
      link: "https://trade-nft.vercel.app/",
      categories: ["Web Design", "NFT"],
      technologies: ["React", "Next.js", "Styled Components"],
    },
  ]
function Projects() {
    return (
        <section id="projects" className="relative  flex flex-col mt-5 justify-around mx-auto px-4 py-24 text-white " >
            <Grouped titleO='<project>' titleC='</project>' />
            <div className=" relative z-20 mb-12 text-center ">
                <h2 className="text-3xl main lg:text-4xl font-bold">Works</h2>
              
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            
        </section>
    )
}
export default Projects
