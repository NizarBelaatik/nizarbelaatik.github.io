import React, { useEffect, useRef } from 'react'
import { fitCanvas, mixBrandColor, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const RINGS = [
  { count: 5, speed: 0.00022 },
  { count: 8, speed: -0.00015 },
  { count: 11, speed: 0.0001 }
]
const LINK_DIST = 90

/**
 * Concepts orbiting and occasionally connecting — a knowledge graph
 * rather than a literal diploma/certificate motif, drifting slowly
 * behind the education timeline.
 */
const OrbitGraphCanvas = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let nodes = []

    const build = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
      const cx = W * 0.72
      const cy = H * 0.46
      const maxR = Math.min(W, H) * 0.62
      nodes = []
      RINGS.forEach((ring, ri) => {
        const r = maxR * ((ri + 1) / RINGS.length)
        for (let i = 0; i < ring.count; i++) {
          nodes.push({
            cx,
            cy,
            r: r * (0.88 + Math.random() * 0.24),
            a0: (i / ring.count) * Math.PI * 2,
            speed: ring.speed * (0.85 + Math.random() * 0.3),
            tone: ri / (RINGS.length - 1),
            size: 1.6 + Math.random() * 1.6,
            twinklePh: Math.random() * 10
          })
        }
      })
    }

    const posOf = (n, t) => {
      const a = n.a0 + n.speed * t
      return [n.cx + Math.cos(a) * n.r, n.cy + Math.sin(a) * n.r * 0.62]
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H)

      const pts = nodes.map((n) => posOf(n, t))

      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const [ax, ay] = pts[i]
          const [bx, by] = pts[j]
          const d = Math.hypot(ax - bx, ay - by)
          if (d < LINK_DIST) {
            ctx.strokeStyle = mixBrandColor((nodes[i].tone + nodes[j].tone) / 2, (1 - d / LINK_DIST) * 0.22)
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((n, i) => {
        const [x, y] = pts[i]
        const twinkle = Math.sin(t * 0.0016 + n.twinklePh) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(x, y, n.size * twinkle, 0, 6.283)
        ctx.fillStyle = mixBrandColor(n.tone, 0.55 * twinkle)
        ctx.fill()
      })

      // vignette, all four edges
      ctx.save()
      ctx.globalCompositeOperation = 'destination-in'
      const fadeX = ctx.createLinearGradient(0, 0, W, 0)
      fadeX.addColorStop(0, 'rgba(0,0,0,0)')
      fadeX.addColorStop(0.12, 'rgba(0,0,0,1)')
      fadeX.addColorStop(0.9, 'rgba(0,0,0,1)')
      fadeX.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = fadeX
      ctx.fillRect(0, 0, W, H)
      const fadeY = ctx.createLinearGradient(0, 0, 0, H)
      fadeY.addColorStop(0, 'rgba(0,0,0,0)')
      fadeY.addColorStop(0.14, 'rgba(0,0,0,1)')
      fadeY.addColorStop(0.86, 'rgba(0,0,0,1)')
      fadeY.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = fadeY
      ctx.fillRect(0, 0, W, H)
      ctx.restore()
    }

    build()
    const onResize = () => build()
    window.addEventListener('resize', onResize, { passive: true })

    if (prefersReducedMotion()) {
      draw(4000)
      return () => window.removeEventListener('resize', onResize)
    }

    const stop = visibleLoop(cv, () => draw(performance.now()))

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default OrbitGraphCanvas
