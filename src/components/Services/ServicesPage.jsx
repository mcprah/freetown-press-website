import useReveal from '../../hooks/useReveal'
import Services from './Services'
import './Services.css'

export default function ServicesPage() {
  useReveal()

  return (
    <main className="services-page">
      <header className="services-page-hero">
        <img src="/images/hero-image-printing.webp" alt="" aria-hidden="true" />
        <span className="services-page-hero-shade" aria-hidden="true" />
        <div className="container services-page-hero-content">
          <span className="label">Services</span>
          <h1>Built to Make Your Brand Work Harder</h1>
          <p>From first idea to final delivery, we bring strategy, design, production, training, and dependable supply together under one roof.</p>
          <a className="btn btn-primary" href="/#quote">Discuss Your Project</a>
        </div>
      </header>

      <Services showHeader={false} />
    </main>
  )
}
