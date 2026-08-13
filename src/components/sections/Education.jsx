import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import useReveal from '../v6/useReveal'
import OrbitGraphCanvas from '../v6/OrbitGraphCanvas'

/** Degrees, newest (Master's) first. */
const Education = () => {
  const { t } = useTranslation()
  const tlRef = useReveal({ threshold: 0.06, rootMargin: '0px' })

  const degrees = ['masters', 'bachelors'].map((key) => ({
    key,
    when: t(`education.${key}.duration`),
    title: t(`education.${key}.degree`),
    org: `${t(`education.${key}.university`)} · ${t(`education.${key}.location`)}`,
    description: t(`education.${key}.description`),
    bullets: t(`education.${key}.achievements`, { returnObjects: true })
  }))

  return (
    <section id="education">
      <OrbitGraphCanvas className="section-bg" />
      <div className="wrap">
        <SectionHead title={t('education.title')} index="05" label={t('nav.education')} />

        <div className="tl" ref={tlRef}>
          <div className="line" />

          {degrees.map((deg, i) => (
            <Reveal key={deg.key} className={`ev${i === 0 ? ' first' : ''}`} threshold={0.12}>
              <div className="when">{deg.when}</div>
              <h3>{deg.title}</h3>
              <p className="org">{deg.org}</p>
              <p>{deg.description}</p>
              {Array.isArray(deg.bullets) && deg.bullets.length > 0 && (
                <ul>
                  {deg.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
