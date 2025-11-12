import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectCategories } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'
import ProjectFilter from '../projects/ProjectFilter'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects.filter(project => project.featured).slice(0, 6)
    }
    return projects
      .filter(project => project.category === activeFilter && project.featured)
      .slice(0, 6)
  }, [activeFilter])

  // Calculate project counts for each category
  const projectsCount = useMemo(() => {
    const counts = { all: projects.length }
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projects.filter(p => p.category === category).length
      }
    })
    return counts
  }, [])

  // Get featured projects count by category
  const featuredCounts = useMemo(() => {
    const counts = {}
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projects.filter(p => 
          p.category === category && p.featured
        ).length
      }
    })
    return counts
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Showcasing my best work across different domains and technologies
          </p>
        </div>

        {/* Project Filter */}
        <ProjectFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projectsCount={projectsCount}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={project.featured}
            />
          ))}
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(projectCategories)
            .filter(([key]) => key !== 'all')
            .map(([key, label]) => (
              <div key={key} className="card text-center group hover:border-accent-blue/30 transition-all duration-300">
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  {featuredCounts[key] || 0}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {label}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {projectsCount[key] || 0} total projects
                </div>
              </div>
            ))
          }
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/projects"
            className="btn-primary inline-flex items-center group"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects