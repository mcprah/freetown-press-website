import { useEffect } from 'react'
import './BlogPost.css'

export default function BlogPost({ post, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <article className="blog-post">
      <div className="bp-hero">
        <img src={post.img} alt={post.title} />
        <div className="bp-hero-overlay" />
        <div className="bp-hero-content container">
          <button className="bp-back" onClick={onBack} aria-label="Back to blog">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blog
          </button>
          <span className="bp-cat">{post.cat}</span>
          <h1>{post.title}</h1>
          <div className="bp-meta">
            <time>{post.date}</time>
            <span className="bp-dot" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="bp-body container">
        <div className="bp-content">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'p') return <p key={i}>{block.text}</p>
            if (block.type === 'list') return (
              <ul key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )
            return null
          })}

          <div className="bp-cta">
            <h3>Ready to get started?</h3>
            <p>Talk to our team about your project.</p>
            <a href="#quote" className="btn btn-dark" onClick={onBack}>
              Request a Free Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
