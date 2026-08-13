import React, { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'

/** Fixed corner button, fades in once the page has scrolled a bit. */
const BackToTop = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const onScroll = () => {
      el.classList.toggle('on', window.scrollY > 560)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" id="totop" ref={ref} onClick={scrollToTop} aria-label="Back to top">
      <ArrowUp size={17} strokeWidth={2} />
    </button>
  )
}

export default BackToTop
