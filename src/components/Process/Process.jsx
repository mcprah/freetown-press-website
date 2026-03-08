import './Process.css'

const steps = [
  { num: '01', title: 'Consultation', desc: 'We understand your needs and brand requirements.' },
  { num: '02', title: 'Design & Proposal', desc: 'We provide tailored solutions and cost estimates.' },
  { num: '03', title: 'Production', desc: 'We execute with precision and quality control.' },
  { num: '04', title: 'Delivery & Support', desc: 'We deliver on time with ongoing support.' },
]

const Arrow = () => (
  <div className="step-arrow">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </div>
)

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">How We Work</span>
          <h2>Our Process</h2>
          <p>A streamlined approach ensuring quality, transparency, and on-time delivery.</p>
        </div>
        <div className="steps" data-reveal-stagger>
          {steps.map((s, i) => (
            <div className="step-wrapper" key={s.num}>
              <div className="step">
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
