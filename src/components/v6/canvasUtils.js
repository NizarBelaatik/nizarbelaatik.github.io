/* Shared canvas helpers for the v6 data visualisations. */

export function fitCanvas(cv) {
  const d = Math.min(2, window.devicePixelRatio || 1)
  cv.width = cv.clientWidth * d
  cv.height = cv.clientHeight * d
  const ctx = cv.getContext('2d')
  ctx.setTransform(d, 0, 0, d, 0, 0)
  return ctx
}

/* The b800 → b500 → cyan brand ramp, as a canvas stroke. */
export function gradStroke(ctx, x0, y0, x1, y1, a) {
  const g = ctx.createLinearGradient(x0, y0, x1, y1)
  g.addColorStop(0, `rgba(11,18,114,${a})`)
  g.addColorStop(0.55, `rgba(43,59,255,${a})`)
  g.addColorStop(1, `rgba(0,200,240,${a})`)
  return g
}

const BRAND_STOPS = [
  { at: 0, rgb: [11, 18, 114] },
  { at: 0.42, rgb: [43, 59, 255] },
  { at: 1, rgb: [0, 200, 240] }
]

/* Same b800 → b500 → cyan ramp as gradStroke, but sampled at a single
   point (0..1) — for particles/dots that move continuously along it. */
export function mixBrandColor(t, a = 1) {
  const p = Math.min(1, Math.max(0, t))
  const seg = p <= BRAND_STOPS[1].at ? 0 : 1
  const from = BRAND_STOPS[seg]
  const to = BRAND_STOPS[seg + 1]
  const span = to.at - from.at
  const local = span > 0 ? (p - from.at) / span : 0
  const r = Math.round(from.rgb[0] + (to.rgb[0] - from.rgb[0]) * local)
  const g = Math.round(from.rgb[1] + (to.rgb[1] - from.rgb[1]) * local)
  const b = Math.round(from.rgb[2] + (to.rgb[2] - from.rgb[2]) * local)
  return `rgba(${r},${g},${b},${a})`
}

/* Runs `frame` on rAF while the canvas is on screen; returns a teardown. */
export function visibleLoop(cv, frame) {
  let raf = null
  let visible = true

  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting
  }, { threshold: 0 })
  io.observe(cv)

  const tick = () => {
    if (visible) frame()
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  return () => {
    if (raf) cancelAnimationFrame(raf)
    io.disconnect()
  }
}
