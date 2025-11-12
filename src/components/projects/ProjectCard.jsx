import React from 'react'
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div className={`card group hover:scale-105 transition-all duration-300 ${
      featured ? 'border-2 border-accent-blue/20' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            project.status === 'completed' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : project.status === 'research'
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-semibold border border-accent-blue/30">
              Featured
            </span>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            <Link 
              to={`/projects/${project.id}`}
              className="p-3 bg-accent-blue rounded-full hover:bg-blue-600 transition-colors"
            >
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400 flex items-center">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </span>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/5 rounded-lg">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-accent-blue font-bold text-sm">{value}</div>
                <div className="text-gray-400 text-xs capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link 
            to={`/projects/${project.id}`}
            className="flex-1 bg-accent-blue text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors font-medium flex items-center justify-center"
          >
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard