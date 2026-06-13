import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trusted from './components/Trusted/Trusted'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import ServicesPreview from './components/Services/ServicesPreview'
import ServicesPage from './components/Services/ServicesPage'
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

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])
  return null
}

function HomePage() {
  useReveal()
  return (
    <>
      <Hero />
      <Trusted />
      <WhoWeAre />
      <ServicesPreview />
      <WhyUs />
      <About />
      <Portfolio />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <Blog />
      <Quote />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<PortfolioCase />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
