import React from 'react'
import { useTranslation } from 'react-i18next'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent-blue/20 shadow-2xl shadow-blue-500/25 floating">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {t('hero.title')}{' '}
          <span className="text-gradient">{t('hero.name')}</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-400 mb-8">
          {t('hero.subtitle')}
        </div>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#projects" className="btn-primary inline-flex items-center group">
            {t('hero.viewWork')}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/resume.pdf" 
            download
            className="btn-outline inline-flex items-center group"
          >
            {t('hero.downloadCV')}
            <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero