import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../projects/ProjectCard'
import ProjectFilter from '../projects/ProjectFilter'
import { ArrowRight } from 'lucide-react'
import projects_ENG from '../../data/projectsData_ENG'
import projects_FR from '../../data/projectsData_FR'
import { projectsFeatured }  from '../../data/projectSchema'

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

const Projects = () => {
  const { t, i18n } = useTranslation()
  const projectsDATA = i18n.language === "fr" ? projects_FR : projects_ENG


  const [activeFilter, setActiveFilter] = useState('all')
  
  console.log("Fi18n.language", i18n.language);
  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      // Show featured projects for "all" filter (your new AI/Blockchain projects)
      return projectsDATA
        .filter(project => 
          ['retail-zoning-system','rag-system', 'gan-optimization', 'blockchain-certificate','recrusmart-microservices','1'].includes(project.id)
        )
        .slice(0, 6)
    }
    
    // Filter by category for specific filters
    return projectsDATA
      .filter(project => {
        switch (activeFilter) {
          case 'ai-ml':
            return project.category?.includes('AI') || 
                   project.technology_used?.ai_ml ||
                   project.title?.includes('GAN') ||
                   project.technology_used?.ml_clustering ||
                   project.title?.includes('Data Science');
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
      .slice(0, 6)
  }, [activeFilter, projectsDATA])

  // Calculate project counts for each category
  const projectsCount = useMemo(() => {
    const counts = { all: projectsDATA.length }
    
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projectsDATA.filter(project => {
          switch (category) {
            case 'ai-ml':
              return project.category?.includes('AI') || 
                     project.technology_used?.ai_ml ||
                     project.title?.includes('GAN')||
                    project.technology_used?.ml_clustering ||
                    project.title?.includes('Data Science');
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

  // Get featured projects count by category (your new projects)
  const featuredCounts = useMemo(() => {
    const counts = {}
    const featuredProjectIds = projectsFeatured;
    
    Object.keys(projectCategories).forEach(category => {
      if (category !== 'all') {
        counts[category] = projectsDATA.filter(project => 
          featuredProjectIds.includes(project.id) && 
          (() => {
            switch (category) {
              case 'ai-ml':
                return  project.category?.includes('AI') || 
                        project.technology_used?.ai_ml ||
                        project.title?.includes('GAN')||
                        project.technology_used?.ml_clustering ||
                        project.title?.includes('Data Science');
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
          })()
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
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('projects.featured')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work in AI, blockchain, and full-stack development
          </p>
        </div>

        {/* Project Filter */}
        <ProjectFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projectsCount={projectsCount}
          categories={projectCategories}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={['retail-zoning-system','rag-system', 'gan-optimization', 'blockchain-certificate'].includes(project.id)}
            />
          ))}
        </div>

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No featured projects found for this category.
            </p>
          </div>
        )}

        {/* Category Overview 
           total nbr by project*/}
        {/*  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {Object.entries(projectCategories)
            .filter(([key]) => key !== 'all')
            .map(([key, label]) => (
              <div 
                key={key} 
                className="bg-gray-700 rounded-lg p-4 text-center group hover:border-accent-blue/30 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-600"
              >
                <div className="text-2xl font-bold text-accent-blue mb-2">
                  {featuredCounts[key] || 0}
                </div>
                <div className="text-gray-300 text-sm font-medium mb-1">
                  {label}
                </div>
                <div className="text-xs text-gray-400">
                  {projectsCount[key] || 0} total
                </div>
              </div>
            ))
          }
        </div> */}


        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-accent-blue text-primary rounded-lg font-medium hover:bg-blue-600 transition-colors group"
          >
            {t('projects.viewAll')}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects