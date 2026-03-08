import { useState, useRef } from 'react'
import './Quote.css'

const benefits = [
  'Free consultation & quote',
  'Response within 24 hours',
  'No obligation, transparent pricing',
  'Dedicated project manager',
]

export default function Quote() {
  const fileRef = useRef(null)
  const [btnText, setBtnText] = useState('Submit Quote Request')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnStyle, setBtnStyle] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('Submitting...')
    setBtnDisabled(true)
    setTimeout(() => {
      setBtnText('Quote Request Sent!')
      setBtnStyle({ background: '#22c55e' })
      setTimeout(() => {
        setBtnText('Submit Quote Request')
        setBtnStyle({})
        setBtnDisabled(false)
        e.target.reset()
      }, 2500)
    }, 1200)
  }

  return (
    <section className="quote" id="quote">
      <div className="container">
        <div className="quote-grid">
          <div className="quote-left" data-reveal="left">
            <span className="label">Get Started</span>
            <h2>Let&apos;s Bring Your Project to Life</h2>
            <p>Tell us what you need and our team will respond promptly with a tailored quotation.</p>
            {benefits.map((b) => (
              <div className="qbenefit" key={b}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                {b}
              </div>
            ))}
          </div>
          <div className="quote-form" data-reveal="right">
            <h3>Request Your Free Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="frow">
                <div className="fgroup"><label>Full Name *</label><input type="text" placeholder="Your full name" required /></div>
                <div className="fgroup"><label>Company Name</label><input type="text" placeholder="Your company" /></div>
              </div>
              <div className="frow">
                <div className="fgroup"><label>Email *</label><input type="email" placeholder="you@company.com" required /></div>
                <div className="fgroup"><label>Phone *</label><input type="tel" placeholder="0244 069 157" required /></div>
              </div>
              <div className="fgroup">
                <label>Service Required *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Corporate Branding &amp; Marketing</option>
                  <option>Printing &amp; Corporate Merchandise</option>
                  <option>Professional Training</option>
                  <option>Business Supplies</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <div className="fgroup">
                <label>Project Details *</label>
                <textarea placeholder="Tell us about your project..." required></textarea>
              </div>
              <div className="fgroup">
                <label>Upload Artwork (Optional)</label>
                <div className="upload-area" onClick={() => fileRef.current?.click()}>
                  <p>Click to upload or <span>browse files</span></p>
                  <p>PDF, AI, PSD, JPG, PNG</p>
                </div>
                <input type="file" ref={fileRef} style={{ display: 'none' }} accept=".pdf,.ai,.psd,.jpg,.jpeg,.png" />
              </div>
              <button type="submit" className="btn btn-dark submit-btn" disabled={btnDisabled} style={btnStyle}>{btnText}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
