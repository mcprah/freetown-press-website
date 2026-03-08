import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    document.body.style.overflow = !mobileOpen ? 'hidden' : ''
  }

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-inner">
            <a href="#home" className="logo" onClick={(e) => scrollTo(e, '#home')}>Freetown<span>Press</span></a>
            <div className="nav-links">
              <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
              <a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a>
              <a href="#testimonials" onClick={(e) => scrollTo(e, '#testimonials')}>Testimonials</a>
              <a href="#blog" onClick={(e) => scrollTo(e, '#blog')}>Blog</a>
              <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact us</a>
            </div>
            <div className="nav-right">
              <a href="#quote" className="btn btn-primary" onClick={(e) => scrollTo(e, '#quote')}>Get a Free Quote</a>
              <a href="#contact" className="btn btn-signin" onClick={(e) => scrollTo(e, '#contact')}>Contact Us</a>
            </div>
            <button className="hamburger" aria-label="Menu" aria-expanded={mobileOpen} onClick={toggleMobile}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mob-nav ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="Mobile navigation">
        <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
        <a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a>
        <a href="#testimonials" onClick={(e) => scrollTo(e, '#testimonials')}>Testimonials</a>
        <a href="#blog" onClick={(e) => scrollTo(e, '#blog')}>Blog</a>
        <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact us</a>
        <a href="#quote" className="btn btn-primary" onClick={(e) => scrollTo(e, '#quote')}>Get a Free Quote</a>
      </div>
    </>
  )
}
