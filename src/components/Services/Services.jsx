import BrandingTagsExplorer from './BrandingTagsExplorer'
import { services } from './servicesData'
import './Services.css'

export default function Services({ showHeader = true }) {
  return (
    <section className="services services--full" id="services-catalogue">
      <div className="container">
        {showHeader && (
          <div className="section-head" data-reveal>
            <span className="label">Our Core Services</span>
            <h2>Everything Your Brand Needs</h2>
            <p>From brand strategy to business supplies, we provide comprehensive solutions that help your brand and organisation thrive.</p>
          </div>
        )}
        <div className="srv-grid" data-reveal-stagger>
          {services.map((service) => (
            <article className="srv" id={service.id} key={service.title}>
              <div className="srv-copy">
                <div className="srv-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <BrandingTagsExplorer tags={service.tagPreviews} returnTo="/services" />
            </article>
          ))}
        </div>
        <div className="srv-cta" data-reveal>
          <a href="/#quote" className="btn btn-dark">Get Started With Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    </section>
  )
}
