import './Testimonials.css'

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
)

const testimonials = [
  {
    quote: 'Freetown Press transformed our entire brand identity. Their attention to detail and professionalism is unmatched.',
    initials: 'JK',
    name: 'Joana Kyeremateng',
    role: 'MD, AddenTech and DennisLaw',
  },
  {
    quote: 'The printing quality is outstanding and delivery is always on time. They\'ve become our go-to partner for all corporate materials.',
    initials: 'LD',
    name: 'Lauraine Darkwah',
    role: 'Lead Convener, Disputes Convocation',
  },
  {
    quote: 'Their training programs are engaging and practical. Our team came away with actionable skills we\'ve already started implementing.',
    initials: 'EO',
    name: 'Efua Owusu',
    role: 'HR Director, Accra Development Trust',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>Hear from businesses that trust Freetown Press.</p>
        </div>
        <div className="test-grid" data-reveal-stagger>
          {testimonials.map((t) => (
            <div className="tcard" key={t.initials}>
              <div className="stars" role="img" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="tcard-author">
                <div className="avatar">{t.initials}</div>
                <div><strong>{t.name}</strong><small>{t.role}</small></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
