import './Trusted.css'

const logos = [
  { src: '/images/Company Logos/Bayport_Logo copy.webp', alt: 'Bayport' },
  { src: '/images/Company Logos/CSTS Logo copy.webp', alt: 'CSTS' },
  { src: '/images/Company Logos/Dennislaw Logo.webp', alt: 'Dennislaw' },
  { src: '/images/Company Logos/GrIDco.webp', alt: 'GRIDCo' },
  { src: '/images/Company Logos/gh-sic-logo.webp', alt: 'GH SIC' },
  { src: '/images/Company Logos/ImpactLife-Logo-gGxeuI3h copy.webp', alt: 'ImpactLife' },
  { src: '/images/Company Logos/Kfc_logo.webp', alt: 'KFC' },
  { src: '/images/Company Logos/multi-choice.webp', alt: 'MultiChoice' },
  { src: '/images/Company Logos/NIB-logo.webp', alt: 'NIB' },
  { src: '/images/Company Logos/NISHMAN-logo.webp', alt: 'Nishman' },
  { src: '/images/Company Logos/royal-house-logo.webp', alt: 'Royal House' },
  { src: '/images/Company Logos/royal-ladies-arise-and-shine-logo.webp', alt: 'Royal Ladies Arise and Shine' },
]

export default function Trusted() {
  return (
    <div className="trusted" data-reveal>
      <div className="container">
        <div className="trusted-inner">
          <span className="trusted-text">Trusted by <strong>200+</strong> customers across Ghana</span>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-set">
            {logos.map((logo, i) => (
              <img className="t-logo" key={i} src={logo.src} alt={logo.alt} loading="lazy" />
            ))}
          </div>
          <div className="marquee-set" aria-hidden="true">
            {logos.map((logo, i) => (
              <img className="t-logo" key={`dup-${i}`} src={logo.src} alt={logo.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
