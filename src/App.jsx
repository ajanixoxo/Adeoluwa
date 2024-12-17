import { useState } from 'react'
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
import './App.css'
import { Nav } from './components/Nav'
import 'animate.css';
import 'aos/dist/aos.css';
// ..
AOS.init();
function App() {
  const [showIntro, setShowIntro] = useState(true);

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
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <Footer />

      </div></HelmetProvider>
    </>
  )
}

export default App
