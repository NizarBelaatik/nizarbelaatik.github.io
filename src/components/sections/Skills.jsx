import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import { skillColumns } from '../../data/skills'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead title={t('skills.title')} index="03" label={t('v6.sections.stack')} />

        <Reveal className="skills rv">
          {skillColumns.map((col) => (
            <div key={col.titleKey}>
              <h4>{t(col.titleKey)}</h4>
              <ul>
                {col.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
