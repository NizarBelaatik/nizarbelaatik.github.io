import React, { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './useReveal'

/** `> building <b>machine learning systems</b>` with a blinking caret. */
const Typewriter = ({ prefix, words }) => {
  const wordRef = useRef(null)

  useEffect(() => {
    const el = wordRef.current
    if (!el || !words?.length) return undefined

    if (prefersReducedMotion()) {
      el.textContent = words[0]
      return undefined
    }

    let w = 0
    let chars = 0
    let deleting = false
    let timer = null
    let cancelled = false

    const type = () => {
      if (cancelled) return
      const word = words[w]
      el.textContent = word.slice(0, chars)

      if (!deleting && chars < word.length) {
        chars++
        timer = setTimeout(type, 55)
      } else if (!deleting) {
        deleting = true
        timer = setTimeout(type, 1800)
      } else if (chars > 0) {
        chars--
        timer = setTimeout(type, 25)
      } else {
        deleting = false
        w = (w + 1) % words.length
        timer = setTimeout(type, 200)
      }
    }

    type()

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [words])

  return (
    <p className="typed">
      <span>
        {'> '}
        {prefix}{' '}
        <b ref={wordRef} />
      </span>
      <span className="caret" />
    </p>
  )
}

export default Typewriter
