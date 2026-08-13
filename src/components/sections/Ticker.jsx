import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { prefersReducedMotion } from '../v6/useReveal'

const AUTO_SPEED = 0.45 // px/frame

/**
 * Marquee strip under the hero. Auto-scrolls continuously, pauses on
 * hover, and can be grabbed and dragged side to side to browse at your
 * own pace — position is driven by rAF + pointer events rather than a
 * CSS keyframe so dragging can take over mid-scroll without a jump.
 */
const Ticker = () => {
  const { t, i18n } = useTranslation()
  const items = t('v6.ticker', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  const hostRef = useRef(null)
  const rowRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    const row = rowRef.current
    if (!host || !row) return undefined

    let halfWidth = row.scrollWidth / 2
    let offset = 0
    let raf = null
    let isDragging = false
    let hovering = false
    let dragStartX = 0
    let dragStartOffset = 0
    let moved = false

    const measure = () => { halfWidth = row.scrollWidth / 2 }

    // the strip is two copies of the same list back to back — wrapping the
    // offset by exactly one copy's width in either direction is seamless
    const apply = () => {
      if (halfWidth > 0) {
        while (offset <= -halfWidth) offset += halfWidth
        while (offset > 0) offset -= halfWidth
      }
      row.style.transform = `translate3d(${offset}px,0,0)`
    }

    const tick = () => {
      if (!isDragging && !hovering && !prefersReducedMotion()) offset -= AUTO_SPEED
      apply()
      raf = requestAnimationFrame(tick)
    }

    const onEnter = () => { hovering = true }
    const onLeave = () => { hovering = false }

    const onPointerDown = (e) => {
      isDragging = true
      moved = false
      dragStartX = e.clientX
      dragStartOffset = offset
      setDragging(true)
    }
    const onPointerMove = (e) => {
      if (!isDragging) return
      const dx = e.clientX - dragStartX
      if (Math.abs(dx) > 3) moved = true
      offset = dragStartOffset + dx
    }
    // a drag that barely moved was a click on a span — let it be
    const onClickCapture = (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation() }
    }
    const endDrag = () => {
      if (!isDragging) return
      isDragging = false
      setDragging(false)
    }

    const onResize = () => measure()

    host.addEventListener('pointerenter', onEnter)
    host.addEventListener('pointerleave', onLeave)
    host.addEventListener('pointerdown', onPointerDown)
    host.addEventListener('click', onClickCapture, true)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', endDrag)
    window.addEventListener('pointercancel', endDrag)
    window.addEventListener('resize', onResize, { passive: true })

    raf = requestAnimationFrame(tick)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      host.removeEventListener('pointerenter', onEnter)
      host.removeEventListener('pointerleave', onLeave)
      host.removeEventListener('pointerdown', onPointerDown)
      host.removeEventListener('click', onClickCapture, true)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('pointercancel', endDrag)
      window.removeEventListener('resize', onResize)
    }
  }, [i18n.language])

  return (
    <div className={`ticker${dragging ? ' dragging' : ''}`} ref={hostRef}>
      <div className="row" ref={rowRef}>
        {[0, 1].map((pass) => list.map((item, i) => <span key={`${pass}-${i}`}>{item}</span>))}
      </div>
    </div>
  )
}

export default Ticker
