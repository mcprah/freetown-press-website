import { useState } from 'react'
import './WhoWeAre.css'

const checks = [
  {
    title: 'Corporate-Focused',
    body: 'We understand the pace and standards of corporate environments; our solutions are built around your brand identity and business objectives.',
  },
  {
    title: 'Creative & Strategic',
    body: 'Every deliverable is designed with purpose — from brand colours to training materials, creativity is always in service of strategy.',
  },
  {
    title: 'End-to-End Service',
    body: 'From concept to delivery, we manage the full process so you don’t have to coordinate multiple vendors.',
  },
  {
    title: 'Nationwide Reach',
    body: 'Based in Ghana, we serve clients across Accra, Kumasi, Takoradi, and beyond, with consistent quality wherever you are.',
  },
]

export default function WhoWeAre() {
  const [open, setOpen] = useState(null)

  const toggle = (title) => setOpen((prev) => (prev === title ? null : title))

  return (
    <section className="who" id="who">
      <div className="container">
        <div className="who-grid">
          <div className="who-img" data-reveal="left"><img src="/images/who-we-are.webp" alt="Freetown Press team at work" loading="lazy" /></div>
          <div className="who-content" data-reveal="right">
            <span className="label">Who We Are</span>
            <h2>Your One-Stop Corporate Solutions Partner</h2>
            <p>Freetown Press is a full-service corporate solutions company specializing in branding, marketing support, high-quality printing, corporate souvenirs, professional training, and business supplies.</p>
            <p>We serve clients across the private, public, and non-profit sectors in Ghana with precision, creativity, and professionalism.</p>
            <div className="checks" data-reveal-stagger>
              {checks.map((c) => {
                const isOpen = open === c.title
                const panelId = `check-panel-${c.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
                return (
                  <div className={`check${isOpen ? ' open' : ''}`} key={c.title}>
                    <button
                      type="button"
                      className="check-head"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(c.title)}
                    >
                      <svg className="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                      <span className="check-title">{c.title}</span>
                    </button>
                    <div className="check-body" id={panelId} role="region" aria-label={c.title} inert={!isOpen || undefined}>
                      <div className="check-body-inner">
                        <p>{c.body}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
