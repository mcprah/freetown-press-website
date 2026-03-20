import './About.css'

const values = [
  { name: 'Professionalism', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
  { name: 'Excellence', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg> },
  { name: 'Integrity', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: 'Innovation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
  { name: 'Reliability', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="label" data-reveal>About Us</span>
            <h2 data-reveal>Building Brands, Empowering Businesses</h2>
            <p className="about-text" data-reveal>Freetown Press was founded with one goal: to provide businesses and institutions with dependable, high-quality corporate solutions under one roof.</p>
            <p className="about-text" data-reveal>We understand that branding, communication materials, training, and operational supplies all contribute to how an organization is perceived and how efficiently it runs.</p>
            <div className="mv" data-reveal-stagger>
              <div className="mv-box">
                <span className="mv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg></span>
                <h4>Our Mission</h4>
                <p>To empower businesses with high-quality branding, printing, training, and supply solutions that enhance visibility and efficiency.</p>
              </div>
              <div className="mv-box">
                <span className="mv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></span>
                <h4>Our Vision</h4>
                <p>To become a leading corporate solutions provider in Ghana and across West Africa.</p>
              </div>
            </div>
            <div className="vals" data-reveal>
              <h3>Our Core Values</h3>
              <div className="val-list" data-reveal-stagger>
                {values.map((v) => (
                  <div className="val" key={v.name}>
                    <span className="val-icon">{v.icon}</span>
                    <span>{v.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-imgs">
            <div className="aimg1" data-reveal="right"><img src="/images/company-souvenirs.webp" alt="Freetown Press branded corporate souvenirs" loading="lazy" /></div>
            <div className="aimg2" data-reveal="right" data-delay="2"><img src="/images/freetown-workshop.webp" alt="Freetown Press workshop" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
