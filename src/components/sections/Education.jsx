import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, Award, GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
  const { t } = useTranslation()

  const education = [
    {
      id: 1,
      category: "masters",
      degree: t('education.masters.degree'),
      university: t('education.masters.university'),
      location: t('education.masters.location'),
      duration: t('education.masters.duration'),
      description: t('education.masters.description'),
      achievements: t('education.masters.achievements', { returnObjects: true }),
      relevantCourses: t('education.masters.relevantCourses', { returnObjects: true })
    },
    {
      id: 2,
      category: "bachelors", 
      degree: t('education.bachelors.degree'),
      university: t('education.bachelors.university'),
      location: t('education.bachelors.location'),
      duration: t('education.bachelors.duration'),
      description: t('education.bachelors.description'),
      achievements: t('education.bachelors.achievements', { returnObjects: true }),
      relevantCourses: t('education.bachelors.relevantCourses', { returnObjects: true })
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap size={32} className="text-accent-purple mr-3" />
            <h2 className="section-title text-gradient">
              {t('education.title')}
            </h2>
          </div>
          <p className="section-subtitle">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="card group hover:border-accent-purple/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent-purple transition-colors">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        edu.category === 'masters' 
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }`}>
                        {edu.category === 'masters' ? t('education.masters.label') : t('education.bachelors.label')}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="font-medium text-accent-blue text-lg">{edu.university}</span>
                      <span className="mx-3">•</span>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-4">
                      {edu.description}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-400 lg:ml-4 lg:mt-0 mt-2">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Award size={18} className="text-accent-green mr-2" />
                      <h4 className="text-primary font-semibold">{t('education.achievementsTitle')}:</h4>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start">
                          <span className="text-accent-purple mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <div className="flex items-center mb-3">
                      <BookOpen size={18} className="text-accent-blue mr-2" />
                      <h4 className="text-primary font-semibold">{t('education.coursesTitle')}:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-lg text-sm border border-accent-blue/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education