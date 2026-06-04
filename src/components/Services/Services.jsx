import { useState } from 'react'
import BrandingTagsExplorer from './BrandingTagsExplorer'
import './Services.css'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'Corporate Branding & Marketing',
    desc: 'We build strong, memorable brands through strategic design and marketing support that communicate clearly and confidently.',
    tags: ['Logo Design', 'Brand Identity', 'Brochures', 'Social Media', 'Event Branding', 'Rebranding'],
    tagPreviews: [
      { slug: 'logo-design',    label: 'Logo Design',    image: '/images/gridco-shirts-freetown.webp',                      portfolioId: 'gridco' },
      { slug: 'brand-identity', label: 'Brand Identity', image: '/images/national-investment-bank-souvenir-bottle.webp',    portfolioId: 'nib' },
      { slug: 'brochures',      label: 'Brochures',      image: '/images/sic-insurance-pullups.webp',                       portfolioId: 'sic' },
      { slug: 'social-media',   label: 'Social Media',   image: '/images/kfc/kfc-coffee-promotional-graphic.jpeg',          portfolioId: 'kfc' },
      { slug: 'event-branding', label: 'Event Branding', image: '/images/dennislaw-backdrop-freetown.webp',                 portfolioId: 'dennislaw' },
      { slug: 'rebranding',     label: 'Rebranding',     image: '/images/bayport-notebook-freetown.webp',                   portfolioId: 'bayport' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="3" width="12" height="18" rx="1"/><path d="M6 7h12M6 11h12M6 15h12"/></svg>,
    title: 'Premium Printing & Corporate Merchandise',
    desc: 'High-quality printing and customised corporate items crafted to leave a lasting impression.',
    tags: ['Business Cards', 'Banners', 'Branded Apparel', 'Gift Sets', 'Annual Reports', 'ID Cards'],
    tagPreviews: [
      { slug: 'business-cards', label: 'Business Cards', image: '/images/national-investment-bank-pen copy.webp',           portfolioId: 'nib' },
      { slug: 'banners',        label: 'Banners',        image: '/images/dennislaw-pullup-banner.webp',                     portfolioId: 'dennislaw' },
      { slug: 'branded-apparel',label: 'Branded Apparel',image: '/images/brand-apparel/dstv-for-business-branded-polo-shirt.jpeg', portfolioId: 'branded-apparel' },
      { slug: 'gift-sets',      label: 'Gift Sets',      image: '/images/gift-set/corporate-gift-sets-display-shelf.jpeg',  portfolioId: 'gift-sets' },
      { slug: 'annual-reports', label: 'Annual Reports', image: '/images/bayport-notebook-freetown.webp',                   portfolioId: 'bayport' },
      { slug: 'id-cards',       label: 'ID Cards',       image: '/images/national-investment-bank-pin.webp',                portfolioId: 'nib' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Professional Training',
    desc: 'Practical, industry-relevant programs designed to build skills that stick.',
    tags: ['Branding Strategy', 'Customer Service', 'Leadership', 'Sales Skills', 'Communication'],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-1"/></svg>,
    title: 'Business Supplies',
    desc: 'Reliable procurement and supply of high-quality operational materials with consistency and seamless fulfillment.',
    tags: ['Stationery', 'Toners', 'Event Supplies', 'Packaging', 'Bulk Orders'],
  },
]

export default function Services() {
  const [open, setOpen] = useState(() => new Set())

  const toggle = (title) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(title) ? next.delete(title) : next.add(title)
      return next
    })

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Our Core Services</span>
          <h2>Everything Your Brand Needs</h2>
          <p>From brand strategy to business supplies, we provide comprehensive solutions that help your brand and organisation thrive.</p>
        </div>
        <div className="srv-grid" data-reveal-stagger>
          {services.map((s) => {
            const isOpen = open.has(s.title)
            const panelId = `srv-tags-${s.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
            return (
              <div className={`srv${isOpen ? ' open' : ''}`} key={s.title}>
                <div className="srv-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button
                  type="button"
                  className="srv-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(s.title)}
                >
                  What we offer
                  <svg className="srv-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className="tags-wrap" id={panelId} inert={!isOpen || undefined}>
                  <div className="tags-inner">
                    {s.tagPreviews ? (
                      <BrandingTagsExplorer tags={s.tagPreviews} />
                    ) : (
                      <div className="tags">
                        {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="srv-cta" data-reveal>
          <a href="#quote" className="btn btn-dark">Get Started With Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    </section>
  )
}
