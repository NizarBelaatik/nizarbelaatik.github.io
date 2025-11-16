import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Building, ChevronLeft, ChevronRight, X } from 'lucide-react'
import projects_ENG from '../data/projectsData'
import { projectsFeatured }  from '../data/projectSchema'


const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects_ENG.find(p => p.id === id)

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const isFeatured = projectsFeatured.includes(project.id)//'rag-system', 'gan-optimization', 'blockchain-certificate'

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

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6">

        <Link 
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-accent-blue transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          <div className="space-y-4">
            <div 
              className="rounded-2xl overflow-hidden cursor-pointer bg-gray-800"
              onClick={() => openModal(0)}
            >
              {images.length > 0 ? (
                <img 
                  src={images[0]} 
                  alt={project.title}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(0, 4).map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer border-2 ${
                      index === 0 ? 'border-accent-blue' : 'border-transparent'
                    } hover:border-accent-blue transition-colors`}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">



            {project.RoleResp && project.RoleResp.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-4">Role & Responsibilities</h3>
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

            {project.KeyFeatures && project.KeyFeatures.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-4">Key Features</h3>
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

            {project.ChallSolu && project.ChallSolu.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-4">Challenges & Solutions</h3>
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

          <div className="space-y-6">

            {project.KeyFeatures && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl text-white font-semibold mb-4">Key Highlights</h4>
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

            {(() => {
              const metrics = {}
              if (project.id === 'rag-system') {
                metrics.exercises = '1.5K+'
                metrics.accuracy = '95%'
                metrics.models = '3+'
              } else if (project.id === 'gan-optimization') {
                metrics.optimizers = '4'
                metrics.epochs = '15'
                metrics.dataset = 'CIFAR-10'
              } else if (project.id === 'blockchain-certificate') {
                metrics.assets = '50+'
                metrics.transactions = '100+'
                metrics.security = '100%'
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
              ) : null
            })()}

            {project.technology_used && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="ttext-xl ext-white font-semibold mb-4">Technology Stack</h4>
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
