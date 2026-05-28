import { useState } from 'react'
import './WhyUs.css'

const reasons = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>, title: 'Quality & Attention to Detail', body: 'Precision and finish are standard in everything we produce.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: 'Timely Delivery', body: 'Your deadlines are ours. We deliver on time, without compromise.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>, title: 'Corporate-Focused', body: 'Built around the needs of professional and business environments.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, title: 'Competitive Pricing', body: 'Premium quality at rates that make business sense.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>, title: 'Professional Service', body: 'Responsive, organised, and committed to getting it right.' },
]

export default function WhyUs() {
  const [open, setOpen] = useState(null)

  const toggle = (title) => setOpen((prev) => (prev === title ? null : title))

  return (
    <section className="why">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Why Us</span>
          <h2>Why Choose Freetown Press?</h2>
          <p>We combine quality, speed, and professionalism because your brand deserves nothing less.</p>
        </div>
        <div className="why-grid" data-reveal-stagger>
          {reasons.map((r) => {
            const isOpen = open === r.title
            const panelId = `why-panel-${r.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
            return (
              <div className={`why-card${isOpen ? ' open' : ''}`} key={r.title}>
                <button
                  type="button"
                  className="wc-head"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(r.title)}
                >
                  <span className="wc-icon">{r.icon}</span>
                  <h4>{r.title}</h4>
                </button>
                <div className="wc-body" id={panelId} role="region" aria-label={r.title} inert={!isOpen || undefined}>
                  <div className="wc-body-inner">
                    <p>{r.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
