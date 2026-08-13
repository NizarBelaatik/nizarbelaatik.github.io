import React, { useEffect, useRef } from 'react'

/** Gradient progress rail pinned to the top of the viewport. */
const ScrollProgress = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0
      el.style.width = `${pct}%`
      el.classList.toggle('on', window.scrollY > 4)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div id="bar" ref={ref} />
}

export default ScrollProgress
