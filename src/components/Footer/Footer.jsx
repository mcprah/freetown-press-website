import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft-grid">
          <div className="ft-brand">
            <a href="/#home" className="logo"><img src="/images/Freetown-Logo-Ico-Text-white.webp" alt="Freetown Press" /></a>
            <p>Your trusted partner for corporate branding, premium printing, professional training, and quality supplies across Ghana.</p>
            <div className="ft-social">
              <a href="https://facebook.com/freetownpress" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="https://instagram.com/freetownpress" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://x.com/freetownpress" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
              <a href="https://linkedin.com/company/freetownpress" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            </div>
          </div>
          <div className="ft-col">
            <h4>Services</h4>
            <a href="/services#branding-marketing">Corporate Branding</a>
            <a href="/services#printing-merchandise">Printing &amp; Merch</a>
            <a href="/services#professional-training">Professional Training</a>
            <a href="/services#business-supplies">Business Supplies</a>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <a href="/#about">About Us</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#blog">Blog</a>
            <a href="/#contact">Contact</a>
          </div>
          <div className="ft-col">
            <h4>Quick Links</h4>
            <a href="/#quote">Request a Quote</a>
            <a href="/services">Our Services</a>
          </div>
        </div>
        <div className="ft-bottom">
          <span>&copy; {new Date().getFullYear()} Freetown Press. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
