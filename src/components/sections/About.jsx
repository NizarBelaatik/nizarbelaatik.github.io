import React from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Award, Users, BookOpen } from 'lucide-react'

const About = () => {
    const { t } = useTranslation()
  const stats = [
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Projects Completed' },
    { icon: BookOpen, number: '2', label: 'Research Papers' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80 light:from-slate-50 light:to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHfKq0Nxr8m5w/profile-displayphoto-shrink_800_800/B56ZPk9ButG4Ac-/0/1734713024465?e=1764806400&v=beta&t=yidZzvVKkuXGQgpu-HSTFZtnfePmjtEiEiEeZt7mZAU" 
                alt="About Me" 
                className="w-full h-auto"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent-blue/30 rounded-2xl light:border-blue-200"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-shadow">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-400 light:text-slate-600 text-lg mb-8 leading-relaxed">
              <p>
                I'm a passionate <span className="text-accent-blue light:text-blue-600 font-semibold">Data Science Master's student</span> 
                specializing in Machine Learning, Deep Learning, and Big Data technologies. 
                Currently in my final year, I'm focused on transforming complex data into 
                actionable insights and intelligent solutions.
              </p>
              
              <p>
                With a strong foundation in both <span className="text-accent-purple light:text-purple-600 font-semibold">software engineering</span> 
                and <span className="text-accent-green light:text-green-600 font-semibold">data science</span>, I bridge the gap between 
                theoretical models and practical applications. I love building end-to-end 
                solutions that solve real-world problems.
              </p>

              <p>
                When I'm not coding or analyzing data, you can find me exploring new 
                technologies, contributing to open-source projects, or writing about 
                my learning journey.
              </p>
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
                  <div className="text-2xl font-bold text-white light:text-slate-800 mb-1">{number}</div>
                  <div className="text-sm text-gray-400 light:text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary inline-flex items-center justify-center group"
              >
                Download CV
                <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <button className="btn-outline inline-flex items-center justify-center">
                View My Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About