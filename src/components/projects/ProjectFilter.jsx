import React from 'react'

const ProjectFilter = ({ activeFilter, onFilterChange, projectsCount, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {Object.entries(categories).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === key
              ? 'bg-accent-blue text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {label}
          <span className={`px-2 py-1 rounded-full text-xs ${
            activeFilter === key ? 'bg-blue-500' : 'bg-gray-600'
          }`}>
            {projectsCount[key] || 0}
          </span>
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter