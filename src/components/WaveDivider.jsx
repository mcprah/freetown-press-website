const waves = {
  soft: 'M0,40 C360,100 720,0 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z',
  gentle: 'M0,60 C240,20 480,80 720,50 C960,20 1200,70 1440,40 L1440,100 L0,100 Z',
  flowing: 'M0,50 C180,80 360,20 540,50 C720,80 900,20 1080,50 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z',
}

export default function WaveDivider({ from = '#fff', to = '#fff', shape = 'soft', flip = false, height = 60 }) {
  return (
    <div style={{ position: 'relative', marginTop: -2, marginBottom: -2, lineHeight: 0, overflow: 'hidden', background: to }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height,
          transform: flip ? 'scaleY(-1)' : undefined,
        }}
        fill="none"
      >
        <path d={waves[shape] || waves.soft} fill={from} />
      </svg>
    </div>
  )
}
