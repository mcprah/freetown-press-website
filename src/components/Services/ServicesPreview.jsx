import { Link } from 'react-router-dom'
import { services } from './servicesData'
import './Services.css'

export default function ServicesPreview() {
  return (
    <section className="services services--preview" id="services">
      <div className="container">
        <div className="services-preview-head" data-reveal>
          <div>
            <span className="label">Our Core Services</span>
            <h2>One Partner for Your Brand and Business</h2>
          </div>
          <p>Strategy, production, training, and supplies delivered with one standard of quality.</p>
        </div>

        <div className="services-preview-grid" data-reveal-stagger>
          {services.map((service) => (
            <Link className="service-preview" to={`/services#${service.id}`} key={service.id}>
              <img src={service.previewImage} alt={service.previewAlt} loading="lazy" decoding="async" />
              <span className="service-preview-shade" aria-hidden="true" />
              <span className="service-preview-icon" aria-hidden="true">{service.icon}</span>
              <span className="service-preview-copy">
                <strong>{service.title}</strong>
                <span>Explore service</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="srv-cta" data-reveal>
          <Link to="/services" className="btn btn-dark">View All Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </section>
  )
}
