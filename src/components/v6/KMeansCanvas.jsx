import React, { useEffect, useRef } from 'react'
import { fitCanvas, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const COL = ['11,18,114', '43,59,255', '0,200,240', '90,107,255']
const K = 4

/**
 * Hero background: k-means running live on synthetic gaussian blobs.
 * Readouts are written straight to the HUD refs so the animation never
 * triggers a React render.
 */
const KMeansCanvas = ({ iterRef, inertiaRef, shiftRef }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let points = []
    let centroids = []
    let iter = 0
    let inertia = 0
    let shift = 0
    let frames = 0
    let hold = 0

    const size = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
    }

    // Box–Muller
    const gauss = () => {
      const u = 1 - Math.random()
      const v = Math.random()
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
    }

    const seed = () => {
      points = []
      const n = W < 800 ? 110 : 210
      const blobs = []
      for (let b = 0; b < K; b++) {
        blobs.push({ x: (Math.random() - 0.5) * 3.2, y: (Math.random() - 0.5) * 1.9 })
      }
      for (let i = 0; i < n; i++) {
        const q = blobs[i % K]
        points.push({ x: q.x + gauss() * 0.36, y: q.y + gauss() * 0.36, k: 0 })
      }
      centroids = []
      for (let j = 0; j < K; j++) {
        centroids.push({ x: (Math.random() - 0.5) * 3, y: (Math.random() - 0.5) * 1.8 })
      }
      iter = 0
      hold = 0
    }

    const step = () => {
      let sum = 0
      for (let i = 0; i < points.length; i++) {
        let best = 0
        let bd = 1e9
        for (let j = 0; j < K; j++) {
          const dx = points[i].x - centroids[j].x
          const dy = points[i].y - centroids[j].y
          const d = dx * dx + dy * dy
          if (d < bd) { bd = d; best = j }
        }
        points[i].k = best
        sum += bd
      }
      inertia = sum / points.length
      shift = 0
      for (let j = 0; j < K; j++) {
        let sx = 0
        let sy = 0
        let count = 0
        for (let i = 0; i < points.length; i++) {
          if (points[i].k === j) { sx += points[i].x; sy += points[i].y; count++ }
        }
        if (count) {
          const nx = sx / count
          const ny = sy / count
          shift += Math.abs(nx - centroids[j].x) + Math.abs(ny - centroids[j].y)
          centroids[j].x += (nx - centroids[j].x) * 0.22
          centroids[j].y += (ny - centroids[j].y) * 0.22
        }
      }
      iter++
      // converged — hold the frame for a beat, then reseed
      if (shift < 0.004 && iter > 18) {
        hold++
        if (hold > 110) seed()
      }
    }

    const px = (x, y) => {
      const s = Math.min(W, H * 1.7) / 4.4
      return [W / 2 + x * s, H / 2 - y * s]
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.lineWidth = 1

      // assignment spokes
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const q = px(p.x, p.y)
        const c = px(centroids[p.k].x, centroids[p.k].y)
        ctx.strokeStyle = `rgba(${COL[p.k % 4]},.07)`
        ctx.beginPath()
        ctx.moveTo(q[0], q[1])
        ctx.lineTo(c[0], c[1])
        ctx.stroke()
      }

      // points
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const q = px(p.x, p.y)
        ctx.beginPath()
        ctx.arc(q[0], q[1], 2.4, 0, 6.283)
        ctx.fillStyle = `rgba(${COL[p.k % 4]},.5)`
        ctx.fill()
      }

      // centroids
      for (let j = 0; j < K; j++) {
        const q = px(centroids[j].x, centroids[j].y)
        ctx.beginPath()
        ctx.arc(q[0], q[1], 9, 0, 6.283)
        ctx.strokeStyle = `rgba(${COL[j % 4]},.85)`
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(q[0] - 14, q[1])
        ctx.lineTo(q[0] + 14, q[1])
        ctx.moveTo(q[0], q[1] - 14)
        ctx.lineTo(q[0], q[1] + 14)
        ctx.strokeStyle = `rgba(${COL[j % 4]},.3)`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const hud = () => {
      if (iterRef?.current) iterRef.current.textContent = iter
      if (inertiaRef?.current) inertiaRef.current.textContent = inertia.toFixed(2)
      if (shiftRef?.current) shiftRef.current.textContent = shift.toFixed(3)
    }

    size()
    seed()

    const onResize = () => { size(); draw() }
    window.addEventListener('resize', onResize, { passive: true })

    if (prefersReducedMotion()) {
      for (let z = 0; z < 30; z++) step()
      draw()
      hud()
      return () => window.removeEventListener('resize', onResize)
    }

    const stop = visibleLoop(cv, () => {
      frames++
      if (frames % 3 === 0) { step(); hud() }
      draw()
    })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
    }
  }, [iterRef, inertiaRef, shiftRef])

  return <canvas id="viz" ref={canvasRef} aria-hidden="true" />
}

export default KMeansCanvas
