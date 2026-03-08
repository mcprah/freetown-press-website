import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trusted from './components/Trusted/Trusted'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import About from './components/About/About'
import Process from './components/Process/Process'
import Industries from './components/Industries/Industries'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Blog from './components/Blog/Blog'
import Quote from './components/Quote/Quote'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <WhoWeAre />
      <Services />
      <WhyUs />
      <About />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <Blog />
      <Quote />
      <Contact />
      <Footer />
    </>
  )
}

export default App
