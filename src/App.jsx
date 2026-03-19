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
import PortfolioPage from './components/Portfolio/PortfolioPage'
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
  const [showPortfolio, setShowPortfolio] = useState(false)
  useReveal()

  const openPortfolio = () => setShowPortfolio(true)

  if (activeProject) {
    return (
      <>
        <Navbar onShowPortfolio={openPortfolio} />
        <PortfolioCase
          project={activeProject}
          onBack={() => setActiveProject(null)}
          backLabel={showPortfolio ? 'Back to Portfolio' : 'Back to Projects'}
        />
        <Footer />
      </>
    )
  }

  if (showPortfolio) {
    return (
      <>
        <Navbar onShowPortfolio={openPortfolio} />
        <PortfolioPage
          onSelectProject={setActiveProject}
          onBack={() => setShowPortfolio(false)}
        />
        <Footer />
      </>
    )
  }

  if (activePost) {
    return (
      <>
        <Navbar onShowPortfolio={openPortfolio} />
        <BlogPost post={activePost} onBack={() => setActivePost(null)} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar onShowPortfolio={openPortfolio} />
      <Hero />
      <Trusted />
      <WhoWeAre />
      <Services />
      <WhyUs />
      <About />
      <Portfolio onSelectProject={setActiveProject} onViewAll={() => setShowPortfolio(true)} />
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
