import { useState } from 'react'
import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trusted from './components/Trusted/Trusted'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import About from './components/About/About'
import Process from './components/Process/Process'
import Portfolio from './components/Portfolio/Portfolio'
import PortfolioCase from './components/Portfolio/PortfolioCase'
import Industries from './components/Industries/Industries'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Blog from './components/Blog/Blog'
import BlogPost from './components/Blog/BlogPost'
import Quote from './components/Quote/Quote'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [activePost, setActivePost] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  useReveal()

  if (activeProject) {
    return (
      <>
        <Navbar />
        <PortfolioCase project={activeProject} onBack={() => setActiveProject(null)} />
        <Footer />
      </>
    )
  }

  if (activePost) {
    return (
      <>
        <Navbar />
        <BlogPost post={activePost} onBack={() => setActivePost(null)} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <WhoWeAre />
      <Services />
      <WhyUs />
      <About />
      <Portfolio onSelectProject={setActiveProject} />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <Blog onSelectPost={setActivePost} />
      <Quote />
      <Contact />
      <Footer />
    </>
  )
}

export default App
