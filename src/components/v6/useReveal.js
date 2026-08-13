import { useEffect, useRef } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isTouch = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

/* One shared observer for every reveal on the page. Elements get the `in`
   class once they scroll into view, then stop being watched. */
const registry = new Map()

const getObserver = (key, options) => {
  if (registry.has(key)) return registry.get(key)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      e.target.classList.add('in')
      io.unobserve(e.target)
    })
  }, options)
  registry.set(key, io)
  return io
}

/**
 * Returns a ref to attach to any element that should get the `in` class
 * when it enters the viewport.
 */
export default function useReveal({ threshold = 0.12, rootMargin = '0px 0px -5% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      el.classList.add('in')
      return undefined
    }

    const io = getObserver(`${threshold}|${rootMargin}`, { threshold, rootMargin })
    io.observe(el)
    return () => io.unobserve(el)
  }, [threshold, rootMargin])

  return ref
}
