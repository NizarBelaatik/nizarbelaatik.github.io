import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Building } from 'lucide-react'
import projects_ENG from '../data/projectsData'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects_ENG.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  // Helper functions
  const getProjectStatus = (project) => {
    if (project.projectType === 'research') return 'research';
    if (project.date && new Date().getFullYear() - parseInt(project.date.slice(-4)) <= 1) return 'completed';
    return 'completed';
  };

  const getProjectYear = (date) => {
    if (!date) return '2024';
    const yearMatch = date.match(/\b(20\d{2})\b/);
    return yearMatch ? yearMatch[1] : '2024';
  };

  const isFeatured = ['rag-system', 'gan-optimization', 'blockchain-certificate'].includes(project.id);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-900">
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
                getProjectStatus(project) === 'completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : getProjectStatus(project) === 'research'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {getProjectStatus(project)}
              </span>
              {isFeatured && (
                <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-semibold border border-accent-blue/30">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400">
                <Calendar size={18} className="mr-3" />
                <span>{getProjectYear(project.date)}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Tag size={18} className="mr-3" />
                <span className="capitalize">{project.category || 'Software Development'}</span>
              </div>
              {project.client_for && (
                <div className="flex items-center text-gray-400">
                  <Building size={18} className="mr-3" />
                  <span>{project.client_for}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center text-gray-400">
                  <Users size={18} className="mr-3" />
                  <span>{project.role}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github_link && project.github_link !== "#" && (
                <a 
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors border border-gray-600"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              )}
              {(project.live_demo || project.research_paper) && (
                <a 
                  href={project.live_demo || project.research_paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  {project.live_demo ? 'Live Demo' : 'View Research'}
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
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technology?.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-lg font-medium border border-accent-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role & Responsibilities */}
            {project.RoleResp && project.RoleResp.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Role & Responsibilities</h3>
                <div className="space-y-6">
                  {project.RoleResp.map((roleSection, index) => (
                    <div key={index}>
                      {roleSection.Title_1 && (
                        <h4 className="text-white font-semibold mb-3 text-lg">{roleSection.Title_1}</h4>
                      )}
                      {roleSection.Data && (
                        <div className="space-y-4">
                          {roleSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-2">{item.Title}</h5>
                              )}
                              {item.Data && (
                                <ul className="space-y-2">
                                  {item.Data.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-gray-300 flex items-start">
                                      <span className="text-accent-blue mr-2 mt-1">•</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.KeyFeatures && project.KeyFeatures.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-6">
                  {project.KeyFeatures.map((featureSection, index) => (
                    <div key={index}>
                      {featureSection.Title_1 && (
                        <h4 className="text-white font-semibold mb-3 text-lg">{featureSection.Title_1}</h4>
                      )}
                      {featureSection.Data && (
                        <div className="space-y-4">
                          {featureSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-2">{item.Title}</h5>
                              )}
                              {item.Data && (
                                <ul className="space-y-2">
                                  {item.Data.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-gray-300 flex items-start">
                                      <span className="text-accent-blue mr-2 mt-1">•</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.ChallSolu && project.ChallSolu.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Challenges & Solutions</h3>
                <div className="space-y-6">
                  {project.ChallSolu.map((challengeSection, index) => (
                    <div key={index}>
                      {challengeSection.Data && (
                        <div className="space-y-4">
                          {challengeSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-gray-700/50 rounded-lg p-4">
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-2">{item.Title}</h5>
                              )}
                              {item.Data && (
                                <ul className="space-y-2">
                                  {item.Data.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-gray-300 flex items-start">
                                      <span className="text-accent-blue mr-2 mt-1">•</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Highlights */}
            {project.KeyFeatures && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-white font-semibold mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  {project.KeyFeatures[0]?.Data?.slice(0, 5).map((feature, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">•</span>
                      {feature.Title?.replace(':', '')}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Metrics */}
            {(() => {
              const metrics = {};
              if (project.id === 'rag-system') {
                metrics.exercises = '1.5K+';
                metrics.accuracy = '95%';
                metrics.models = '3+';
              } else if (project.id === 'gan-optimization') {
                metrics.optimizers = '4';
                metrics.epochs = '15';
                metrics.dataset = 'CIFAR-10';
              } else if (project.id === 'blockchain-certificate') {
                metrics.assets = '50+';
                metrics.transactions = '100+';
                metrics.security = '100%';
              }
              
              return Object.keys(metrics).length > 0 ? (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-4">Project Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-accent-blue font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null;
            })()}

            {/* Technology Stack */}
            {project.technology_used && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-white font-semibold mb-4">Technology Stack</h4>
                <div className="space-y-4">
                  {Object.entries(project.technology_used).map(([category, techs]) => (
                    techs && techs.length > 0 && (
                      <div key={category}>
                        <h5 className="text-accent-blue text-sm font-medium mb-2 capitalize">
                          {category.replace('_', ' ')}
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {techs.map((tech, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail