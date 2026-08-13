import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't reset scroll position on navigation — clicking a
 * project card from halfway down the home page lands you halfway down the
 * project page too. This resets to top whenever the route itself changes.
 * Anchor-link scrolling (nav section links) is handled separately in
 * Header.jsx and never touches the route, so it's unaffected.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
