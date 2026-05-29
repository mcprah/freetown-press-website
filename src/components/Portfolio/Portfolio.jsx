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
      '/images/kfc/kfc-in-kasoa.jpeg',
      '/images/kfc/kfc-goes-green-tee.jpeg',
      '/images/kfc/kfc-branded-t-shirt-screen-printing.jpeg',
      '/images/kfc/kfc-coffee-promotional-graphic.jpeg',
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
      '/images/sic/sic-insurance-branded-popup-banner.jpeg',
      '/images/sic/sic-insurance-branded-red-umbrellas.jpeg',
      '/images/sic/sic-insurance-branded-folding-umbrella.jpeg',
      '/images/sic/sic-insurance-branded-keychains.jpeg',
      '/images/sic/sic-insurance-branded-print-materials.jpeg',
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
  {
    id: 'gba',
    title: 'GBA Annual Conference Materials',
    category: 'Personalised Gifting',
    tags: ['Corporate Souvenirs', 'Branded Merchandise', 'Personalised Gifting'],
    color: '#1F2937',
    accent: '#9CA3AF',
    image: '/images/ghana-bar/ghana-bar-association-conference-gift-set.jpeg',
    gallery: [
      '/images/ghana-bar/ghana-bar-association-conference-gift-set.jpeg',
      '/images/ghana-bar/ghana-bar-association-conference-souvenir-set.jpeg',
      '/images/ghana-bar/ghana-bar-association-executive-notebook-set.jpeg',
      '/images/ghana-bar/ghana-bar-association-branded-notebook-interior.jpeg',
    ],
    desc: 'A curated collection of personalised corporate gift sets for the Ghana Bar Association\'s Annual Conference — each piece individually branded with members\' names and bar numbers.',
    challenge: 'The Ghana Bar Association required conference souvenirs that went beyond generic gifting. Each item had to be personalised to individual members while maintaining the professional standing and institutional identity of one of Ghana\'s most prestigious legal bodies.',
    solution: 'We produced a complete set of personalised corporate gift sets, with each piece bearing the recipient\'s name and bar number — ensuring every member received something distinctly their own. Each item was finished to a standard befitting the legal profession.\n\nThe full collection was delivered ahead of the Annual Conference and distributed to members at the event.',
  },
  {
    id: 'impact',
    title: 'Impact Life Insurance Office Branding & Materials',
    category: 'Office Branding',
    tags: ['Office Branding', 'Signage', 'Branded Merchandise', 'Print Materials'],
    color: '#6E1A33',
    accent: '#D98BA0',
    image: '/images/impact/impact-life-insurance-building-facade.jpeg',
    gallery: [
      '/images/impact/impact-life-insurance-building-facade.jpeg',
      '/images/impact/impact-life-insurance-branded-storefront.jpeg',
      '/images/impact/impact-life-insurance-office-glass-branding.jpeg',
      '/images/impact/impact-life-insurance-interior-office-branding.jpeg',
      '/images/impact/impact-life-insurance-branded-glass-doors.jpeg',
      '/images/impact/impact-life-insurance-branded-entrance.jpeg',
      '/images/impact/impact-life-insurance-storefront-glass.jpeg',
      '/images/impact/impact-life-insurance-window-branding.jpeg',
      '/images/impact/impact-life-insurance-branded-office-window.jpeg',
      '/images/impact/impact-life-insurance-branded-t-shirt.jpeg',
      '/images/impact/impact-life-insurance-branded-apron.jpeg',
      '/images/impact/impact-life-insurance-signage-design.jpeg',
    ],
    desc: 'A comprehensive branding project for Impact Life Insurance, covering full office and signage branding, branded apparel, and printed insurance documentation materials.',
    challenge: 'Impact Life Insurance needed their physical spaces and client-facing materials to reflect a consistent, trustworthy brand identity. From the moment a client walked through the door to the materials they left with, every touchpoint had to communicate professionalism and reliability.',
    solution: 'We delivered a full branding package covering office signage, interior branding, branded T-shirts for staff, and professionally printed insurance books. Every element was produced to reinforce a coherent brand presence across both their workspace and client interactions.\n\nThe materials were installed and delivered across Impact Life Insurance\'s office locations nationwide, establishing a consistent brand environment from reception to the field.',
  },
  {
    id: 'multichoice',
    title: 'MultiChoice Ghana Branded Materials',
    category: 'Branded Merchandise',
    tags: ['Corporate Stationery', 'Branded Merchandise', 'Promotional Materials'],
    color: '#1A1A1A',
    accent: '#8AB4D8',
    image: '/images/multichoice/multichoice-dstv-ghana-branded-umbrellas.jpeg',
    gallery: [
      '/images/multichoice/multichoice-dstv-ghana-branded-umbrellas.jpeg',
    ],
    desc: 'A range of corporate stationery and promotional materials for MultiChoice Ghana designed to support both internal operations and outward-facing brand engagement.',
    challenge: 'MultiChoice Ghana required branded materials that could serve across multiple functions from formal corporate correspondence to high-visibility promotional activations, all while maintaining the standards expected of a leading pan-African media brand.',
    solution: 'We produced a comprehensive suite including branded letterheads, promotional T-shirts, caps, and pull-up banners, each item executed with vibrant colour accuracy and consistent application of the MultiChoice brand identity.\n\nAll materials were delivered on schedule and deployed across MultiChoice Ghana\'s corporate and promotional activities.',
  },
  {
    id: 'gift-sets',
    title: 'Corporate Gift Sets',
    category: 'Corporate Gifting',
    tags: ['Corporate Gifting', 'Branded Merchandise'],
    color: '#0F172A',
    accent: '#94A3B8',
    image: '/images/gift-set/corporate-gift-sets-display-shelf.jpeg',
    gallery: [
      '/images/gift-set/corporate-gift-sets-display-shelf.jpeg',
      '/images/gift-set/corporate-gift-sets-black-collection.jpeg',
      '/images/gift-set/corporate-gift-sets-blue-collection.jpeg',
      '/images/gift-set/corporate-gift-sets-branded-notebooks-bottles.jpeg',
      '/images/gift-set/corporate-gift-sets-promotional-merchandise.jpeg',
      '/images/gift-set/corporate-gift-sets-executive-collection.jpeg',
    ],
  },
  {
    id: 'branded-apparel',
    title: 'Branded Apparel',
    category: 'Branded Apparel',
    tags: ['Branded Apparel', 'Promotional Merchandise'],
    color: '#1E3A5F',
    accent: '#7DAED4',
    image: '/images/brand-apparel/dstv-for-business-branded-polo-shirt.jpeg',
    gallery: [
      '/images/brand-apparel/dstv-for-business-branded-polo-shirt.jpeg',
      '/images/brand-apparel/dstv-branded-bucket-hat.jpeg',
      '/images/brand-apparel/samsung-galaxy-branded-sports-jersey.jpeg',
      '/images/brand-apparel/kfc-goes-green-awareness-t-shirt.jpeg',
      '/images/brand-apparel/coca-cola-branded-apparel-tote-bags.jpeg',
      '/images/brand-apparel/coca-cola-promotional-merchandise-display.jpeg',
      '/images/brand-apparel/kwese-fifa-world-cup-branded-apparel.jpeg',
    ],
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
