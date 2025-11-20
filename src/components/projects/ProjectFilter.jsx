import React from 'react'

const ProjectFilter = ({ activeFilter, onFilterChange, projectsCount, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {Object.entries(categories).map(([key, label]) => {
        
        const isActive = activeFilter === key

        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`
              px-6 py-3 rounded-xl font-medium transition-all duration-300
              flex items-center gap-3 border backdrop-blur-lg
              ${
                isActive
                  ? 'bg-accent-blue/20 border-accent-blue/40 text-accent-blue shadow-lg'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }
            `}
          >
            {/* Label */}
            <span className="text-sm">{label}</span>

            {/* Count Badge */}
            <span
              className={`
                px-2 py-1 rounded-full text-xs border
                ${
                  isActive
                    ? 'bg-accent-blue/30 text-accent-blue border-accent-blue/40'
                    : 'bg-white/5 text-gray-300 border-white/10'
                }
              `}
            >
              {projectsCount[key] || 0}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilter
