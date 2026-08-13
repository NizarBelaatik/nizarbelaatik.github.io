import React, { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './useReveal'

/** Counts up from 0 to `to` the first time it scrolls into view. */
const Counter = ({ to }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.textContent = to
      return undefined
    }

    let raf = null
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(e.target)
        const start = performance.now()
        const step = (now) => {
          const p = Math.min(1, (now - start) / 1200)
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      })
    }, { threshold: 0.6 })

    io.observe(el)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [to])

  return <span ref={ref}>0</span>
}

export default Counter
