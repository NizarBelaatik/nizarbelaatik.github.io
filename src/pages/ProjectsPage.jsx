import React, { useState, useMemo } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectFilter from '../components/projects/ProjectFilter'
import { Search, Filter, Grid, List } from 'lucide-react'
//import projects_ENG from '../data/projectsData_ENG'

import projects_ENG from '../data/projectsData_ENG'
import projects_FR from '../data/projectsData_FR'
import { useTranslation } from 'react-i18next'

// Define project categories based on your new structure
const projectCategories = {
  'all': 'All Projects',
  'ai-ml': 'AI & Machine Learning',
  'blockchain': 'Blockchain & Web3',
  'web': 'Web Applications',
  'desktop': 'Desktop Applications',
  'research': 'Research Projects'
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')


  const { t, i18n } = useTranslation()
  const projectsDATA = i18n.language === "fr" ? projects_FR : projects_ENG

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsDATA

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => {
        switch (activeFilter) {
          case 'ai-ml':
            return project.category?.includes('AI') || 
                   project.technology_used?.ai_ml ||
                   project.title?.includes('GAN');
          case 'blockchain':
            return project.category?.includes('Blockchain') || 
                   project.technology_used?.blockchain;
          case 'web':
            return project.projectType === 'web';
          case 'desktop':
            return project.projectType === 'desk';
          case 'research':
            return project.projectType === 'research';
          default:
            return true;
        }
      })
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technology?.some(tech => tech.toLowerCase().includes(query)) ||
        project.category?.toLowerCase().includes(query) ||
        project.role?.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          // Prioritize new AI/Blockchain projects
          const aFeatured = ['rag-system', 'gan-optimization', 'blockchain-certificate'].includes(a.id)
          const bFeatured = ['rag-system', 'gan-optimization', 'blockchain-certificate'].includes(b.id)
          return (bFeatured ? 1 : 0) - (aFeatured ? 1 : 0)
        case 'newest':
          // Extract year from date string
          const getYear = (date) => {
            if (!date) return 2024
            const yearMatch = date.match(/\b(20\d{2})\b/)
            return yearMatch ? parseInt(yearMatch[1]) : 2024
          }
          return getYear(b.date) - getYear(a.date)
        case 'oldest':
          const getYearOldest = (date) => {
            if (!date) return 2024
            const yearMatch = date.match(/\b(20\d{2})\b/)
            return yearMatch ? parseInt(yearMatch[1]) : 2024
          }
          return getYearOldest(a.date) - getYearOldest(b.date)
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [activeFilter, searchQuery, sortBy,projectsDATA])

  // Calculate project counts
  const projectsCount = useMemo(() => {
    const counts = { all: projectsDATA.length }
    
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projectsDATA.filter(project => {
          switch (category) {
            case 'ai-ml':
              return project.category?.includes('AI') || 
                     project.technology_used?.ai_ml ||
                     project.title?.includes('GAN');
            case 'blockchain':
              return project.category?.includes('Blockchain') || 
                     project.technology_used?.blockchain;
            case 'web':
              return project.projectType === 'web';
            case 'desktop':
              return project.projectType === 'desk';
            case 'research':
              return project.projectType === 'research';
            default:
              return false;
          }
        }).length
      }
    })
    return counts
  }, [])

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('projects.viewAll')}
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('projects.discoverMyProjects', { number: projectsDATA.length })}
          </p> */}
        </div>

        {/* Controls Bar - New Certificate Style */}
<div className="
  flex flex-col lg:flex-row gap-6 justify-between items-center
  mb-10 p-6 rounded-xl
  bg-white/5 border border-white/10 backdrop-blur-lg
  shadow-lg transition-all
">
  
  {/* Search */}
  <div className="relative w-full lg:w-72">
    <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      placeholder="Search projects..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        w-full pl-10 pr-4 py-3 rounded-lg
        bg-white/5 border border-white/10 text-white
        placeholder-gray-400
        focus:outline-none focus:border-accent-blue
        transition-colors
      "
    />
  </div>

  {/* View Controls */}
  <div className="flex items-center gap-4">

    {/* Sort Dropdown */}
    <div className="relative">
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="
      appearance-none px-4 py-3 w-48
      bg-white/5 border border-white/10
      rounded-lg text-white
      focus:outline-none focus:border-accent-blue
      transition-colors
      cursor-pointer
    "
  >
    <option className="bg-gray-900 text-white" value="featured">Featured First</option>
    <option className="bg-gray-900 text-white" value="newest">Newest First</option>
    <option className="bg-gray-900 text-white" value="oldest">Oldest First</option>
    <option className="bg-gray-900 text-white" value="name">Alphabetical</option>
  </select>

  {/* Custom Dropdown Arrow */}
  <svg
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
    width="16" height="16" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
</div>


    {/* View Toggle */}
    <div className="
      flex bg-white/5 rounded-lg p-1 border border-white/10
    ">
      <button
        onClick={() => setViewMode('grid')}
        className={`
          p-2 rounded transition-colors
          ${viewMode === 'grid'
            ? 'bg-accent-blue/30 text-accent-blue'
            : 'text-gray-400 hover:text-white'}
        `}
      >
        <Grid size={20} />
      </button>

      <button
        onClick={() => setViewMode('list')}
        className={`
          p-2 rounded transition-colors
          ${viewMode === 'list'
            ? 'bg-accent-blue/30 text-accent-blue'
            : 'text-gray-400 hover:text-white'}
        `}
      >
        <List size={20} />
      </button>
    </div>
  </div>
</div>


        {/* Project Filter */}
        <ProjectFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projectsCount={projectsCount}
          categories={projectCategories}
        />

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">
            Showing {filteredProjects.length} of {projectsDATA.length} projects
            {activeFilter !== 'all' && ` in ${projectCategories[activeFilter]}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              featured={['rag-system', 'gan-optimization', 'blockchain-certificate'].includes(project.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Filter size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search criteria or filter selection
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage