import { Home, User, Share2, Mail, Github, Linkedin, Twitter, MessageCircle, AlignJustify } from 'lucide-react'
import { useState } from 'react'

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 z-50 flex  justify-center items-center w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex mx-auto h-16 items-center justify-between px-2 md:px-0 md:justify-around">
        <div>
          <h1 className="flex text-white main text-2xl"> <span className="font-bold text-blue-700 ">&lt;</span>Adeoluwa <span className="font-bold text-blue-700 ">/&gt; </span>  </h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button className="p-2">
            <Home className="h-5 w-5 text-white" />
            <span className="sr-only text-white">Home</span>
          </button>
          <button className="p-2">
            <User className="h-5 w-5 text-white" />
            <span className="sr-only text-white">About</span>
          </button>
          <button className="p-2">
            <Share2 className="h-5 w-5 text-white" />
            <span className="sr-only text-white">Project</span>
          </button>
          <button className="p-2">
            <Mail className="h-5 w-5 text-white" />
            <span className="sr-only text-white">Contact</span>
          </button>
        </div>

        {/* <div className="flex gap-4">
          <button className="p-2 text-white buttonp">Resume</button>
          <button className="p-2" onClick={toggleMenu}>
          
            <span className="sr-only text-white">Theme Toggle</span>
          </button>
        </div> */}

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" className="p-2">
            <Github className="h-5 w-5 text-white" />
            <span className="sr-only text-white">GitHub</span>
          </a>
          <a href="https://linkedin.com" className="p-2">
            <Linkedin className="h-5 w-5 text-white" />
            <span className="sr-only text-white">LinkedIn</span>
          </a>
          <a href="https://twitter.com" className="p-2">
            <Twitter className="h-5 w-5 text-white" />
            <span className="sr-only text-white">Twitter</span>
          </a>
          <a href="/contact" className="p-2">

            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="transparent
  " xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
              <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" stroke="white
  " strokeLinejoin="round" />
            </svg>

            <span className="sr-only text-white">Contact</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden p-2"
          onClick={toggleMenu}
        >
          {/* Hamburger icon for mobile menu */}
          <AlignJustify className="text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white  fixed top-16 left-0 w-full bg-background/80 backdrop-blur-sm z-40 p-4"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000">
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left">Home</button>
            </li>
            <li>
              <button className="w-full text-left">About</button>
            </li>
            <li>
              <button className="w-full text-left">Project</button>
            </li>
            <li>
              <button className="w-full text-left">Contact</button>
            </li>
            <li>
              <button className="w-full text-left">Resume</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
