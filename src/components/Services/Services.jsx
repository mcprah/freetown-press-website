import BrandingTagsExplorer from './BrandingTagsExplorer'
import './Services.css'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'Corporate Branding & Marketing',
    desc: 'We build strong, memorable brands through strategic design and marketing support that communicate clearly and confidently.',
    tagPreviews: [
      { slug: 'logo-design', label: 'Logo Design', image: '/images/Company Logos/Dennislaw Logo.webp', alt: 'DennisLaw logo design', portfolioId: 'dennislaw', imageFit: 'contain' },
      { slug: 'brand-identity', label: 'Brand Identity', image: '/images/hero-image-printing.webp', alt: 'A coordinated collection of Freetown Press branded materials' },
      { slug: 'brochures', label: 'Brochures', image: '/images/company-souvenirs.webp', alt: 'Printed corporate collateral arranged with branded merchandise', imagePosition: '32% center' },
      { slug: 'social-media', label: 'Social Media', image: '/images/kfc/kfc-coffee-promotional-graphic.jpeg', alt: 'KFC promotional campaign graphic', portfolioId: 'kfc' },
      { slug: 'event-branding', label: 'Event Branding', image: '/images/dennislaw-backdrop-freetown.webp', alt: 'DennisLaw branded event backdrop', portfolioId: 'dennislaw' },
      { slug: 'rebranding', label: 'Rebranding' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="3" width="12" height="18" rx="1"/><path d="M6 7h12M6 11h12M6 15h12"/></svg>,
    title: 'Premium Printing & Corporate Merchandise',
    desc: 'High-quality printing and customised corporate items crafted to leave a lasting impression.',
    tagPreviews: [
      { slug: 'business-cards', label: 'Business Cards', image: '/images/company-souvenirs.webp', alt: 'Printed business cards arranged with corporate stationery', imagePosition: '20% 72%' },
      { slug: 'banners', label: 'Banners', image: '/images/sic-insurance-pullups.webp', alt: 'SIC Insurance branded pull-up banner', portfolioId: 'sic' },
      { slug: 'branded-apparel', label: 'Branded Apparel', image: '/images/brand-apparel/dstv-for-business-branded-polo-shirt.jpeg', alt: 'DStv for Business branded polo shirt', portfolioId: 'branded-apparel' },
      { slug: 'gift-sets', label: 'Gift Sets', image: '/images/ghana-bar/ghana-bar-association-conference-gift-set.jpeg', alt: 'Ghana Bar Association conference gift set', portfolioId: 'gba' },
      { slug: 'annual-reports', label: 'Annual Reports' },
      { slug: 'id-cards', label: 'ID Cards' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Professional Training',
    desc: 'Practical, industry-relevant programs designed to build skills that stick.',
    tagPreviews: [
      { slug: 'branding-strategy', label: 'Branding Strategy', alt: 'Team reviewing brand materials together' },
      { slug: 'customer-service', label: 'Customer Service' },
      { slug: 'leadership', label: 'Leadership' },
      { slug: 'sales-skills', label: 'Sales Skills' },
      { slug: 'communication', label: 'Communication' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-1"/></svg>,
    title: 'Business Supplies',
    desc: 'Reliable procurement and supply of high-quality operational materials with consistency and seamless fulfillment.',
    tagPreviews: [
      { slug: 'stationery', label: 'Stationery', image: '/images/bayport-notebook-freetown.webp', alt: 'Bayport branded corporate notebook', portfolioId: 'bayport' },
      { slug: 'event-supplies', label: 'Event Supplies', image: '/images/bayport-gazebo-freepress.webp', alt: 'Bayport branded event gazebo', portfolioId: 'bayport' },
      { slug: 'packaging', label: 'Packaging', image: '/images/gift-set/corporate-gift-sets-collection-10.jpeg', alt: 'Collection of packaged corporate gift sets', portfolioId: 'gift-sets' },
      { slug: 'bulk-orders', label: 'Bulk Orders', image: '/images/sic/sic-insurance-branded-print-materials.jpeg', alt: 'SIC Insurance branded print materials prepared as a coordinated order', portfolioId: 'sic' },
      { slug: 'toners', label: 'Toners' },
    ],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Our Core Services</span>
          <h2>Everything Your Brand Needs</h2>
          <p>From brand strategy to business supplies, we provide comprehensive solutions that help your brand and organisation thrive.</p>
        </div>
        <div className="srv-grid" data-reveal-stagger>
          {services.map((service) => (
            <article className="srv" key={service.title}>
              <div className="srv-copy">
                <div className="srv-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <BrandingTagsExplorer tags={service.tagPreviews} />
            </article>
          ))}
        </div>
        <div className="srv-cta" data-reveal>
          <a href="#quote" className="btn btn-dark">Get Started With Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    </section>
  )
}
