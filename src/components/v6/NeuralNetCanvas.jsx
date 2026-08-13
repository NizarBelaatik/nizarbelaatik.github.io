import React, { useEffect, useRef } from 'react'
import { fitCanvas, mixBrandColor, visibleLoop } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const LAYERS = [5, 7, 7, 3]
const MAX_PARTICLES = 9
const TRAIL_STEPS = 5

/**
 * Signals continuously streaming through a small MLP: particles spawn at
 * the input layer, hop node-to-node with a glowing comet trail, and light
 * up whatever node they land on. Unlike a single lockstep sweep, several
 * of these are always in flight, so the canvas never sits still.
 */
const NeuralNetCanvas = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0
    let nodes = []
    let activation = []
    let particles = []
    let spawnIn = 0

    const rand = (a, b) => a + Math.random() * (b - a)
    const randInt = (n) => Math.floor(Math.random() * n)

    const build = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      ctx = fitCanvas(cv)
      nodes = []
      activation = []
      const pad = 28
      const gap = (W - pad * 2) / (LAYERS.length - 1)
      const sp = Math.min(22, (H - 42) / Math.max(...LAYERS))
      LAYERS.forEach((n, li) => {
        const col = []
        const act = []
        for (let i = 0; i < n; i++) {
          col.push({ x: pad + li * gap, y: H / 2 + (i - (n - 1) / 2) * sp, ph: Math.random() * 10 })
          act.push(0)
        }
        nodes.push(col)
        activation.push(act)
      })
    }

    const spawn = () => {
      particles.push({
        fl: 0,
        fi: randInt(nodes[0].length),
        tl: 1,
        ti: randInt(nodes[1].length),
        t: 0,
        speed: rand(0.016, 0.03)
      })
    }

    const pointAt = (p, t) => {
      const A = nodes[p.fl][p.fi]
      const B = nodes[p.tl][p.ti]
      return [A.x + (B.x - A.x) * t, A.y + (B.y - A.y) * t]
    }

    const progressOf = (p, t) => (p.fl + t) / (LAYERS.length - 1)

    const step = () => {
      for (let li = 0; li < activation.length; li++) {
        for (let i = 0; i < activation[li].length; i++) activation[li][i] *= 0.91
      }

      spawnIn -= 1
      if (spawnIn <= 0 && particles.length < MAX_PARTICLES) {
        spawnIn = rand(10, 20)
        spawn()
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.t += p.speed
        if (p.t >= 1) {
          activation[p.tl][p.ti] = 1
          if (p.tl === nodes.length - 1) {
            particles.splice(i, 1)
          } else {
            particles[i] = {
              fl: p.tl,
              fi: p.ti,
              tl: p.tl + 1,
              ti: randInt(nodes[p.tl + 1].length),
              t: 0,
              speed: rand(0.016, 0.03)
            }
          }
        }
      }
    }

    const draw = (now) => {
      ctx.clearRect(0, 0, W, H)

      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(7,9,18,.055)'
      for (let li = 0; li < nodes.length - 1; li++) {
        for (let i = 0; i < nodes[li].length; i++) {
          for (let j = 0; j < nodes[li + 1].length; j++) {
            const A = nodes[li][i]
            const B = nodes[li + 1][j]
            ctx.beginPath()
            ctx.moveTo(A.x, A.y)
            ctx.lineTo(B.x, B.y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        const prog = progressOf(p, p.t)
        for (let k = TRAIL_STEPS; k >= 0; k--) {
          const tt = Math.max(0, p.t - k * 0.045)
          const [x, y] = pointAt(p, tt)
          const a = (1 - k / (TRAIL_STEPS + 1)) * 0.85
          const r = 3.2 - k * 0.42
          if (r <= 0) continue
          ctx.beginPath()
          ctx.arc(x, y, r, 0, 6.283)
          ctx.fillStyle = mixBrandColor(prog, a)
          ctx.fill()
        }
        const [hx, hy] = pointAt(p, p.t)
        const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 9)
        glow.addColorStop(0, mixBrandColor(prog, 0.45))
        glow.addColorStop(1, mixBrandColor(prog, 0))
        ctx.beginPath()
        ctx.arc(hx, hy, 9, 0, 6.283)
        ctx.fillStyle = glow
        ctx.fill()
      })

      for (let li = 0; li < nodes.length; li++) {
        for (let i = 0; i < nodes[li].length; i++) {
          const n = nodes[li][i]
          const act = activation[li][i]
          const breathe = Math.sin(now * 0.0016 + n.ph) * 0.35 + 0.65
          const r = 3.6 + act * 2.4 + breathe * 0.5
          ctx.beginPath()
          ctx.arc(n.x, n.y, r, 0, 6.283)
          ctx.fillStyle = act > 0.04 ? mixBrandColor(li / (nodes.length - 1), 0.25 + act * 0.75) : '#EDEEF2'
          ctx.fill()
          ctx.strokeStyle = 'rgba(7,9,18,.28)'
          ctx.lineWidth = 1
          ctx.stroke()
          if (act > 0.55) {
            ctx.beginPath()
            ctx.arc(n.x, n.y, r + 4.5, 0, 6.283)
            ctx.strokeStyle = mixBrandColor(li / (nodes.length - 1), (act - 0.55) * 2.1)
            ctx.lineWidth = 1.4
            ctx.stroke()
          }
        }
      }

      // vignette: fade all four edges to nothing so this reads as ambient
      // background texture rather than a diagram in a bordered box
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
      fadeY.addColorStop(0.16, 'rgba(0,0,0,1)')
      fadeY.addColorStop(0.84, 'rgba(0,0,0,1)')
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
      draw(2000)
      return () => window.removeEventListener('resize', onResize)
    }

    const stop = visibleLoop(cv, () => {
      step()
      draw(performance.now())
    })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default NeuralNetCanvas
