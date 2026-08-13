import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import KMeansCanvas from '../v6/KMeansCanvas'
import CursorGlow from '../v6/CursorGlow'
import Typewriter from '../v6/Typewriter'

const Hero = () => {
  const { t } = useTranslation()
  const heroRef = useRef(null)
  const iterRef = useRef(null)
  const inertiaRef = useRef(null)
  const shiftRef = useRef(null)

  const words = t('v6.typedWords', { returnObjects: true })
  const resumeLink = t('resume.resume_link')

  const scrollToWork = (e) => {
    e.preventDefault()
    const el = document.getElementById('work')
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' })
  }

  return (
    <div className="hero" id="top" ref={heroRef}>
      <KMeansCanvas iterRef={iterRef} inertiaRef={inertiaRef} shiftRef={shiftRef} />
      <CursorGlow containerRef={heroRef} />
      <div className="scan" aria-hidden="true" />

      <div className="wrap">
        <div className="hgrid">
          <div>
            <p className="kick mono">
              <span className="dot" />
              <span className="txt">{t('v6.kicker')}</span>
            </p>

            <h1>
              <span className="ln"><i>Nizar</i></span>
              <span className="ln"><i className="out">Belaatik</i></span>
            </h1>

            <Typewriter prefix={t('v6.typedPrefix')} words={Array.isArray(words) ? words : []} />

            <p className="sum">{t('hero.description')}</p>

            <div className="cta">
              <a className="btn fill" href="#work" onClick={scrollToWork}>
                <span>{t('hero.viewWork')}</span>
              </a>
              <a className="btn" href={resumeLink} download>
                <s />
                <span>{t('hero.downloadCV')} ↓</span>
              </a>
              <a className="btn" href={t('contact.methods.email.href')}>
                <s />
                <span>{t('v6.contactLinks.email')}</span>
              </a>
            </div>
          </div>

          <div className="portrait">
            <span className="aura" aria-hidden="true" />
            <span className="cor c1" />
            <span className="cor c2" />
            <div className="fr">
              <img
                src="/logos/Profile_Pic.png"
                alt="Nizar Belaatik"
                onError={(e) => {
                  const host = e.currentTarget.closest('.portrait')
                  if (host) host.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hud-wrap">
        <div className="hud mono">
          <div>{t('v6.hud.caption')}</div>
          <div>
            k = <b>4</b> · {t('v6.hud.iteration')} <b ref={iterRef}>0</b> · {t('v6.hud.inertia')}{' '}
            <b ref={inertiaRef}>0.00</b> · {t('v6.hud.shift')} <b ref={shiftRef}>0.000</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
