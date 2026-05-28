import { Link, useNavigate } from 'react-router-dom'
import './Portfolio.css'

export const projects = [
  {
    id: 'gridco',
    title: 'GRIDCo Branded Merchandise',
    category: 'Corporate Merchandise',
    tags: ['Branded Apparel', 'Corporate Merchandise', 'Embroidery'],
    color: '#0F172A',
    accent: '#4A8BD9',
    logo: '/images/Company Logos/GrIDco.webp',
    image: '/images/gridco-shirts-freetown.webp',
    gallery: [
      '/images/gridco-shirts-freetown.webp',
    ],
    desc: 'Premium branded polo shirts and corporate apparel for GRIDCo, designed to reinforce the company\'s professional image across their workforce and at industry events.',
    challenge: 'GRIDCo needed high-quality branded apparel that would present a unified, professional image for their team — from field engineers to corporate staff — while being durable enough for everyday use across Ghana\'s energy infrastructure sites.',
    solution: 'We produced premium embroidered polo shirts in clean white with the GRIDCo logo precisely placed for maximum brand visibility. The garments were selected for comfort and durability, ensuring the team looks sharp whether in the office or on site.',
  },
  {
    id: 'kfc',
    title: 'KFC Brand Activation',
    category: 'Event Branding',
    tags: ['Brand Activation', 'Promotional Materials', 'Outdoor Signage'],
    color: '#B91C1C',
    accent: '#FCA5A5',
    logo: '/images/Company Logos/Kfc_logo.webp',
    image: '/images/kfc-umbrella .webp',
    gallery: [
      '/images/kfc-umbrella .webp',
      '/images/kfc-cap-freetown.webp',
      '/images/kfc-cap-dt-contest.jpeg',
    ],
    desc: 'A full-scale brand activation campaign for KFC Ghana, spanning outdoor signage, promotional merchandise, and event branding materials that carried the KFC brand consistently across every format.',
    challenge: 'KFC required a cohesive brand activation that would maintain global brand consistency while resonating with the Ghanaian market. Every touchpoint — from parasols to banners — needed to feel unmistakably KFC while being adapted for local events and outdoor conditions.',
    solution: 'We produced a complete suite of branded materials including custom parasols, pull-up banners, branded tents, and event signage. Each piece was produced with weather-resistant materials and vibrant colour reproduction to ensure the signature KFC red remained bold and consistent across all formats.\n\nAll materials were delivered ahead of the activation date and deployed across multiple locations in Accra.',
  },
  {
    id: 'nib',
    title: 'NIB Corporate Souvenirs',
    category: 'Branded Merchandise',
    tags: ['Corporate Souvenirs', 'Branded Merchandise', 'Promotional Items'],
    color: '#1E3A5F',
    accent: '#93C5FD',
    logo: '/images/Company Logos/NIB-logo.webp',
    image: '/images/national-investment-bank-tumbler-cup .webp',
    gallery: [
      '/images/national-investment-bank-souvenir-bottle.webp',
      '/images/national-investment-bank-tumbler-cup .webp',
      '/images/national-investment-bank-pin.webp',
      '/images/national-investment-bank-pen copy.webp',
    ],
    desc: 'A complete range of branded corporate souvenirs for National Investment Bank — from tumbler cups and water bottles to lapel pins and executive pens designed to strengthen brand presence at every level.',
    challenge: 'NIB needed a cohesive collection of corporate souvenirs that reflected the prestige of a leading financial institution. Each item had to feel premium and purposeful, serving as both a functional gift and a lasting brand impression.',
    solution: 'We curated and produced a suite of branded merchandise including insulated tumbler cups, stainless steel water bottles, enamel lapel pins, and executive pens — each featuring the NIB identity in deep navy and blue, ensuring consistency and quality across every piece.\n\nThe full collection was delivered on schedule and presented as part of NIB\'s corporate gifting programme.',
  },
  {
    id: 'sic',
    title: 'SIC Insurance Corporate Materials',
    category: 'Corporate Print',
    tags: ['Corporate Stationery', 'Branded Merchandise', 'Print Collateral'],
    color: '#1B4332',
    accent: '#74C69D',
    logo: '/images/Company Logos/gh-sic-logo.webp',
    image: '/images/sic-insurance-pullups.webp',
    gallery: [
      '/images/sic-insurance-pullups.webp',
      '/images/sic-insurance-facetowel.webp',
      '/images/sic-insurance-lunchbox.webp',
    ],
    desc: 'Branded promotional materials and corporate merchandise for SIC Insurance — including pull-up banners, cooler bags, and face towels — reinforcing their trusted presence at events and client engagements.',
    challenge: 'SIC Insurance needed a range of branded materials that could work across corporate events, client meetings, and promotional campaigns while reinforcing the authority and visibility of one of Ghana\'s most established insurers.',
    solution: 'We produced a versatile collection including step-and-repeat pull-up banners for events, branded cooler bags in the signature SIC blue, and embroidered face towels — each item designed to keep the brand front and centre across every client interaction.',
  },
  {
    id: 'bayport',
    title: 'Bayport Branded Materials',
    category: 'Corporate Merchandise',
    tags: ['Branded Merchandise', 'Corporate Stationery', 'Event Materials'],
    color: '#14532D',
    accent: '#86EFAC',
    logo: '/images/Company Logos/Bayport_Logo copy.webp',
    image: '/images/bayport-notebook-freetown.webp',
    gallery: [
      '/images/bayport-notebook-freetown.webp',
      '/images/bayport-pens-wooden.webp',
      '/images/bayport-shirt-freetown-press.webp',
      '/images/bayport-tshirt-freetown-press .webp',
      '/images/bayport-tissue-box.webp',
      '/images/bayport-gazebo-freepress.webp',
    ],
    desc: 'A comprehensive range of branded materials for Bayport Financial Services — from executive notebooks and wooden pens to branded apparel, tissue boxes, and event gazebos.',
    challenge: 'Bayport needed a full suite of branded materials that could serve both day-to-day office use and outdoor promotional events, all while conveying the professionalism expected in financial services.',
    solution: 'We delivered an end-to-end branded collection: premium leather-look notebooks, custom wooden pens, embroidered shirts, branded tissue boxes for client-facing spaces, and a large-format gazebo for outdoor events, all unified under Bayport\'s green identity.\n\nThe full collection was delivered on schedule and rolled out across Bayport\'s office locations and promotional events.',
  },
  {
    id: 'dennislaw',
    title: 'Dennislaw Event Branding',
    category: 'Event Branding',
    tags: ['Event Signage', 'Backdrop Banners', 'Promotional Displays'],
    color: '#1E3A5F',
    accent: '#7DAED4',
    logo: '/images/Company Logos/Dennislaw Logo.webp',
    image: '/images/dennislaw-backdrop-freetown.webp',
    gallery: [
      '/images/dennislaw-backdrop-freetown.webp',
      '/images/dennislaw-pullup-banner.webp',
      '/images/dennislaw-teardrop.webp',
    ],
    desc: 'Event branding and promotional signage for Dennislaw — including a backdrop banner, pull-up banner, and teardrop flag — bringing their refreshed brand identity to life at conferences and events.',
    challenge: 'Dennislaw needed a suite of event branding materials that would make a strong visual impact at legal conferences and industry events, while showcasing their modern brand identity as a leading legal research portal.',
    solution: 'We designed and produced a large-format backdrop banner, a portable pull-up banner, and an eye-catching teardrop flag — each featuring Dennislaw\'s distinctive blue identity with playful geometric accents that set them apart in professional settings.',
  },
]

