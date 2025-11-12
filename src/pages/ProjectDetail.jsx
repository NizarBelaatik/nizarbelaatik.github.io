import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary inline-flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-accent-blue transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : project.status === 'research'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-semibold border border-accent-blue/30">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 mb-6">
              {project.fullDescription || project.description}
            </p>

            {/* Project Meta */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400">
                <Calendar size={18} className="mr-3" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Tag size={18} className="mr-3" />
                <span className="capitalize">{project.category.replace('-', ' ')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Technologies */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-lg font-medium border border-accent-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            {project.details && (
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
                <div className="space-y-6">
                  {project.details.problem && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Problem</h4>
                      <p className="text-gray-400">{project.details.problem}</p>
                    </div>
                  )}
                  {project.details.solution && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-400">{project.details.solution}</p>
                    </div>
                  )}
                  {project.details.challenges && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenges</h4>
                      <p className="text-gray-400">{project.details.challenges}</p>
                    </div>
                  )}
                  {project.details.learnings && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Learnings</h4>
                      <p className="text-gray-400">{project.details.learnings}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Highlights */}
            {project.highlights && (
              <div className="card">
                <h4 className="text-white font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && (
              <div className="card">
                <h4 className="text-white font-semibold mb-4">Results</h4>
                <div className="space-y-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-accent-blue font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publication */}
            {project.publication && (
              <div className="card">
                <h4 className="text-white font-semibold mb-2">Publication</h4>
                <p className="text-gray-400 text-sm">{project.publication}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail