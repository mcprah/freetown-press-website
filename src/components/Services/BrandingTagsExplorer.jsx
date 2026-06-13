import { Link } from 'react-router-dom'
import './BrandingTagsExplorer.css'

export default function BrandingTagsExplorer({ tags, returnTo = '/services' }) {
  return (
    <div className="bte" aria-label="Service examples">
      {tags.map((tag) => {
        const hasImage = Boolean(tag.image)
        const className = [
          'bte-tile',
          hasImage ? 'bte-tile--image' : 'bte-tile--text',
          tag.portfolioId ? 'bte-tile--link' : '',
          tag.imageFit === 'contain' ? 'bte-tile--contain' : '',
        ].filter(Boolean).join(' ')

        const content = (
          <>
            {hasImage && (
              <>
                <img
                  src={tag.image}
                  alt={tag.alt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectFit: tag.imageFit || 'cover',
                    objectPosition: tag.imagePosition || 'center',
                  }}
                />
                <span className="bte-tile-shade" aria-hidden="true" />
              </>
            )}
            <span className="bte-tile-label">{tag.label}</span>
            {tag.portfolioId && (
              <span className="bte-tile-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            )}
          </>
        )

        return tag.portfolioId ? (
          <Link
            className={className}
            key={tag.slug}
            to={`/portfolio/${tag.portfolioId}`}
            state={{ from: returnTo }}
            aria-label={`View ${tag.label} portfolio example`}
          >
            {content}
          </Link>
        ) : (
          <div className={className} key={tag.slug}>
            {content}
          </div>
        )
      })}
    </div>
  )
}
