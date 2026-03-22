import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    document.body.style.overflow = ''

    if (location.pathname === '/') {
      const el = document.querySelector(id)
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    } else {
      navigate('/' + id)
    }
  }

  const closeMobile = () => {
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
            <Link to="/" className="logo" onClick={closeMobile}>Freetown<span>Press</span></Link>
            <div className="nav-links">
              <a href="#about" onClick={(e) => goToSection(e, '#about')}>About Us</a>
              <a href="#services" onClick={(e) => goToSection(e, '#services')}>Services</a>
              <Link to="/portfolio">Portfolio</Link>
              <a href="#blog" onClick={(e) => goToSection(e, '#blog')}>Blog</a>
              <a href="#contact" onClick={(e) => goToSection(e, '#contact')}>Contact us</a>
            </div>
            <div className="nav-right">
              <a href="#quote" className="btn btn-primary" onClick={(e) => goToSection(e, '#quote')}>Get a Free Quote</a>
              <a href="#contact" className="btn btn-signin" onClick={(e) => goToSection(e, '#contact')}>Contact Us</a>
            </div>
            <button className="hamburger" aria-label="Menu" aria-expanded={mobileOpen} onClick={toggleMobile}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mob-nav ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="Mobile navigation">
        <a href="#about" onClick={(e) => goToSection(e, '#about')}>About Us</a>
        <a href="#services" onClick={(e) => goToSection(e, '#services')}>Services</a>
        <Link to="/portfolio" onClick={closeMobile}>Portfolio</Link>
        <a href="#blog" onClick={(e) => goToSection(e, '#blog')}>Blog</a>
        <a href="#contact" onClick={(e) => goToSection(e, '#contact')}>Contact us</a>
        <a href="#quote" className="btn btn-primary" onClick={(e) => goToSection(e, '#quote')}>Get a Free Quote</a>
      </div>
    </>
  )
}
