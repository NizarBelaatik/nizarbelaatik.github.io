import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Building, ChevronLeft, ChevronRight, X, Briefcase } from 'lucide-react'
import projects_ENG from '../data/projectsData_ENG'
import projects_FR from '../data/projectsData_FR'
import { projectsFeatured } from '../data/projectSchema'

const ProjectDetail = () => {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const projectsDATA = i18n.language === "fr" ? projects_FR : projects_ENG
  const project = projectsDATA.find(p => p.id === id)

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark/80 to-primary-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('projectDetail.notFound')}</h1>
          <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t('projectDetail.backToProjects')}
          </Link>
        </div>
      </div>
    )
  }

  const getProjectStatus = (project) => {
    if (project.projectType === 'research') return 'research'
    if (project.date && new Date().getFullYear() - parseInt(project.date.slice(-4)) <= 1) return 'completed'
    return 'completed'
  }

  const getProjectYear = (date) => {
    if (!date) return '2024'
    const yearMatch = date.match(/\b(20\d{2})\b/)
    return yearMatch ? yearMatch[1] : '2024'
  }

  const isFeatured = projectsFeatured.includes(project.id)

  const getProjectImages = (images) => {
    if (!images) return []
    return Array.isArray(images) ? images : [images]
  }

  const images = getProjectImages(project.image)

  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)

  const openModal = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-500/20 text-green-400 border-green-500/30',
      research: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      development: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    }
    return colors[status] || colors.completed
  }

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <Link 
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-accent-blue transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {t('projectDetail.backToProjects')}
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Images Section */}
          <div className="space-y-4">
            <div 
              className="card group hover:border-accent-blue/30 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(0)}
            >
              {images.length > 0 ? (
                <img 
                  src={images[0]} 
                  alt={project.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-800 rounded-xl">
                  <span className="text-4xl">🚀</span>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(0, 4).map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
                      index === 0 ? 'border-accent-blue' : 'border-transparent hover:border-accent-blue'
                    }`}
                    onClick={() => openModal(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
                {images.length > 4 && (
                  <div 
                    className="rounded-lg bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center cursor-pointer hover:border-accent-blue transition-colors"
                    onClick={() => openModal(0)}
                  >
                    <span className="text-gray-400 text-sm">+{images.length - 4}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Project Info Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(getProjectStatus(project))}`}>
                {getProjectStatus(project)}
              </span>
              {/* isFeatured && (
                <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-semibold border border-accent-blue/30">
                  {t('projectDetail.featured')}
                </span>
              ) */}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Project Metadata */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400">
                <Calendar size={18} className="mr-3 text-accent-blue" />
                <span>{getProjectYear(project.date)}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Tag size={18} className="mr-3 text-accent-blue" />
                <span className="capitalize">{project.category || 'Software Development'}</span>
              </div>
              {project.client_for && (
                <div className="flex items-center text-gray-400">
                  <Building size={18} className="mr-3 text-accent-blue" />
                  <span>{project.client_for}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center text-gray-400">
                  <Users size={18} className="mr-3 text-accent-blue" />
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
                  className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors border border-gray-600 group"
                >
                  <Github size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  {t('projectDetail.viewCode')}
                </a>
              )}
              {(project.live_demo || project.research_paper) && (
                <a 
                  href={project.live_demo || project.research_paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors group"
                >
                  <ExternalLink size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  {project.live_demo ? t('projectDetail.liveDemo') : t('projectDetail.viewResearch')}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isModalOpen && images.length > 0 && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-accent-blue transition-colors z-10"
              >
                <X size={32} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <img 
                src={images[selectedImageIndex]} 
                alt={`${project.title} ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Detailed Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Role & Responsibilities */}
            {project.RoleResp && project.RoleResp.length > 0 && (
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">{t('projectDetail.roleResponsibilities')}</h3>
                <div className="space-y-6">
                  {project.RoleResp.map((roleSection, index) => (
                    <div key={index}>
                      {roleSection.Title_1 && (
                        <h4 className="text-white font-semibold mb-4 text-lg">{roleSection.Title_1}</h4>
                      )}
                      {roleSection.Data && (
                        <div className="space-y-4">
                          {roleSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-3">{item.Title}</h5>
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
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">{t('projectDetail.keyFeatures')}</h3>
                <div className="space-y-6">
                  {project.KeyFeatures.map((featureSection, index) => (
                    <div key={index}>
                      {featureSection.Title_1 && (
                        <h4 className="text-white font-semibold mb-4 text-lg">{featureSection.Title_1}</h4>
                      )}
                      {featureSection.Data && (
                        <div className="space-y-4">
                          {featureSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-3">{item.Title}</h5>
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
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">{t('projectDetail.challengesSolutions')}</h3>
                <div className="space-y-6">
                  {project.ChallSolu.map((challengeSection, index) => (
                    <div key={index}>
                      {challengeSection.Data && (
                        <div className="space-y-4">
                          {challengeSection.Data.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-gray-700/50 rounded-lg p-4">
                              {item.Title && (
                                <h5 className="text-accent-blue font-medium mb-3">{item.Title}</h5>
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

            {project.id === 'recrusmart-microservices' && (
            <div className="card group hover:border-accent-blue/30 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6">Architecture & System Design</h3>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.researchResults?.performanceMetrics?.map((metric, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <div className="text-accent-blue font-semibold text-lg">{metric.metric}</div>
                    <div className="text-white text-xl font-bold my-2">{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.description}</div>
                  </div>
                ))}
              </div>

              {/* Architecture Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl text-white font-semibold">Microservices Architecture</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">•</span>
                      <span><strong>6 Bounded Contexts</strong> aligned with DDD principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">•</span>
                      <span><strong>Polyglot Persistence</strong> with MongoDB & MySQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">•</span>
                      <span><strong>Event-Driven Communication</strong> via RabbitMQ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">•</span>
                      <span><strong>Containerized Deployment</strong> with Docker & Kubernetes</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl text-white font-semibold">Business Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    {project.researchResults?.businessImpact?.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-blue mr-2 mt-1">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
            {/* Compact FID display for sidebar */}
            {project.researchResults && project.researchResults.fidScores && (
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h4 className="text-white font-semibold mb-4">FID Score Comparison</h4>
                <div className="space-y-3">
                  {project.researchResults.fidScores.map((result, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{result.optimizer}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-accent-blue font-mono text-sm">{result.score}</span>
                        {result.rank === 1 && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Best</span>
                        )}
                        {result.rank === 4 && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Worst</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Highlights */}
            {project.KeyFeatures && (
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h4 className="text-xl text-white font-semibold mb-4">{t('projectDetail.keyHighlights')}</h4>
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
              const metrics = {}
              if (project.id === 'rag-system') {
                metrics.exercises = '1.5K+'
                metrics.accuracy = '95%'
                metrics.models = '3+'
              } else if (project.id === 'gan-optimization') {
                metrics.optimizers = project.metrics?.optimizers_tested || '4'
                metrics.epochs = project.metrics?.training_epochs || '15'
                metrics.dataset = project.metrics?.dataset_size || 'CIFAR-10'
                metrics.best_fid = project.metrics?.best_fid_score || '284.68'
              } else if (project.id === 'recrusmart-microservices') {
                metrics.microservices = project.metrics?.microservices || '6'
                metrics.technologies = project.metrics?.technologies || '9+'
                metrics.architecture = project.metrics?.bounded_contexts || 'DDD'
                metrics.deployment = project.metrics?.deployment || 'K8s'
              }

              return Object.keys(metrics).length > 0 ? (
                <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                  <h4 className="text-white font-semibold mb-4">{t('projectDetail.projectMetrics')}</h4>
                  <div className="space-y-3">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-accent-blue font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            })()}

            {/* Technology Stack */}
            {project.technology_used && (
              <div className="card group hover:border-accent-blue/30 transition-all duration-300">
                <h4 className="text-xl text-white font-semibold mb-4">{t('projectDetail.technologyStack')}</h4>
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