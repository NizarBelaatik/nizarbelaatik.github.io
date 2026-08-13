import React, { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, LayoutGrid, List, SearchX } from 'lucide-react'
import projects_ENG from '../data/projectsData_ENG'
import projects_FR from '../data/projectsData_FR'
import NeuralNetCanvas from '../components/v6/NeuralNetCanvas'
import CursorGlow from '../components/v6/CursorGlow'
import Counter from '../components/v6/Counter'
import Reveal from '../components/v6/Reveal'
import BentoCard from '../components/projects/BentoCard'
import ProjectListRow from '../components/projects/ProjectListRow'
import { PROJECT_CATEGORIES, countByCategory, matchesCategory } from '../utils/projectUtils'

const ProjectsPage = () => {
  const { t, i18n } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const heroRef = useRef(null)

  const all = i18n.language?.startsWith('fr') ? projects_FR : projects_ENG
  const counts = useMemo(() => countByCategory(all), [all])
  const cats = PROJECT_CATEGORIES.filter((c) => counts[c.key] > 0)

  const techCount = useMemo(() => {
    const set = new Set()
    all.forEach((p) => (p.technology || []).forEach((tech) => set.add(tech.toLowerCase())))
    return set.size
  }, [all])

  const filtered = useMemo(() => {
    let list = all.filter((p) => matchesCategory(p, activeFilter))
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technology?.some((tech) => tech.toLowerCase().includes(q)) ||
          p.category?.toLowerCase().includes(q)
      )
    }
    return list
  }, [all, activeFilter, searchQuery])

  return (
    <div className="v6">
      <div className="plhero" ref={heroRef}>
        <NeuralNetCanvas className="netviz" />
        <CursorGlow containerRef={heroRef} />

        <div className="wrap">
          <p className="kick mono">
            <span className="dot" />
            <span className="txt">{t('nav.projects')}</span>
          </p>
          <h1 className="pd-title">{t('projects.title')}</h1>
          <p className="pd-desc">{t('projects.subtitle')}</p>
        </div>

        <div className="wrap">
          <div className="ministats">
            <div className="ministat">
              <div className="n">
                <Counter to={all.length} />+
              </div>
              <div className="l mono">{t('v6.stats.projects')}</div>
            </div>
            <div className="ministat">
              <div className="n">
                <Counter to={cats.length - 1} />
              </div>
              <div className="l mono">{t('projects.categoriesLabel')}</div>
            </div>
            <div className="ministat">
              <div className="n">
                <Counter to={techCount} />+
              </div>
              <div className="l mono">{t('nav.stack')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap page-end" style={{ paddingTop: 'clamp(36px, 5vw, 56px)' }}>
        <Reveal className="filters rv" role="group" aria-label={t('projects.title')}>
          {cats.map((c) => (
            <button
              key={c.key}
              type="button"
              className="f"
              aria-pressed={activeFilter === c.key}
              onClick={() => setActiveFilter(c.key)}
            >
              <s />
              <em>
                {t(c.labelKey)}
                <i>{counts[c.key]}</i>
              </em>
            </button>
          ))}
        </Reveal>

        <div className="toolbar">
          <div className="search">
            <Search size={15} strokeWidth={1.6} />
            <input
              type="text"
              placeholder={t('projects.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="viewtoggle">
            <button
              type="button"
              aria-pressed={viewMode === 'grid'}
              aria-label="Grid view"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={15} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-pressed={viewMode === 'list'}
              aria-label="List view"
              onClick={() => setViewMode('list')}
            >
              <List size={15} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="resultcount mono">
          {t('projects.showingCount', { shown: filtered.length, total: all.length })}
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <SearchX size={34} strokeWidth={1.3} />
            <h3>{t('projects.noResultsTitle')}</h3>
            <p>{t('projects.noResultsBody')}</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="bento">
            {filtered.map((project, i) => (
              <BentoCard key={project.id} project={project} delay={Math.min(i, 8) * 60} />
            ))}
          </div>
        ) : (
          <div className="plist">
            {filtered.map((project, i) => (
              <ProjectListRow key={project.id} project={project} delay={Math.min(i, 8) * 50} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
