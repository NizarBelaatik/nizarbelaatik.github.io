import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../v6/Reveal'
import Counter from '../v6/Counter'
import projects_ENG from '../../data/projectsData_ENG'
import projects_FR from '../../data/projectsData_FR'
import { certificationsENG } from '../../data/certifications/certificationsENG'

const Stats = () => {
  const { t, i18n } = useTranslation()
  const projects = i18n.language?.startsWith('fr') ? projects_FR : projects_ENG

  const experiences = t('experiences', { returnObjects: true })
  const languages = String(t('v6.facts.languagesValue')).split(',').length

  const items = [
    { to: projects.length, label: t('v6.stats.projects'), suffix: '+' },
    { to: certificationsENG.length, label: t('v6.stats.certifications') },
    { to: Array.isArray(experiences) ? experiences.length : 0, label: t('v6.stats.internships') },
    { to: languages, label: t('v6.stats.languages') }
  ]

  return (
    <div className="wrap">
      <div className="stats">
        {items.map((item, i) => (
          <Reveal key={item.label} className="stat rv" delay={i * 90} threshold={0.3}>
            <div className="n">
              <Counter to={item.to} />
              {item.suffix}
            </div>
            <div className="l mono">{item.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Stats
