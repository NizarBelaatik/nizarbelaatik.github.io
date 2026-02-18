import React from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Award, Users, BookOpen, GraduationCap, Brain } from 'lucide-react'

const About = () => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  
  const stats = [
    { icon: GraduationCap, number: t('about.mastersYear'), label: currentLanguage === 'fr' ? 'Master Data Science' : 'Master Data Science' },
    { icon: Users, number: '15+', label: t('about.projectsCompleted') },
    { icon: Brain, number: currentLanguage === 'fr' ? 'Multi-Domaine' : 'Multi-Domain', label: t('about.aiSpecialization') },
  ]
  const logoSrc = '/logos/Profile_Pic.png'
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80 light:from-slate-50 light:to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={logoSrc}
                alt={t('about.title')} 
                className="w-full h-auto"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent-blue/30 rounded-2xl light:border-blue-200"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-shadow">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-gray-400 light:text-slate-600 text-lg mb-8 leading-relaxed">
              {/* English Version */}
              {currentLanguage === 'en' && (
                <>
                  <p>
                    I'm a passionate <span className="text-accent-blue light:text-blue-600 font-semibold">Data Science Master's student </span> 
                    specializing in <span className="text-accent-purple light:text-purple-600 font-semibold">Machine Learning, Deep Learning, and Big Data technologies</span>. 
                    Currently in my 2nd year, I'm focused on transforming complex data into 
                    actionable insights and intelligent solutions.
                  </p>
                  
                  <p>
                    With a strong foundation in both <span className="text-accent-blue light:text-blue-600 font-semibold">software engineering </span> 
                    and <span className="text-accent-green light:text-green-600 font-semibold">data science</span>, I bridge the gap between 
                    theoretical models and practical applications. I love building end-to-end 
                    solutions that solve real-world problems across various domains.
                  </p>

                  <p>
                    Through <span className="text-accent-purple light:text-purple-600 font-semibold">15+ diverse projects</span>, I've developed 
                    expertise in <span className="text-accent-green light:text-green-600 font-semibold">AI solutions, web development, and data engineering</span>. 
                    When I'm not coding, I'm exploring new technologies or contributing to innovative projects.
                  </p>
                </>
              )}

              {/* French Version */}
              {currentLanguage === 'fr' && (
                <>
                  <p>
                    Je suis un passionné <span className="text-accent-blue light:text-blue-600 font-semibold">d'étudiant en Master Data Science </span> 
                    spécialisé en <span className="text-accent-purple light:text-purple-600 font-semibold">Machine Learning, Deep Learning et technologies Big Data</span>. 
                    Actuellement en 2ème année, je me concentre sur la transformation de données complexes 
                    en insights actionnables et solutions intelligentes.
                  </p>
                  
                  <p>
                    Avec une solide base en <span className="text-accent-blue light:text-blue-600 font-semibold">ingénierie logicielle </span> 
                    et en <span className="text-accent-green light:text-green-600 font-semibold">science des données</span>, je fais le lien entre 
                    modèles théoriques et applications pratiques. J'adore construire des solutions 
                    de bout en bout qui résolvent des problèmes concrets.
                  </p>

                  <p>
                    À travers <span className="text-accent-purple light:text-purple-600 font-semibold">15+ projets diversifiés</span>, j'ai développé 
                    une expertise en <span className="text-accent-green light:text-green-600 font-semibold">solutions IA, développement web et ingénierie des données</span>. 
                    Quand je ne code pas, j'explore de nouvelles technologies ou contribue à des projets innovants.
                  </p>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map(({ icon: Icon, number, label }) => (
                <div key={label} className="text-center stat-card rounded-2xl p-4">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-accent-blue/20 light:bg-blue-100 rounded-xl">
                      <Icon size={24} className="text-accent-blue light:text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary light:text-slate-800 mb-1">{number}</div>
                  <div className="text-sm text-gray-400 light:text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={t('resume.resume_link')}
                download
                className="btn-primary inline-flex items-center justify-center group"
              >
                {t('hero.downloadCV')}
                <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#projects" className="btn-outline inline-flex items-center justify-center">
                {t('about.viewStory')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About