import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useReveal from '../v6/useReveal'
import { primaryCategory, projectYear } from '../../utils/projectUtils'

/** Horizontal row used by the /projects list view. */
const ProjectListRow = ({ project, delay = 0 }) => {
  const { t } = useTranslation()
  const ref = useReveal()
  const [broken, setBroken] = useState(false)

  const cat = primaryCategory(project)
  const badge = cat ? t(cat.shortKey) : project.category
  const cover = Array.isArray(project.image) ? project.image[0] : project.image
  const href = `/projects/${project.id}`

  return (
    <article ref={ref} className="prow rv" style={delay ? { '--d': `${delay}ms` } : undefined}>
      <div className={`shot${!cover || broken ? ' noimg' : ''}`}>
        <span className="badge">
          <em>{badge}</em>
        </span>
        <span className="year">{projectYear(project.date)}</span>
        {cover && !broken && (
          <img src={cover} alt={project.title} loading="lazy" onError={() => setBroken(true)} />
        )}
        <div className="fallback">{project.title}</div>
      </div>

      <div className="pbody">
        <h3>
          <Link to={href}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="tech">
          <span>{(project.technology || []).slice(0, 6).join(' · ')}</span>
          {project.github_link && project.github_link !== '#' ? (
            <a href={project.github_link} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          ) : (
            <Link to={href}>{t('v6.viewProject')} ↗</Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectListRow
