import { Home, User, Share2, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 z-50 flex justify-center items-center w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex mx-aut0 h-16 items-center justify-around">
        <div>
            <h1 className="hidden lg:flex text-white main text-2xl"> <span className="font-bold text-blue-700 ">&lt;</span>Adeoluwa <span className="font-bold text-blue-700 ">/&gt; </span>  </h1>
        </div>
        <div className="flex items-center gap-6">
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

        <div className="hidden sm:flex gap-4">
          <button className="p-2 text-white buttonp">Resume</button>
          <button className="p-2" onClick={toggleMenu}>
            {/* Add a toggle icon here if desired */}
            <span className="sr-only text-white">Theme Toggle</span>
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
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
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="sr-only text-white">Contact</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden p-2"
          onClick={toggleMenu}
        >
          {/* Hamburger icon for mobile menu */}
          <span className="sr-only text-white">Toggle menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-background/80 backdrop-blur-sm z-40 p-4">
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
