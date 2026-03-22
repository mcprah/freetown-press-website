import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects, PortfolioCard } from './Portfolio'
import './PortfolioPage.css'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="pp">
      <div className="container">
        <Link to="/#portfolio" className="pp-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Home
        </Link>

        <div className="section-head">
          <span className="label">Our Work</span>
          <h2>Selected Projects</h2>
          <p>A glimpse into the brands and campaigns we've brought to life.</p>
        </div>

        <div className="pp-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pp-filter${active === cat ? ' pp-filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {active === cat && <span className="pp-filter-count">{filtered.length}</span>}
            </button>
          ))}
        </div>

        <div className={`pf-grid${active === 'All' ? ' pf-grid--bento' : ' pf-grid--filtered'}`}>
          {filtered.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>

        <div className="pp-cta">
          <div className="pp-cta-inner">
            <h2>Have a project in mind?</h2>
            <p>Let's create something exceptional together.</p>
            <Link to="/#quote" className="btn btn-dark">
              Request a Free Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
