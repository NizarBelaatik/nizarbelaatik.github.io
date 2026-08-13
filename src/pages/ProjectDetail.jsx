import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Users,
  Building,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'
import projects_ENG from '../data/projectsData_ENG'
import projects_FR from '../data/projectsData_FR'
import Reveal from '../components/v6/Reveal'
import { numericMetric, primaryCategory, projectYear } from '../utils/projectUtils'

/**
 * Renders every { Title_1, Data } section in a RoleResp/KeyFeatures/ChallSolu
 * array — projects sometimes split these into several labelled groups
 * ("For Students" / "For Administrators"), and all of them need to show,
 * not just the first.
 */
const SectionGroups = ({ sections }) =>
  sections.map((section, si) => (
    <div key={section.Title_1 || si} style={si > 0 ? { marginTop: 28 } : undefined}>
      {section.Title_1 && (
        <p className="mono" style={{ color: 'var(--b600)', marginBottom: 14 }}>
          {section.Title_1}
        </p>
      )}
      <div className="blockgrid">
        {(section.Data || []).map((group) => (
          <div key={group.Title}>
            <h4>{group.Title}</h4>
            <ul>
              {(group.Data || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ))

const ProjectDetail = () => {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const projectsDATA = i18n.language?.startsWith('fr') ? projects_FR : projects_ENG
  const project = projectsDATA.find((p) => p.id === id)

  const [selected, setSelected] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) {
    return (
      <div className="v6">
        <div className="wrap pd-notfound">
          <div>
            <h1 className="pd-title">{t('projectDetail.notFound')}</h1>
            <Link className="btn fill" to="/projects">
              <span>
                <ArrowLeft size={15} strokeWidth={1.8} /> {t('projectDetail.backToProjects')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const images = Array.isArray(project.image) ? project.image : project.image ? [project.image] : []
  const cat = primaryCategory(project)
  const badge = cat ? t(cat.shortKey) : project.category

  const results = project.researchResults || {}
  const metricsArray = results.keyMetrics || results.performanceMetrics || []
  const keyFindings = results.keyFindings || []
  const businessImpact = results.businessImpact || []
  const cityCoverage = results.cityCoverage || []
  const fidScores = results.fidScores || []
  const flatMetrics = project.metrics && Object.keys(project.metrics).length ? project.metrics : null
  const keyHighlights = project.KeyFeatures?.[0]?.Data?.slice(0, 5) || []

  // Each of these is an array of sections ({ Title_1, Data }) — a project can
  // split its role/features/challenges into several labelled groups (e.g.
  // "For Students" / "For Administrators"), so every section must render,
  // not just the first.
  const roleSections = project.RoleResp || []
  const featureSections = project.KeyFeatures || []
  const challengeSections = project.ChallSolu || []
  const businessSections = project.BusinessImpact || []

  const demoHref = project.live_demo || project.research_paper
  const demoLabel = project.live_demo ? t('projectDetail.liveDemo') : t('projectDetail.viewResearch')

  const openLightbox = (index) => {
    setSelected(index)
    setLightboxOpen(true)
  }
  const nextImage = () => setSelected((p) => (p + 1) % images.length)
  const prevImage = () => setSelected((p) => (p - 1 + images.length) % images.length)

  return (
    <div className="v6">
      <div className="pd-hero">
        <div className="wrap">
          <Link className="back" to="/projects">
            <ArrowLeft size={13} strokeWidth={1.8} />
            {t('projectDetail.backToProjects')}
          </Link>

          <div className="pd-tags">
            {badge && <span className="chip">{badge}</span>}
            {project.date && <span className="chip">{project.date}</span>}
            {project.client_for && <span className="chip">{project.client_for}</span>}
          </div>

          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-desc">{project.description}</p>

          <div className="pd-meta mono">
            {project.date && (
              <span>
                <Calendar size={14} strokeWidth={1.7} /> {projectYear(project.date)}
              </span>
            )}
            {project.category && (
              <span>
                <Tag size={14} strokeWidth={1.7} /> {project.category}
              </span>
            )}
            {project.client_for && (
              <span>
                <Building size={14} strokeWidth={1.7} /> {project.client_for}
              </span>
            )}
            {project.role && (
              <span>
                <Users size={14} strokeWidth={1.7} /> {project.role}
              </span>
            )}
          </div>

          <div className="cta">
            {project.github_link && project.github_link !== '#' && (
              <a className="btn" href={project.github_link} target="_blank" rel="noopener noreferrer">
                <s />
                <span>
                  <Github size={14} strokeWidth={1.8} /> {t('projectDetail.viewCode')}
                </span>
              </a>
            )}
            {demoHref && (
              <a className="btn fill" href={demoHref} target="_blank" rel="noopener noreferrer">
                <span>
                  <ExternalLink size={14} strokeWidth={1.8} /> {demoLabel}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="wrap page-end" style={{ paddingTop: 'clamp(32px, 5vw, 48px)' }}>
        {images.length > 0 && (
          <Reveal className="pd-gallery rv" style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <div className="main" onClick={() => openLightbox(selected)}>
              <img src={images[selected]} alt={project.title} />
            </div>
            {images.length > 1 && (
              <div className="pd-thumbs">
                {images.slice(0, 4).map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    className={i === selected ? 'on' : undefined}
                    onClick={() => setSelected(i)}
                  >
                    <img src={img} alt={`${project.title} ${i + 1}`} />
                  </button>
                ))}
                {images.length > 4 && (
                  <button type="button" onClick={() => openLightbox(4)}>
                    <span className="more">
                      +{images.length - 4} {t('projectDetail.moreImages')}
                    </span>
                  </button>
                )}
              </div>
            )}
          </Reveal>
        )}

        {metricsArray.length > 0 && (
          <div className="pd-block">
            <h2>{t('projectDetail.resultsTitle')}</h2>
            <div className="pd-metrics">
              {metricsArray.map((metric) => {
                const num = numericMetric(metric.value)
                return (
                  <div className="m" key={metric.metric}>
                    <div className="n">
                      {num ? (
                        <>
                          {num.number}
                          {num.suffix}
                        </>
                      ) : (
                        metric.value
                      )}
                    </div>
                    <div className="l">{metric.metric}</div>
                    {metric.description && <div className="d">{metric.description}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="pd-layout">
          <div>
            {roleSections.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.roleResponsibilities')}</h2>
                <SectionGroups sections={roleSections} />
              </div>
            )}

            {featureSections.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.keyFeatures')}</h2>
                <SectionGroups sections={featureSections} />
              </div>
            )}

            {challengeSections.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.challengesSolutions')}</h2>
                <SectionGroups sections={challengeSections} />
              </div>
            )}

            {businessSections.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.businessImpact')}</h2>
                <SectionGroups sections={businessSections} />
              </div>
            )}

            {keyFindings.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.findings')}</h2>
                <div className="blockgrid">
                  <div>
                    <ul>
                      {keyFindings.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {businessImpact.length > 0 && (
              <div className="pd-block">
                <h2>{t('projectDetail.businessImpact')}</h2>
                <div className="blockgrid">
                  <div>
                    <ul>
                      {businessImpact.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pd-side">
            {keyHighlights.length > 0 && (
              <div className="box">
                <h4>{t('projectDetail.keyHighlights')}</h4>
                <ul className="plain">
                  {keyHighlights.map((f) => (
                    <li key={f.Title}>— {String(f.Title).replace(':', '')}</li>
                  ))}
                </ul>
              </div>
            )}

            {flatMetrics && (
              <div className="box">
                <h4>{t('projectDetail.projectMetrics')}</h4>
                {Object.entries(flatMetrics).map(([key, value]) => (
                  <div className="row" key={key}>
                    <span className="k">{key.replace(/_/g, ' ')}</span>
                    <span className="v">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {cityCoverage.length > 0 && (
              <div className="box">
                <h4>{t('projectDetail.coverage')}</h4>
                {cityCoverage.map((c) => (
                  <div className="row" key={c.city}>
                    <span className="k" style={{ textTransform: 'none' }}>{c.city}</span>
                    <span className="v mono">{c.zones}</span>
                  </div>
                ))}
              </div>
            )}

            {fidScores.length > 0 && (
              <div className="box">
                <h4>{t('projectDetail.benchmark')}</h4>
                {fidScores.map((r) => (
                  <div className="row" key={r.optimizer}>
                    <span className="k" style={{ textTransform: 'none' }}>{r.optimizer}</span>
                    <span className="v mono" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {r.score}
                      {r.rank === 1 && <span className="chip">{t('projectDetail.best')}</span>}
                      {r.rank === fidScores.length && fidScores.length > 1 && (
                        <span className="chip">{t('projectDetail.worst')}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {project.technology_used && (
              <div className="box">
                <h4>{t('projectDetail.technologyStack')}</h4>
                {Object.entries(project.technology_used).map(
                  ([category, techs]) =>
                    techs?.length > 0 && (
                      <div className="techgroup" key={category}>
                        <span className="tag">{category.replace(/_/g, ' ')}</span>
                        <div className="chips">
                          {techs.map((tech) => (
                            <span className="chip" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && images.length > 0 && createPortal(
        <div className="pd-lightbox" onClick={() => setLightboxOpen(false)}>
          <button type="button" className="close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={18} strokeWidth={1.8} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="nav prev"
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                className="nav next"
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                aria-label="Next"
              >
                <ChevronRight size={20} strokeWidth={1.8} />
              </button>
            </>
          )}
          <img
            src={images[selected]}
            alt={`${project.title} ${selected + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <div className="count mono">
              {selected + 1} / {images.length}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}

export default ProjectDetail
