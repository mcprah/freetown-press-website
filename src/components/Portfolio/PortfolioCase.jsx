import { useEffect } from 'react'
import './PortfolioCase.css'

export default function PortfolioCase({ project, onBack, backLabel = 'Back to Projects' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <article className="case-study">
      {/* ── Hero ── */}
      <div className="cs-hero" style={{ '--cs-color': project.color, '--cs-accent': project.accent }}>
        {project.image ? (
          <img className="cs-hero-img" src={project.image} alt={project.title} />
        ) : (
          <div className="cs-hero-abstract">
            <div className="cs-shape cs-shape--1" />
            <div className="cs-shape cs-shape--2" />
          </div>
        )}
        <img className="cs-hero-logo" src={project.logo} alt="" />
        <div className="cs-hero-overlay" />
      </div>

      {/* ── Body ── */}
      <div className="cs-body container">
        <button
          className="cs-back"
          onClick={() => {
            onBack()
            setTimeout(() => {
              const el = document.getElementById('portfolio')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 100)
          }}
          aria-label="Back to portfolio"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          {backLabel}
        </button>

        <div className="cs-header">
          <div className="cs-tags">
            {project.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-desc">{project.desc}</p>
        </div>

        <div className="cs-section">
          <span className="cs-label">The Challenge</span>
          <p>{project.challenge}</p>
        </div>

        <div className="cs-section">
          <span className="cs-label">The Solution</span>
          <p>{project.solution}</p>
        </div>

        {project.gallery?.length > 0 && (
          <div className="cs-gallery">
            <span className="cs-label">The Work</span>
            <div className="cs-gallery-grid">
              {project.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} – ${i + 1}`} />
              ))}
            </div>
          </div>
        )}

        <div className="cs-cta">
          <h3>Have a project like this?</h3>
          <p>Let's bring your brand to life.</p>
          <a href="#quote" className="btn btn-dark" onClick={onBack}>
            Request a Free Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </article>
  )
}
