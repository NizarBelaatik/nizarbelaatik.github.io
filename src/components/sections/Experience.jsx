import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      id: 1,
      title: t('experience.dataScienceIntern.title'),
      company: t('experience.dataScienceIntern.company'),
      location: "San Francisco, CA",
      type: "Internship",
      duration: t('experience.dataScienceIntern.duration'),
      description: t('experience.dataScienceIntern.description'),
      achievements: t('experience.dataScienceIntern.achievements', { returnObjects: true }),
      technologies: ["Python", "Scikit-learn", "TensorFlow", "SQL", "AWS"],
      category: "professional"
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      type: "Freelance",
      duration: "2021 - 2022",
      description: "Built full-stack web applications for various clients across different industries.",
      achievements: [
        "Developed 10+ web applications using modern frameworks",
        "Improved client website performance by 40%",
        "Maintained 100% client satisfaction rate"
      ],
      technologies: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
      category: "professional"
    }
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
            {experiences.map((exp, index) => (
              <div key={exp.id} className="card group hover:border-accent-blue/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
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

                {/* Achievements */}
                {exp.achievements && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="text-accent-blue mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
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

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center group"
            >
              {t('experience.viewResume')}
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience