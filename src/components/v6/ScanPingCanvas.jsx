import React, { useEffect, useRef } from 'react'
import { fitCanvas, mixBrandColor, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const SOURCES = 3
const PING_EVERY = 130 // frames between pings per source
const PING_LIFE = 150 // frames a ring lives

/**
 * A handful of points quietly pinging outward, like a verification check
 * or a radar confirming something is real — fitting for a wall of
 * credentials rather than a literal badge/seal graphic.
 */
const ScanPingCanvas = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let sources = []
    let rings = []
    let frame = 0

    const rand = (a, b) => a + Math.random() * (b - a)

    const build = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
      sources = Array.from({ length: SOURCES }, (_, i) => ({
        x: W * (0.12 + (i / Math.max(1, SOURCES - 1)) * 0.76 + rand(-0.05, 0.05)),
        y: H * rand(0.28, 0.72),
        tone: i / Math.max(1, SOURCES - 1),
        next: rand(0, PING_EVERY)
      }))
      rings = []
    }

    const step = () => {
      frame++
      sources.forEach((s) => {
        s.next--
        if (s.next <= 0) {
          s.next = rand(PING_EVERY * 0.7, PING_EVERY * 1.4)
          rings.push({ x: s.x, y: s.y, tone: s.tone, born: frame })
        }
      })
      rings = rings.filter((r) => frame - r.born < PING_LIFE)
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      sources.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2.2, 0, 6.283)
        ctx.fillStyle = mixBrandColor(s.tone, 0.55)
        ctx.fill()
      })

      rings.forEach((r) => {
        const p = (frame - r.born) / PING_LIFE
        const radius = 6 + p * 92
        const a = (1 - p) * 0.4
        ctx.beginPath()
        ctx.arc(r.x, r.y, radius, 0, 6.283)
        ctx.strokeStyle = mixBrandColor(r.tone, a)
        ctx.lineWidth = 1.4
        ctx.stroke()
      })

      ctx.save()
      ctx.globalCompositeOperation = 'destination-in'
      const fadeX = ctx.createLinearGradient(0, 0, W, 0)
      fadeX.addColorStop(0, 'rgba(0,0,0,0)')
      fadeX.addColorStop(0.1, 'rgba(0,0,0,1)')
      fadeX.addColorStop(0.9, 'rgba(0,0,0,1)')
      fadeX.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = fadeX
      ctx.fillRect(0, 0, W, H)
      const fadeY = ctx.createLinearGradient(0, 0, 0, H)
      fadeY.addColorStop(0, 'rgba(0,0,0,0)')
      fadeY.addColorStop(0.15, 'rgba(0,0,0,1)')
      fadeY.addColorStop(0.85, 'rgba(0,0,0,1)')
      fadeY.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = fadeY
      ctx.fillRect(0, 0, W, H)
      ctx.restore()
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

export default ScanPingCanvas
