import './Portfolio.css'

export const projects = [
  {
    id: 'gridco',
    title: 'GRIDCo Annual Report',
    category: 'Print Design',
    tags: ['Annual Report', 'Layout Design', 'Infographics'],
    color: '#0F172A',
    accent: '#4A8BD9',
    logo: '/images/Company Logos/GrIDco.webp',
    image: null,
    desc: 'A comprehensive annual report designed to communicate GRIDCo\'s operational milestones, financial performance, and strategic vision to stakeholders with clarity and impact.',
    challenge: 'GRIDCo needed an annual report that could distill complex energy infrastructure data into an accessible, visually engaging format. The report had to serve multiple audiences — from government officials to industry partners — while maintaining the authority expected of a national utility.',
    solution: 'We developed a structured editorial layout that balances dense information with generous white space and custom infographics. A restrained colour palette anchored by deep navy and the GRIDCo blue lends institutional credibility, while data visualisations make performance metrics immediately scannable.',
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
    desc: 'A full-scale brand activation campaign for KFC Ghana, spanning outdoor signage, promotional merchandise, and event branding materials that brought the iconic brand to life across multiple touchpoints.',
    challenge: 'KFC required a cohesive brand activation that would maintain global brand consistency while resonating with the Ghanaian market. Every touchpoint — from parasols to banners — needed to feel unmistakably KFC while being adapted for local events and outdoor conditions.',
    solution: 'We produced a complete suite of branded materials including custom parasols, pull-up banners, branded tents, and event signage. Each piece was produced with weather-resistant materials and vibrant colour reproduction to ensure the signature KFC red remained bold and consistent across all formats.',
  },
  {
    id: 'nib',
    title: 'NIB Corporate Identity',
    category: 'Branding',
    tags: ['Brand Identity', 'Stationery', 'Brand Guidelines'],
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
    desc: 'A refined corporate identity system for National Investment Bank, establishing a cohesive visual language across all banking communications and customer touchpoints.',
    challenge: 'NIB needed to modernise their visual identity to reflect a forward-thinking financial institution while preserving the trust and heritage built over decades. The new identity had to work seamlessly across print, digital, and environmental applications.',
    solution: 'We crafted a comprehensive brand guidelines document and stationery suite that bridges tradition and modernity. The deep navy palette conveys stability, while refined typography and clean layouts signal a progressive banking experience.',
  },
  {
    id: 'multichoice',
    title: 'MultiChoice Campaign',
    category: 'Marketing Collateral',
    tags: ['Campaign Design', 'Print Collateral', 'Large Format'],
    color: '#0C4A6E',
    accent: '#38BDF8',
    logo: '/images/Company Logos/multi-choice.webp',
    image: null,
    desc: 'A multi-channel marketing campaign for MultiChoice Ghana, delivering print and large-format collateral that drove subscriber engagement and brand visibility.',
    challenge: 'MultiChoice required campaign materials that could work across diverse formats — from intimate flyers to large-format outdoor displays — while maintaining visual consistency and impact at every scale.',
    solution: 'We designed a flexible campaign system with modular layouts that scale beautifully from A5 flyers to billboard-sized banners. Bold imagery paired with clean typographic hierarchy ensures the message cuts through at any distance.',
  },
  {
    id: 'bayport',
    title: 'Bayport Financial Stationery',
    category: 'Corporate Print',
    tags: ['Stationery', 'Corporate Materials', 'Business Cards'],
    color: '#14532D',
    accent: '#86EFAC',
    logo: '/images/Company Logos/Bayport_Logo copy.webp',
    image: null,
    desc: 'A premium corporate stationery suite for Bayport Financial Services, reinforcing their professional image through meticulously crafted print materials.',
    challenge: 'Bayport needed stationery that conveyed the professionalism and trustworthiness essential in financial services, while differentiating from the sea of generic corporate materials in the sector.',
    solution: 'We delivered a refined stationery suite featuring premium card stock, embossed finishes, and a considered colour application that elevates everyday business materials into brand-building touchpoints.',
  },
  {
    id: 'dennislaw',
    title: 'Dennislaw Rebrand',
    category: 'Brand Identity',
    tags: ['Rebranding', 'Logo Design', 'Visual Identity'],
    color: '#581C87',
    accent: '#D8B4FE',
    logo: '/images/Company Logos/Dennislaw Logo.webp',
    image: null,
    desc: 'A complete rebrand for Dennislaw, transforming their visual identity to reflect their evolution as a leading legal publishing and consulting firm.',
    challenge: 'Dennislaw had outgrown its original identity. The rebrand needed to honour the firm\'s legacy in legal publishing while signalling a bold new direction and expanded service offering.',
    solution: 'We developed a new visual identity anchored by a distinctive logomark that balances authority with approachability. The rich purple palette distinguishes Dennislaw from competitors while communicating the firm\'s expertise and innovation.',
  },
]

export function PortfolioCard({ project, onSelect }) {
  return (
    <div
      className="pf-card"
      style={{ '--card-color': project.color, '--card-accent': project.accent }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
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

export default function Portfolio({ onSelectProject, onViewAll }) {
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
            <PortfolioCard key={p.id} project={p} onSelect={onSelectProject} />
          ))}
        </div>
        <div className="pf-view-all" data-reveal>
          <button className="pf-view-all-btn" onClick={onViewAll}>
            View All Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
