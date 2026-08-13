import React, { useEffect, useRef } from 'react'
import { isTouch, prefersReducedMotion } from './useReveal'

/**
 * Soft blue light that eases toward the cursor inside `containerRef`.
 * Skipped entirely on touch and reduced-motion.
 */
const CursorGlow = ({ containerRef }) => {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    const host = containerRef?.current
    if (!glow || !host) return undefined
    if (isTouch() || prefersReducedMotion()) return undefined

    let raf = null
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const follow = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      glow.style.transform = `translate3d(${cx}px,${cy}px,0)`
      raf = Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(follow) : null
    }

    const onMove = (e) => {
      const r = host.getBoundingClientRect()
      tx = e.clientX - r.left
      ty = e.clientY - r.top
      if (!raf) raf = requestAnimationFrame(follow)
    }
    const onEnter = () => { glow.style.opacity = '1' }
    const onLeave = () => { glow.style.opacity = '0' }

    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseenter', onEnter)
    host.addEventListener('mouseleave', onLeave)

    return () => {
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseenter', onEnter)
      host.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef])

  return <div id="glow" ref={glowRef} aria-hidden="true" />
}

export default CursorGlow
