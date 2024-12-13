import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from './pages/Hero'
import AOS from 'aos';
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import './App.css'
import { Nav } from './components/Nav'
import 'animate.css';
import 'aos/dist/aos.css';
// ..
AOS.init();
function App() {
  const [count, setCount] = useState(0)
  AOS.init();
  return (
    <>

      <div className="h-screen overflow-x-hidden relative max-w-full bg-gray-900">


        <Nav />
        <Hero />
        <Projects />
        <Experience />

      </div>
    </>
  )
}

export default App
