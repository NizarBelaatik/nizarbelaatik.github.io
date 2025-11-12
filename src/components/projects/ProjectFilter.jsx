import React from 'react'
import { projectCategories } from '../../data/projects'

const ProjectFilter = ({ activeFilter, onFilterChange, projectsCount }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {Object.entries(projectCategories).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeFilter === key
              ? 'bg-accent-blue text-white shadow-lg shadow-blue-500/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          {label}
          <span className="ml-2 text-sm opacity-75">
            ({key === 'all' ? projectsCount.all : projectsCount[key] || 0})
          </span>
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter