import './Blog.css'

const posts = [
  { cat: 'Branding', date: 'March 5, 2026', title: '5 Reasons Your Business Needs a Professional Brand Identity', desc: 'Why investing in professional branding is one of the smartest decisions for your growing business.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop&q=80' },
  { cat: 'Print Tips', date: 'February 20, 2026', title: 'The Complete Guide to Corporate Print Materials That Impress', desc: 'How to choose the right paper, finishes, and designs for lasting impact.', img: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&h=340&fit=crop&q=80' },
  { cat: 'Marketing', date: 'February 8, 2026', title: 'How Corporate Souvenirs Strengthen Client Relationships', desc: 'Branded gifts and merchandise that boost loyalty and keep your brand top of mind.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=340&fit=crop&q=80' },
]

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="label">Our Blog</span>
          <h2>Insights &amp; Resources</h2>
          <p>Marketing tips, branding insights, and print knowledge from our experts.</p>
        </div>
        <div className="blog-grid" data-reveal-stagger>
          {posts.map((p) => (
            <div className="bcard" key={p.title}>
              <div className="bcard-img">
                <span className="bcat">{p.cat}</span>
                <img src={p.img} alt={p.title} />
              </div>
              <div className="bcard-body">
                <time>{p.date}</time>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#" className="read-more">
                  Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
