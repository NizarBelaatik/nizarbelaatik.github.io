import React, { useEffect, useRef } from 'react'
import { fitCanvas, mixBrandColor } from './canvasUtils'
import { prefersReducedMotion } from './useReveal'

const LINK_DIST = 130
const CURSOR_RADIUS = 170
const PX_PER_PARTICLE = 16000 // lower = denser field
const MAX_PARTICLES = 70
const MIN_PARTICLES = 26

const NODES_PER_LOBE = 24
const BRAIN_NEIGHBOURS = 3
const MAX_BRAIN_PULSES = 5

const PIPE_STAGES = 5
const MAX_PACKETS = 6

/**
 * Sitewide atmosphere, fixed behind every page: soft drifting blobs, a
 * live particle field, a brain-shaped neuron cluster with signals
 * hopping between synapses, and a data pipeline with packets moving
 * through processing stages — the AI/ML motifs from the section
 * backgrounds, distilled into one always-on backdrop. One canvas, one
 * rAF loop, so it costs nothing extra on scroll or route change.
 */
const BackgroundField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return undefined

    let ctx
    let W = 0
    let H = 0

    let particles = []
    let brainNodes = []
    let brainAdj = []
    let brainGlow = []
    let brainPulses = []
    let brainSpawnIn = 0
    let pipeStages = []
    let pipePackets = []
    let pipeSpawnIn = 0

    let raf = null
    let visible = true
    const mouse = { x: -9999, y: -9999, active: false }

    const rand = (a, b) => a + Math.random() * (b - a)
    const randInt = (n) => Math.floor(Math.random() * n)

    /* ---------- particle field ---------- */
    const buildParticles = () => {
      const count = Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, Math.round((W * H) / PX_PER_PARTICLE)))
      particles = Array.from({ length: count }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-0.11, 0.11),
        vy: rand(-0.11, 0.11),
        r: rand(1.1, 2.1),
        tone: Math.random(),
        ph: rand(0, 10),
        act: 0
      }))
    }

    const stepParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = W + 20
        if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20
        if (p.y > H + 20) p.y = -20

        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CURSOR_RADIUS) p.act = Math.max(p.act, 1 - d / CURSOR_RADIUS)
        }
        p.act *= 0.95
      })
    }

    const drawParticles = (now) => {
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            ctx.strokeStyle = mixBrandColor((a.tone + b.tone) / 2, (1 - d / LINK_DIST) * 0.16)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        const breathe = Math.sin(now * 0.0012 + p.ph) * 0.3 + 0.7
        const r = p.r * breathe + p.act * 1.8
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, 6.283)
        ctx.fillStyle = mixBrandColor(p.tone, 0.16 + p.act * 0.55)
        ctx.fill()

        if (p.act > 0.06) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18)
          glow.addColorStop(0, mixBrandColor(p.tone, p.act * 0.4))
          glow.addColorStop(1, mixBrandColor(p.tone, 0))
          ctx.beginPath()
          ctx.arc(p.x, p.y, 18, 0, 6.283)
          ctx.fillStyle = glow
          ctx.fill()
        }
      })
    }

    /* ---------- brain: two wobbly lobes of neurons, signals hopping
       between synapses — a literal brain rather than an abstract MLP */
    const buildBrain = () => {
      const cx = W * 0.83
      const cy = H * 0.26
      const scale = Math.min(W, H) * 0.15
      const lobeGap = scale * 0.5

      const lobeRadius = (theta, seed) =>
        scale *
        (1 + 0.18 * Math.sin(4 * theta + seed) + 0.09 * Math.sin(7 * theta + seed * 1.7) + 0.05 * Math.sin(11 * theta + seed * 2.3))

      brainNodes = []
      ;[-1, 1].forEach((side, li) => {
        const seed = li * 3.1 + 0.4
        const ccx = cx + side * lobeGap
        for (let i = 0; i < NODES_PER_LOBE; i++) {
          const theta = (i / NODES_PER_LOBE) * Math.PI * 2 + rand(-0.12, 0.12)
          const rr = lobeRadius(theta, seed) * rand(0.7, 1)
          brainNodes.push({
            x: ccx + Math.cos(theta) * rr,
            y: cy + Math.sin(theta) * rr * 0.82,
            ph: rand(0, 10)
          })
        }
      })

      // connect each node to its nearest neighbours, de-duplicated
      const edgeSet = new Set()
      const edges = []
      brainNodes.forEach((n, i) => {
        const dists = brainNodes
          .map((m, j) => (j === i ? null : [j, (n.x - m.x) ** 2 + (n.y - m.y) ** 2]))
          .filter(Boolean)
          .sort((a, b) => a[1] - b[1])
        for (let k = 0; k < BRAIN_NEIGHBOURS && k < dists.length; k++) {
          const j = dists[k][0]
          const key = i < j ? `${i}-${j}` : `${j}-${i}`
          if (!edgeSet.has(key)) {
            edgeSet.add(key)
            edges.push([i, j])
          }
        }
      })

      brainAdj = brainNodes.map(() => [])
      edges.forEach(([a, b]) => {
        brainAdj[a].push(b)
        brainAdj[b].push(a)
      })

      brainGlow = brainNodes.map(() => 0)
      brainPulses = []
      brainSpawnIn = 0
    }

    const spawnBrainPulse = () => {
      const a = randInt(brainNodes.length)
      const neighbours = brainAdj[a]
      if (!neighbours.length) return
      const b = neighbours[randInt(neighbours.length)]
      brainPulses.push({ a, b, t: 0, speed: rand(0.022, 0.036), hops: 0 })
    }

    const stepBrain = () => {
      brainGlow.forEach((g, i) => { brainGlow[i] = g * 0.92 })

      brainSpawnIn--
      if (brainSpawnIn <= 0 && brainPulses.length < MAX_BRAIN_PULSES) {
        brainSpawnIn = rand(35, 75)
        spawnBrainPulse()
      }

      for (let i = brainPulses.length - 1; i >= 0; i--) {
        const p = brainPulses[i]
        p.t += p.speed
        if (p.t >= 1) {
          brainGlow[p.b] = 1
          p.hops++
          const neighbours = brainAdj[p.b]
          if (p.hops > 4 || !neighbours.length) {
            brainPulses.splice(i, 1)
          } else {
            const next = neighbours[randInt(neighbours.length)]
            brainPulses[i] = { a: p.b, b: next, t: 0, speed: rand(0.022, 0.036), hops: p.hops }
          }
        }
      }
    }

    const drawBrain = () => {
      ctx.lineWidth = 1
      brainAdj.forEach((neighbours, i) => {
        neighbours.forEach((j) => {
          if (j < i) return
          const a = brainNodes[i]
          const b = brainNodes[j]
          ctx.strokeStyle = 'rgba(43,59,255,.07)'
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        })
      })

      brainPulses.forEach((p) => {
        const A = brainNodes[p.a]
        const B = brainNodes[p.b]
        const x = A.x + (B.x - A.x) * p.t
        const y = A.y + (B.y - A.y) * p.t
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 7)
        glow.addColorStop(0, mixBrandColor(0.7, 0.55))
        glow.addColorStop(1, mixBrandColor(0.7, 0))
        ctx.beginPath()
        ctx.arc(x, y, 7, 0, 6.283)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 1.8, 0, 6.283)
        ctx.fillStyle = mixBrandColor(0.7, 0.9)
        ctx.fill()
      })

      brainNodes.forEach((n, i) => {
        const g = brainGlow[i]
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6 + g * 1.6, 0, 6.283)
        ctx.fillStyle = g > 0.04 ? mixBrandColor(0.35, 0.2 + g * 0.7) : 'rgba(43,59,255,.16)'
        ctx.fill()
      })
    }

    /* ---------- data pipeline: packets moving through stages ---------- */
    const buildPipeline = () => {
      const y = H * 0.93
      const marginX = W * 0.07
      pipeStages = Array.from({ length: PIPE_STAGES }, (_, i) => ({
        x: marginX + (i / (PIPE_STAGES - 1)) * (W - marginX * 2),
        y,
        tone: i / (PIPE_STAGES - 1)
      }))
      pipePackets = []
      pipeSpawnIn = 0
    }

    const stepPipeline = () => {
      pipeSpawnIn--
      if (pipeSpawnIn <= 0 && pipePackets.length < MAX_PACKETS) {
        pipeSpawnIn = rand(45, 100)
        pipePackets.push({ p: 0, speed: rand(0.0032, 0.0055), tone: Math.random() })
      }
      for (let i = pipePackets.length - 1; i >= 0; i--) {
        pipePackets[i].p += pipePackets[i].speed
        if (pipePackets[i].p >= 1) pipePackets.splice(i, 1)
      }
    }

    const drawPipeline = () => {
      if (pipeStages.length < 2) return
      const y = pipeStages[0].y
      const x0 = pipeStages[0].x
      const x1 = pipeStages[pipeStages.length - 1].x

      ctx.strokeStyle = 'rgba(7,9,18,.07)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x0, y)
      ctx.lineTo(x1, y)
      ctx.stroke()

      pipeStages.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, 3, 0, 6.283)
        ctx.strokeStyle = mixBrandColor(s.tone, 0.35)
        ctx.lineWidth = 1.3
        ctx.stroke()
      })

      pipePackets.forEach((pk) => {
        const x = x0 + pk.p * (x1 - x0)
        let nearest = Infinity
        pipeStages.forEach((s) => { nearest = Math.min(nearest, Math.abs(s.x - x)) })
        const flash = nearest < 9 ? 1 - nearest / 9 : 0

        if (flash > 0) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 15)
          glow.addColorStop(0, mixBrandColor(pk.tone, flash * 0.5))
          glow.addColorStop(1, mixBrandColor(pk.tone, 0))
          ctx.beginPath()
          ctx.arc(x, y, 15, 0, 6.283)
          ctx.fillStyle = glow
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(x, y, 2.4 + flash * 1.8, 0, 6.283)
        ctx.fillStyle = mixBrandColor(pk.tone, 0.5 + flash * 0.4)
        ctx.fill()
      })
    }

    /* ---------- shared lifecycle ---------- */
    const size = () => {
      ctx = fitCanvas(cv)
      W = cv.clientWidth
      H = cv.clientHeight
      buildParticles()
      buildBrain()
      buildPipeline()
    }

    const step = () => {
      stepParticles()
      stepBrain()
      stepPipeline()
    }

    const draw = (now) => {
      ctx.clearRect(0, 0, W, H)
      drawParticles(now)
      drawBrain()
      drawPipeline()
    }

    size()
    draw(0)

    const onResize = () => size()
    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => { mouse.active = false }
    const onVisibility = () => { visible = document.visibilityState === 'visible' }

    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    const teardown = () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }

    if (prefersReducedMotion()) return teardown

    const loop = (now) => {
      if (visible) {
        step()
        draw(now)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      teardown()
    }
  }, [])

  return (
    <div className="bgfx" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <canvas ref={canvasRef} className="bgfx-canvas" />
    </div>
  )
}

export default BackgroundField
