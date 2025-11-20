import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, ExternalLink, Award, FileText, Clock } from 'lucide-react'
import { certificationsENG, alxProgramENG  } from '../../data/certifications/certificationsENG'
import { certificationsFR , alxProgramFR} from '../../data/certifications/certificationsFR'
import { SiCoursera } from 'react-icons/si'
//import { IbiIcon /* for IBM logo */ } from 'brand-logos';

const Certifications = () => {
  const { t, i18n } = useTranslation()

  // Load certifications based on selected lang
  const certifications = i18n.language === "fr" ? certificationsFR : certificationsENG

  // Load ALX program from language files
  //onst alxProgram = t("certifications.alx", { returnObjects: true })
  const alxProgram = i18n.language === "fr" ? alxProgramFR : alxProgramENG
  const getCategoryColor = (category) => {
    const colors = {
      'machine-learning': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'data-analytics': 'bg-green-500/20 text-green-400 border-green-500/30',
      'data-engineering': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'ai': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'deep-learning': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'programming': 'bg-red-500/20 text-red-400 border-red-500/30',
      'professional': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
      'project-management': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    }
    return colors[category] || colors.programming
  }

  const getCategoryName = (category) => t(`categories.${category}`)

  
  const getLogo = (logo) => {
    const logos = {
      'alx_africa': '/logos/alx2.svg',
      'deeplearning_ai': '/logos/deeplearning_ai.svg',
      'ibm': '/logos/ibm.svg',
      'certiprof': '/logos/certiprof.svg',
      'coursera': '/logos/coursera.svg'
    }

    const logoSrc = logos[logo] || '/logos/default.svg'

    return <img src={logoSrc} alt={logo} className="w-8 h-8 object-contain" />
}

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award size={32} className="text-accent-green mr-3" />
            <h2 className="section-title text-gradient">
              {t("certifications.title")}
            </h2>
          </div>
          <p className="section-subtitle">
            {t("certifications.subtitle")}
          </p>
        </div>

        {/* ALX PROGRAM */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card group hover:border-accent-blue/30 transition-all duration-300">
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-accent-blue/20 rounded-xl mr-4">
                <Clock size={24} className="text-accent-blue" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">{alxProgram.name}</h3>
                <p className="text-gray-400">{alxProgram.subtitle}</p>
              </div>

              <span className="ml-auto px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                {t("status.inProgress")}
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              {alxProgram.description}
            </p>

            <div className="space-y-4">
              {alxProgram.progress.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">

                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-3 ${
                        course.status === "completed"
                          ? "bg-green-500"
                          : course.status === "current"
                          ? "bg-yellow-500 animate-pulse"
                          : "bg-gray-500"
                      }`}
                    ></div>

                    <div>
                      <h4 className="text-primary font-medium">{course.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {course.duration} • {course.date}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      course.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : course.status === "current"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {t(`status.${course.status}`)}
                  </span>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS GRID */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t("certifications.status.completed")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="card group hover:border-accent-green/30 transition-all duration-300">
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="mr-3">{getLogo(cert.logo)}</span>
                    <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent-green transition-colors leading-tight">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>


                <div className="mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                    {getCategoryName(cert.category)}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {cert.expiryDate
                      ? `${t("dates.issued")} ${cert.date} · ${t("dates.expires")} ${cert.expiryDate}`
                      : `${t("dates.issued")} ${cert.date}`}
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center">
                      <FileText size={14} className="mr-1" />
                      {t("certifications.id")}: {cert.credentialId}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-green hover:text-accent-blue transition-colors text-sm font-medium"
                >
                  {t("certifications.show")}
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Certifications
