import { useEffect, useState, useCallback } from 'react'
import './PortfolioCase.css'

export default function PortfolioCase({ project, onBack, backLabel = 'Back to Projects' }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % project.gallery.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + project.gallery.length) % project.gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, project.gallery, closeLightbox])

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
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} – ${i + 1}`}
                  className="cs-gallery-img"
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
                />
              ))}
            </div>
          </div>
        )}

        {lightbox !== null && (
          <div className="cs-lightbox" onClick={closeLightbox}>
            <button className="cs-lb-close" onClick={closeLightbox} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {project.gallery.length > 1 && (
              <>
                <button
                  className="cs-lb-nav cs-lb-prev"
                  aria-label="Previous"
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + project.gallery.length) % project.gallery.length) }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  className="cs-lb-nav cs-lb-next"
                  aria-label="Next"
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % project.gallery.length) }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </>
            )}
            <img
              src={project.gallery[lightbox]}
              alt={`${project.title} – ${lightbox + 1}`}
              className="cs-lb-img"
              onClick={(e) => e.stopPropagation()}
            />
            <span className="cs-lb-counter">{lightbox + 1} / {project.gallery.length}</span>
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
