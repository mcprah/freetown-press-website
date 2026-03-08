import './Trusted.css'

const clients = ['GoldStar Corp', 'Accra Metro', 'KumasiBrew', 'CoastLine Ltd', 'AshGold Media']

export default function Trusted() {
  return (
    <div className="trusted" data-reveal>
      <div className="container">
        <div className="trusted-inner">
          <span className="trusted-text">Trusted by <strong>200+</strong> customers across Ghana</span>
          <div className="trusted-logos">
            {clients.map((name) => (
              <span className="t-logo" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
