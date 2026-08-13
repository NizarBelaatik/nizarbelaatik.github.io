import React from 'react'
import useReveal from './useReveal'

/**
 * The display heading + index label that opens every section.
 * The title is split into words that rise into place one after another;
 * the last `emWords` words carry the brand gradient.
 */
const SectionHead = ({ title, index, label, emWords = 1 }) => {
  const ref = useReveal()

  const words = String(title).trim().split(/\s+/)
  const emFrom = Math.max(0, words.length - emWords)

  return (
    <div className="head split" ref={ref}>
      <h2>
        {words.map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <span className="w">
              <i style={{ transitionDelay: `${i * 62}ms` }}>
                {i >= emFrom ? <em>{word}</em> : word}
              </i>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </React.Fragment>
        ))}
      </h2>
      <div className="idx mono">
        {index} — {label}
      </div>
    </div>
  )
}

export default SectionHead
