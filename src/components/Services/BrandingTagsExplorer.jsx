import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import './BrandingTagsExplorer.css'

const PREVIEW_WIDTH = 170
const OFFSET_X = 18
const OFFSET_Y = -60

export default function BrandingTagsExplorer({ tags }) {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const rafRef = useRef(0)
  const pendingPos = useRef(null)

  const [hoveredTag, setHoveredTag] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [selectedTag, setSelectedTag] = useState(null)
  const [isCoarse, setIsCoarse] = useState(false)

  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarse(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  const schedulePosition = useCallback((clientX, clientY) => {
    pendingPos.current = { clientX, clientY }
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0
      const data = pendingPos.current
      const el = containerRef.current
      if (!data || !el) return
      let x = data.clientX + OFFSET_X
      if (x + PREVIEW_WIDTH > window.innerWidth - 8) {
        x = data.clientX - PREVIEW_WIDTH - OFFSET_X
      }
      let y = data.clientY + OFFSET_Y
      if (y < 8) y = 8
      setPos({ x, y })
    })
  }, [])

  const onMouseMove = (e) => {
    if (isCoarse || !hoveredTag) return
    schedulePosition(e.clientX, e.clientY)
  }

  const onTagEnter = (tag, e) => {
    if (isCoarse) return
    setHoveredTag(tag)
    schedulePosition(e.clientX, e.clientY)
  }

  const onTagLeave = () => {
    if (isCoarse) return
    setHoveredTag(null)
  }

  const goTo = (tag) => {
    const path = tag.portfolioId ? `/portfolio/${tag.portfolioId}` : '/portfolio'
    navigate(path, { state: { from: '/#services' } })
  }

  const onTagClick = (tag) => {
    setHoveredTag(null)
    if (isCoarse) {
      setSelectedTag((prev) => (prev?.slug === tag.slug ? null : tag))
    } else {
      goTo(tag)
    }
  }

  const onViewMore = () => {
    if (selectedTag) goTo(selectedTag)
  }

  return (
    <div className="bte" ref={containerRef} onMouseMove={onMouseMove}>
      <div className="bte-tags">
        {tags.map((t) => {
          const isSelected = selectedTag?.slug === t.slug
          return (
            <button
              key={t.slug}
              type="button"
              className={`bte-tag${isSelected ? ' bte-tag--active' : ''}`}
              onMouseEnter={(e) => onTagEnter(t, e)}
              onMouseLeave={onTagLeave}
              onClick={() => onTagClick(t)}
              aria-label={isCoarse ? `Preview ${t.label}` : `View ${t.label} portfolio`}
              aria-expanded={isCoarse ? isSelected : undefined}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {isCoarse && selectedTag && (
        <div className="bte-mobile-preview" role="region" aria-label={`${selectedTag.label} preview`}>
          <img className="bte-mobile-preview-img" src={selectedTag.image} alt={selectedTag.label} />
          <div className="bte-mobile-preview-body">
            <span className="bte-mobile-preview-label">{selectedTag.label}</span>
            <button type="button" className="bte-mobile-preview-cta" onClick={onViewMore}>
              View more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {!isCoarse && hoveredTag && createPortal(
        <div
          className="bte-preview"
          style={{ left: pos.x, top: pos.y }}
          aria-hidden="true"
        >
          <img src={hoveredTag.image} alt="" />
        </div>,
        document.body
      )}
    </div>
  )
}
