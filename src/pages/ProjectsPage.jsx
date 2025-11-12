import React, { useState, useMemo } from 'react'
import { projects, projectCategories } from '../data/projects'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectFilter from '../components/projects/ProjectFilter'
import { Search, Filter, Grid, List } from 'lucide-react'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter)
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        case 'newest':
          return b.year - a.year
        case 'oldest':
          return a.year - b.year
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [activeFilter, searchQuery, sortBy])

  // Calculate project counts
  const projectsCount = useMemo(() => {
    const counts = { all: projects.length }
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projects.filter(p => p.category === category).length
      }
    })
    return counts
  }, [])

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my complete portfolio of {projects.length}+ projects across various domains and technologies
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 p-6 card">
          {/* Search */}
          <div className="relative w-full lg:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Alphabetical</option>
            </select>

            {/* View Toggle */}
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-accent-blue text-white' : 'text-gray-400'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-accent-blue text-white' : 'text-gray-400'}`}
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
        />

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
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
              featured={project.featured}
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