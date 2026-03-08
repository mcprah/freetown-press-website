import blogContent from '../../data/blogContent'
import './Blog.css'

export default function Blog({ onSelectPost }) {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Our Blog</span>
          <h2>Insights &amp; Resources</h2>
          <p>Marketing tips, branding insights, and print knowledge from our experts.</p>
        </div>
        <div className="blog-grid" data-reveal-stagger>
          {blogContent.map((p) => (
            <div className="bcard" key={p.slug} onClick={() => onSelectPost(p)} role="article">
              <div className="bcard-img">
                <span className="bcat">{p.cat}</span>
                <img src={p.img.replace('w=1200', 'w=600').replace('h=600', 'h=340')} alt={p.title} loading="lazy" />
              </div>
              <div className="bcard-body">
                <time>{p.date}</time>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="read-more" role="link" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onSelectPost(p)}>
                  Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
