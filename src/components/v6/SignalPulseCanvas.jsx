import React, { useEffect, useRef } from 'react'
import { fitCanvas, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const RING_EVERY = 95
const RING_LIFE = 190

/**
 * Concentric waves broadcasting outward from one side — "reaching out" —
 * tuned bright enough to read against the dark contact section instead
 * of the light-background alpha values the other canvases use.
 */
const SignalPulseCanvas = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let originX = 0
    let originY = 0
    let rings = []
    let frame = 0
    let nextRing = 0

    const build = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
      originX = W * 0.86
      originY = H * 0.32
      rings = []
      nextRing = 0
    }

    const step = () => {
      frame++
      nextRing--
      if (nextRing <= 0) {
        nextRing = RING_EVERY
        rings.push({ born: frame })
      }
      rings = rings.filter((r) => frame - r.born < RING_LIFE)
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const maxR = Math.hypot(W, H) * 0.62

      rings.forEach((r) => {
        const p = (frame - r.born) / RING_LIFE
        const radius = 10 + p * maxR
        const a = (1 - p) * 0.3
        ctx.beginPath()
        ctx.arc(originX, originY, radius, 0, 6.283)
        ctx.strokeStyle = `rgba(0,200,240,${a})`
        ctx.lineWidth = 1.4
        ctx.stroke()
      })

      const glow = ctx.createRadialGradient(originX, originY, 0, originX, originY, 10)
      glow.addColorStop(0, 'rgba(0,200,240,.9)')
      glow.addColorStop(1, 'rgba(0,200,240,0)')
      ctx.beginPath()
      ctx.arc(originX, originY, 10, 0, 6.283)
      ctx.fillStyle = glow
      ctx.fill()
    }

    build()
    const onResize = () => build()
    window.addEventListener('resize', onResize, { passive: true })

    if (prefersReducedMotion()) {
      for (let z = 0; z < 40; z++) step()
      draw()
      return () => window.removeEventListener('resize', onResize)
    }

    const stop = visibleLoop(cv, () => { step(); draw() })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default SignalPulseCanvas
