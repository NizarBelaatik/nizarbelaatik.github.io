import React from 'react'
import { ExternalLink, Github, Calendar, ArrowRight, Users, Building, Images } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const ProjectCard = ({ project, featured = false }) => {
  const { t, i18n } = useTranslation()
  
  // Determine if it's a new project (GAN, RAG, Blockchain)
  const isNewProject = ['gan-optimization', 'rag-system', 'blockchain-certificate'].includes(project.id);
  
  // Get project status based on type
  const getProjectStatus = (project) => {
    if (project.projectType === 'research') return 'research';
    if (project.date && new Date().getFullYear() - parseInt(project.date.slice(-4)) <= 1) return 'completed';
    return 'completed';
  };

  // Get the first image from the array
  const getFirstImage = (images) => {
    if (!images || images.length === 0) return null;
    return Array.isArray(images) ? images[0] : images;
  };

  // Count total images
  const imageCount = Array.isArray(project.image) ? project.image.length : 1;

  const status = getProjectStatus(project);
  const firstImage = getFirstImage(project.image);

  return (
    <div className={`card group hover:scale-105 transition-all duration-300 ${
      featured ? 'border-2 border-accent-blue/20' : ''
    } ${isNewProject ? 'ring-1 ring-green-500/20' : ''}`}>
      
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        {firstImage ? (
          <img 
            src={firstImage} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
        )}
        
        {/* Image Count Badge */}
        {imageCount > 1 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 rounded-full bg-black/60 text-primary text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
              <Images size={12} />
              {imageCount}
            </span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges Container */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* Project Status Badge */}
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === 'completed' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : status === 'research'
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {status}
          </span>

        </div>

        {/* Featured Badge */}
        {/*featured && (
          <div className="absolute top-12 left-3">
            <span className="px-2 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-semibold border border-accent-blue/30">
              Featured
            </span>
          </div>
        )*/}

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {project.live_demo && project.live_demo !== "#" && (
              <a 
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github_link && project.github_link !== "#" && (
              <a 
                href={project.github_link}
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

      {/* Rest of the ProjectCard content remains the same */}
      <div className="flex-1">
        {/* Header with title and metadata */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary group-hover:text-accent-blue transition-colors line-clamp-1">
              {project.title}
            </h3>
            
            {/* Project metadata */}
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {getProjectYear(project.date)}
              </span>
              
              {project.client_for && (
                <span className="flex items-center">
                  <Building size={14} className="mr-1" />
                  {project.client_for}
                </span>
              )}
              
              {project.role && (
                <span className="flex items-center">
                  <Users size={14} className="mr-1" />
                  {project.role}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technology?.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technology?.length > 4 && (
            <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
              +{project.technology.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link 
          to={`/projects/${project.id}`}
          className="w-full bg-accent-blue text-primary py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors font-medium flex items-center justify-center"
        >
          {t('projects.viewDetails')}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  )
}

// Helper function to extract year
const getProjectYear = (date) => {
  if (!date) return '2024';
  const yearMatch = date.match(/\b(20\d{2})\b/);
  return yearMatch ? yearMatch[1] : '2024';
};

export default ProjectCard;