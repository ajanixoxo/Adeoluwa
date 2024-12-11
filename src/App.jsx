import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './pages/Hero'
import GlowCircle from './components/GlowCircle'
import AnimatedCodeBlock from './components/AnimateCodeBlock'
import Gradient from './components/Gradient'
import AOS from 'aos';

import './App.css'
import { Nav } from './components/Nav'
import 'animate.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const [count, setCount] = useState(0)
  AOS.init();
  return (
    <>

      <div className="h-screen overflow-x-hidden relative max-w-full bg-gray-900">
        <div className="absolute z-20 -top-52 -left-24 lg:left-0 lg:top-32 blur-3xl"><div className="w-56 h-56 rounded-full bg-bluedkblr/50 absolute"></div><div className="w-56 h-56 rounded-full bg-bluewtblr/50 absolute top-28 -right-10"></div><div className="w-56 h-56 rounded-full bg-dkwtblue/50 absolute top-56 -right-52"></div></div>
        <GlowCircle color='bg-sky-700' size='w-64 h-64' top='-5%' left='10%' delay={0} />
        <GlowCircle color='bg-sky-700' size='w-48 h-48' top='40%' left='70%' delay={5} />
        <GlowCircle color='bg-sky-700' size='w-32 h-32' top='40%' left='-5%' delay={2} />
        <Gradient />
        <AnimatedCodeBlock content='<html>' postion="lg:top-20 top-[60px] left-0" delay={2} />
        <AnimatedCodeBlock content='<body>' postion="lg:top-32 top-20 lg:left-10 left-5" delay={5} />
        <AnimatedCodeBlock content='</body>' postion="bottom-10 left-10" delay={2} />
        <AnimatedCodeBlock content='</html>' postion="bottom-0 left-0" delay={5} />
        <Nav />
        <Hero />

      </div>
    </>
  )
}

export default App
