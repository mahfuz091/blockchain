import AboutUs from '../components/AboutUs/AboutUs'
import Blog from '../components/Blog/Blog'
import Brands from '../components/Brands/Brands'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ParticlesWrapper from '../components/Particles/ParticlesWrapper'
import Roadmap from '../components/Roadmap/Roadmap'
import Services from '../components/Services/Services'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Roadmap />
      <Brands />
      <AboutUs />
      <Services />
      <HowItWorks />
      <Blog />
      <Contact />
    </>
  )
}

export default HomePage
