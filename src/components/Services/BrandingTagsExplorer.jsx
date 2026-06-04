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

  const onTagClick = (tag) => {
    setHoveredTag(null)
    navigate(tag.portfolioId ? `/portfolio/${tag.portfolioId}` : '/portfolio')
  }

  return (
    <div className="bte" ref={containerRef} onMouseMove={onMouseMove}>
      <div className="bte-tags">
        {tags.map((t) => (
          <button
            key={t.slug}
            type="button"
            className="bte-tag"
            onMouseEnter={(e) => onTagEnter(t, e)}
            onMouseLeave={onTagLeave}
            onClick={() => onTagClick(t)}
            aria-label={`View ${t.label} portfolio`}
          >
            {t.label}
          </button>
        ))}
      </div>

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
