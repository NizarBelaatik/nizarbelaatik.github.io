import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import BentoCard from '../projects/BentoCard'
import projects_ENG from '../../data/projectsData_ENG'
import projects_FR from '../../data/projectsData_FR'
import { bentoSize } from '../../utils/projectUtils'

const PREVIEW_COUNT = 6

const Projects = () => {
  const { t, i18n } = useTranslation()

  const all = i18n.language?.startsWith('fr') ? projects_FR : projects_ENG
  const list = useMemo(() => all.slice(0, PREVIEW_COUNT), [all])

  return (
    <section id="work">
      <div className="wrap">
        <SectionHead title={t('projects.subtitle')} index="02" label={t('v6.sections.projects')} emWords={3} />

        <div className="bento">
          {list.map((project, i) => (
            <BentoCard key={project.id} project={project} size={bentoSize(i, list.length)} delay={i * 70} />
          ))}
        </div>

        <div className="more">
          <Link className="btn fill" to="/projects">
            <span>{t('v6.allProjects')}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
