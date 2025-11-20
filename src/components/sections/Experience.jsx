import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

const Experience = () => {
  const { t } = useTranslation()
  //const experiences = t('experiences')
  const experiences = t("experiences", { returnObjects: true });
  const experiences2 = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "WafR",
      location: "Casablanca, Morocco",
      type: "Internship",
      duration: "Jul 2025 — Sep 2025",
      description: "Designed and implemented data-driven solutions for retail expansion strategy using geospatial analysis and machine learning.",
      achievements: [
        "Designed and implemented a data-driven zoning system to identify and cluster potential grocery store locations across Morocco",
        "Developed a capacity-constrained clustering algorithm integrating demographic and geographic data to balance zones by store count and population",
        "Collected, cleaned, and analyzed large-scale geospatial datasets using Python, pandas, geopandas, and scikit-learn",
        "Created predictive models and interactive Folium maps to support strategic retail expansion decisions"
      ],
      technologies: ["Python", "pandas", "geopandas", "scikit-learn", "Folium", "Clustering Algorithms", "Geospatial Analysis"],
      category: "internship"
    },

  ]

  const getCategoryColor = (category) => {
    const colors = {
      professional: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      internship: 'bg-green-500/20 text-green-400 border-green-500/30',
      freelance: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    }
    return colors[category] || colors.professional
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Briefcase size={32} className="text-accent-blue mr-3" />
            <h2 className="section-title text-gradient">
              {t('experience.title')}
            </h2>
          </div>
          <p className="section-subtitle">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="card group hover:border-accent-blue/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent-blue transition-colors">
                        {exp.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(exp.category)}`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-3">
                      <span className="font-medium text-accent-purple">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-400 lg:ml-4 lg:mt-0 mt-2">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                </div>

                {exp.achievements && (
                  <div className="mb-4">
                    <h4 className="text-primary font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="text-accent-blue mr-2">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience