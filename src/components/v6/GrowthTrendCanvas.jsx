import React, { useEffect, useRef } from 'react'
import { fitCanvas, mixBrandColor, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const VISIBLE = 130
const PX_PER_FRAME = 0.5
const MILESTONE_EVERY = 34 // roughly one "step up" per stretch, like a new role

/**
 * A line that climbs, steps up at intervals, and keeps scrolling — an
 * abstract "career trending up" instead of a literal chart. Small pulses
 * mark each step, like milestones on a timeline.
 */
const GrowthTrendCanvas = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let buffer = []
    let level = 0.3
    let tickCount = 0
    let pxAccum = 0
    let milestones = []

    const size = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
    }

    const nextValue = () => {
      tickCount++
      if (tickCount % MILESTONE_EVERY === 0) {
        level = Math.min(0.94, level + 0.14)
        milestones.push({ i: buffer.length, born: performance.now() })
      }
      level += (Math.random() - 0.46) * 0.02
      level = Math.max(0.08, Math.min(0.96, level))
      return level
    }

    const seed = () => {
      buffer = []
      level = 0.3
      tickCount = 0
      milestones = []
      for (let i = 0; i < VISIBLE; i++) buffer.push(nextValue())
      pxAccum = 0
    }

    const tick = () => {
      buffer.push(nextValue())
      buffer.shift()
      milestones.forEach((m) => { m.i-- })
      milestones = milestones.filter((m) => m.i >= 0)
    }

    const advance = () => {
      pxAccum += PX_PER_FRAME
      const spacing = W / (VISIBLE - 1)
      while (pxAccum >= spacing) { tick(); pxAccum -= spacing }
    }

    const mapY = (v) => {
      const pad = H * 0.16
      return H - pad - v * (H - pad * 2)
    }

    const draw = (now) => {
      const spacing = W / (VISIBLE - 1)
      const xAt = (i) => i * spacing - pxAccum

      ctx.clearRect(0, 0, W, H)

      const under = ctx.createLinearGradient(0, 0, 0, H)
      under.addColorStop(0, 'rgba(0,200,240,.14)')
      under.addColorStop(1, 'rgba(0,200,240,0)')
      ctx.beginPath()
      buffer.forEach((v, i) => {
        const x = xAt(i)
        const y = mapY(v)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.lineTo(xAt(buffer.length - 1), H)
      ctx.lineTo(xAt(0), H)
      ctx.closePath()
      ctx.fillStyle = under
      ctx.fill()

      const stroke = ctx.createLinearGradient(0, 0, W, 0)
      stroke.addColorStop(0, 'rgba(11,18,114,.75)')
      stroke.addColorStop(0.6, 'rgba(43,59,255,.8)')
      stroke.addColorStop(1, 'rgba(0,200,240,.85)')
      ctx.strokeStyle = stroke
      ctx.lineWidth = 1.8
      ctx.beginPath()
      buffer.forEach((v, i) => {
        const x = xAt(i)
        const y = mapY(v)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.stroke()

      milestones.forEach((m) => {
        if (m.i < 0 || m.i >= buffer.length) return
        const x = xAt(m.i)
        const y = mapY(buffer[m.i])
        const age = (now - m.born) / 1000
        const ring = 3 + (age % 2) * 7
        const a = Math.max(0, 0.5 - (age % 2) * 0.25)
        ctx.beginPath()
        ctx.arc(x, y, ring, 0, 6.283)
        ctx.strokeStyle = mixBrandColor(1, a)
        ctx.lineWidth = 1.3
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(x, y, 2.4, 0, 6.283)
        ctx.fillStyle = mixBrandColor(1, 0.9)
        ctx.fill()
      })

      // fade both edges into the page
      ctx.save()
      ctx.globalCompositeOperation = 'destination-in'
      const fade = ctx.createLinearGradient(0, 0, W, 0)
      fade.addColorStop(0, 'rgba(0,0,0,0)')
      fade.addColorStop(0.1, 'rgba(0,0,0,1)')
      fade.addColorStop(0.9, 'rgba(0,0,0,1)')
      fade.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = fade
      ctx.fillRect(0, 0, W, H)
      ctx.restore()
    }

    size()
    seed()

    const onResize = () => size()
    window.addEventListener('resize', onResize, { passive: true })

    if (prefersReducedMotion()) {
      for (let z = 0; z < VISIBLE; z++) tick()
      draw(2000)
      return () => window.removeEventListener('resize', onResize)
    }

    const stop = visibleLoop(cv, () => {
      advance()
      draw(performance.now())
    })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default GrowthTrendCanvas
