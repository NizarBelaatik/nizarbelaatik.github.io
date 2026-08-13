import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'

/* Section ids rendered by the home page, in document order — the index
   numbers mirror the "01 — About" style labels each section head already
   carries (see SectionHead), so the nav reads as the same table of
   contents rather than a second, disconnected numbering scheme. */
const SECTIONS = [
  { id: 'about', idx: '01' },
  { id: 'work', idx: '02' },
  { id: 'skills', idx: '03' },
  { id: 'experience', idx: '04' },
  { id: 'education', idx: '05' },
  { id: 'certs', idx: '06' },
  { id: 'contact', idx: '07' }
]
const PROJECTS_KEY = '__projects__'

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [clock, setClock] = useState('Casablanca')
  const navRef = useRef(null)
  const desktopRef = useRef(null)
  const linkRefs = useRef({})
  const indicatorRef = useRef(null)

  const isHome = location.pathname === '/'
  const onProjects = location.pathname.startsWith('/projects')

  /* nav.* keys don't map 1:1 onto section ids (work -> projects, skills ->
     stack) — this is the one place that mapping needs to happen. */
  const labelKey = (id) => {
    if (id === 'work') return 'projects'
    if (id === 'skills') return 'stack'
    return id
  }
  const items = SECTIONS.map((s) => ({ ...s, label: t(`nav.${labelKey(s.id)}`) }))

  /* ---- Casablanca clock ---- */
  useEffect(() => {
    const tick = () => {
      setClock(
        `${new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: '2-digit',
          minute: '2-digit'
        })} CASA`
      )
    }
    tick()
    const id = setInterval(tick, 20000)
    return () => clearInterval(id)
  }, [])

  /* ---- scrollspy (home only) ---- */
  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === 'undefined') {
      setActive('')
      return undefined
    }
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
    return () => spy.disconnect()
  }, [isHome])

  /* ---- sliding "you are here" bar under the desktop nav ---- */
  const currentKey = onProjects ? PROJECTS_KEY : isHome ? active : ''

  useLayoutEffect(() => {
    const bar = indicatorRef.current
    const host = desktopRef.current
    const target = linkRefs.current[currentKey]
    if (!bar || !host || !target) {
      if (bar) bar.style.opacity = '0'
      return undefined
    }

    const place = () => {
      const hostBox = host.getBoundingClientRect()
      const linkBox = target.getBoundingClientRect()
      bar.style.opacity = '1'
      bar.style.width = `${linkBox.width}px`
      bar.style.transform = `translateX(${linkBox.left - hostBox.left}px)`
    }
    place()

    window.addEventListener('resize', place, { passive: true })
    return () => window.removeEventListener('resize', place)
  }, [currentKey, i18n.language])

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = navRef.current ? navRef.current.offsetHeight : 0
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }, [])

  /* HashRouter owns location.hash, so section links never touch it —
     they preventDefault and scroll programmatically instead. */
  const goToSection = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (isHome) {
      scrollToSection(id)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(id), 160)
    }
  }

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  return (
    <header className="nav" ref={navRef}>
      <div className="wrap">
        <a className="brand" href="/" onClick={goHome}>
          <span className="avatar">
            <img
              src="/logos/Profile_Pic.png"
              alt=""
              onError={(e) => e.currentTarget.closest('.avatar')?.remove()}
            />
          </span>
          <span className="name">Nizar Belaatik</span>
        </a>

        <nav className="desktop" ref={desktopRef}>
          {items.map((item) => (
            <a
              key={item.id}
              ref={(el) => { linkRefs.current[item.id] = el }}
              href={`#${item.id}`}
              className={currentKey === item.id ? 'on' : undefined}
              onClick={goToSection(item.id)}
            >
              <span className="i">{item.idx}</span>
              <span className="t">{item.label}</span>
            </a>
          ))}
          <Link
            ref={(el) => { linkRefs.current[PROJECTS_KEY] = el }}
            to="/projects"
            className={onProjects ? 'on' : undefined}
          >
            <span className="t">{t('projects.viewAll')}</span>
          </Link>
          <span className="indicator" ref={indicatorRef} />
        </nav>

        <div className="tools">
          <div id="clock">
            <span className="live-dot" />
            {clock}
          </div>
          <LanguageSwitcher />
          <button
            type="button"
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X size={16} strokeWidth={1.6} /> : <Menu size={16} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer">
          <div className="wrap">
            <nav>
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={currentKey === item.id ? 'on' : undefined}
                  onClick={goToSection(item.id)}
                >
                  <span className="i">{item.idx}</span>
                  <span className="t">{item.label}</span>
                </a>
              ))}
              <Link to="/projects" onClick={() => setOpen(false)} className={onProjects ? 'on' : undefined}>
                <span className="t">{t('projects.viewAll')}</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
