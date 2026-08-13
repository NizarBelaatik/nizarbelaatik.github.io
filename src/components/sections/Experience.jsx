import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import useReveal from '../v6/useReveal'
import GrowthTrendCanvas from '../v6/GrowthTrendCanvas'

/** Professional roles, newest first. */
const Experience = () => {
  const { t } = useTranslation()
  const tlRef = useReveal({ threshold: 0.06, rootMargin: '0px' })

  const experiences = t('experiences', { returnObjects: true })
  const roles = Array.isArray(experiences) ? experiences : []

  return (
    <section id="experience">
      <GrowthTrendCanvas className="section-bg" />
      <div className="wrap">
        <SectionHead title={t('experience.title')} index="04" label={t('nav.experience')} />

        <div className="tl" ref={tlRef}>
          <div className="line" />

          {roles.map((role, i) => (
            <Reveal key={role.id} className={`ev${i === 0 ? ' first' : ''}`} threshold={0.12}>
              <div className="when">
                {role.duration} · {role.type}
              </div>
              <h3>{role.title}</h3>
              <p className="org">
                {role.company} · {role.location}
              </p>
              <p>{role.description}</p>
              {Array.isArray(role.achievements) && role.achievements.length > 0 && (
                <ul>
                  {role.achievements.map((a) => (
                    <li key={a}>{a}</li>
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

export default Experience
