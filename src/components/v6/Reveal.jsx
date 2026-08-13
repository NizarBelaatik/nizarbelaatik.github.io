import React from 'react'
import useReveal from './useReveal'

/**
 * Wraps children in an element that animates in on scroll.
 * `className` carries the design-system class ("rv", "stat", "ev", "cert"…);
 * `delay` feeds the --d custom property the CSS uses to stagger siblings.
 */
const Reveal = (props) => {
  const {
    as: Tag = 'div',
    className = 'rv',
    delay = 0,
    style,
    threshold,
    rootMargin,
    children,
    ...rest
  } = props
  const ref = useReveal({ threshold, rootMargin })

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { ...style, '--d': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
