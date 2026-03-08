import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </span>
              <span>Number 1 Branding Partner</span>
            </div>
            <h1>Elevating Brands. Delivering <span style={{ color: 'var(--primary)' }}>Excellence.</span></h1>
            <p className="hero-sub">Freetown Press is your trusted partner for corporate branding, premium printing, professional training, and quality supplies across Ghana.</p>
            <div className="hero-buttons">
              <a href="#quote" className="btn btn-dark">Get a Free Quote <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="#services" className="btn btn-outline">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-blobs">
        <svg className="blob blob-1" viewBox="0 0 600 600"><path d="M300,520C450,520 560,400 560,300C560,200 480,80 300,80C120,80 40,200 40,300C40,400 150,520 300,520Z"/></svg>
        <svg className="blob blob-2" viewBox="0 0 600 600"><path d="M300,510C420,510 530,420 530,300C530,180 440,90 300,90C160,90 70,180 70,300C70,420 180,510 300,510Z"/></svg>
        <svg className="blob blob-3" viewBox="0 0 600 600"><path d="M300,500C460,500 540,380 540,300C540,220 460,100 300,100C140,100 60,220 60,300C60,380 140,500 300,500Z"/></svg>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ height: 60 }} fill="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z" fill="#fff"/>
        </svg>
      </div>
    </section>
  )
}
