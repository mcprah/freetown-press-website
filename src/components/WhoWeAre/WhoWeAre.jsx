import './WhoWeAre.css'

const checks = ['Corporate-Focused', 'Creative & Strategic', 'End-to-End Service', 'Nationwide Reach']

export default function WhoWeAre() {
  return (
    <section className="who" id="who">
      <div className="container">
        <div className="who-grid">
          <div className="who-img" data-reveal="left"><img src="/images/who-we-are.webp" alt="Freetown Press team at work" /></div>
          <div className="who-content" data-reveal="right">
            <span className="label">Who We Are</span>
            <h2>Your One-Stop Corporate Solutions Partner</h2>
            <p>Freetown Press is a full-service corporate solutions company specializing in branding, marketing support, high-quality printing, corporate souvenirs, professional training, and business supplies.</p>
            <p>We serve startups, SMEs, corporates, NGOs, and institutions across Ghana with precision, creativity, and professionalism.</p>
            <div className="checks" data-reveal-stagger>
              {checks.map((c) => (
                <div className="check" key={c}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
