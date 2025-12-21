import AboutVariation1 from '@/components/about-variations/AboutVariation1'
import HeroVariation3 from '../components/hero-variations/HeroVariation3'
import ProjectVariation1 from '@/components/projects-variations/ProjectVariation1'
import WorkExperience from '@/components/work-experience/WorkExperience'
import BlogSection from '@/components/blog/BlogSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return <div>
    <HeroVariation3 />
    <AboutVariation1/>
    <ProjectVariation1/>
    <WorkExperience/>
    <BlogSection/>
    <ContactSection/>
    <Footer/>
  </div>
}
