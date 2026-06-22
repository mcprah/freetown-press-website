import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', padding: '160px 24px 100px', textAlign: 'center' }}>
      <span className="label">404</span>
      <h1 style={{ marginBottom: 16 }}>Page not found</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 28 }}>
        The page you requested may have moved or no longer exists.
      </p>
      <Link to="/" className="btn btn-dark">Return to Home</Link>
    </main>
  )
}

