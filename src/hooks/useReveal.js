import { useEffect, useCallback } from 'react'

export default function useReveal() {
  const observe = useCallback(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.revealed),[data-reveal-stagger]:not(.revealed)')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const cleanup = observe()

    const mo = new MutationObserver(() => observe())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      if (cleanup) cleanup()
      mo.disconnect()
    }
  }, [observe])
}