export function PortfolioCard({ project }) {
  const navigate = useNavigate()
  return (
    <div
      className="pf-card"
      style={{ '--card-color': project.color, '--card-accent': project.accent }}
      onClick={() => navigate(`/portfolio/${project.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/portfolio/${project.id}`)}
    >
      {project.image ? (
        <img className="pf-card-img" src={project.image} alt={project.title} />
      ) : (
        <div className="pf-card-bg">
          <div className="pf-card-shape pf-card-shape--1" />
          <div className="pf-card-shape pf-card-shape--2" />
          <div className="pf-card-shape pf-card-shape--3" />
        </div>
      )}
      {!project.image && <img className="pf-logo" src={project.logo} alt="" />}
      <div className="pf-card-content">
        <span className="pf-category">{project.category}</span>
        <h3 className="pf-title">{project.title}</h3>
      </div>
      <div className="pf-card-overlay">
        <span className="pf-category">{project.category}</span>
        <h3 className="pf-title">{project.title}</h3>
        <span className="pf-view">
          View Case Study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </span>
      </div>
    </div>
  )
}

const preview = projects.slice(0, 3)

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Our Work</span>
          <h2>Selected Projects</h2>
          <p>A glimpse into the brands and campaigns we've brought to life.</p>
        </div>
        <div className="pf-grid pf-grid--preview" data-reveal-stagger>
          {preview.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>
        <div className="pf-view-all" data-reveal>
          <Link to="/portfolio" className="pf-view-all-btn">
            View All Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
