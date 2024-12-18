/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from './pages/Hero'
import AOS from 'aos';
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import About from './pages/About'
import Contact from './pages/Contact';
import Footer from './pages/Footer'
import { IntroScreen } from './components/IntroScreen';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Link } from 'react-scroll';
import './App.css'
import { Nav } from './components/Nav'
import 'animate.css';
import 'aos/dist/aos.css';
// ..

AOS.init();
export function useSectionRefs() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  return { heroRef, aboutRef, projectsRef, contactRef, experienceRef };
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { heroRef, aboutRef, projectsRef, contactRef, experienceRef } =
    useSectionRefs();


  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  AOS.init();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Portfolio</title>
          <meta name="description" content="A portfolio showcasing my projects, experience, and skills." />
          <meta name="keywords" content="Portfolio, React, Software Developer, PHP, Projects, Experience, Adeoluwa Gbenro, App Develpoer, Software Engineer, Web Developer, Web Developer in Nigeria, Web Developer In Lagos, Web Developer in Abjua,  " />
          <meta name="author" content="Gbenro Adeoluwa, Adeoluwa, Gbenro" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        {showIntro && <IntroScreen onIntroComplete={handleIntroComplete} />}

        <div className="h-screen overflow-x-hidden relative max-w-full bg-gray-900">
          <Nav
            heroRef={heroRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            experienceRef={experienceRef} />
          <div ref={heroRef} id="hero">
            <Hero />
          </div>
          <div ref={projectsRef} >
            <Projects />
          </div>
          <div ref={experienceRef} id="experience">
            <Experience />
          </div>
          <div ref={aboutRef} id="about">
            <About />
          </div>
          <div ref={contactRef} id="contact">
            <Contact />
          </div>
          <Footer />

        </div></HelmetProvider>
    </>
  )
}

export default App
