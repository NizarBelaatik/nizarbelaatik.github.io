import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/NizarBelaatik',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nizar-belaatik',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/NBelaatik',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:belaatiknizar@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* One Column Layout */}
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.connect')}</h3>
            <p className="text-gray-400 mb-8">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {['email', 'phone', 'location'].map((method) => (
                <a
                  key={method}
                  href={t(`contact.methods.${method}.href`)}
                  className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent-blue/20 rounded-lg mr-4 group-hover:bg-accent-blue/30 transition-colors">
                    {method === 'email' && <Mail size={20} className="text-accent-blue" />}
                    {method === 'phone' && <Phone size={20} className="text-accent-blue" />}
                    {method === 'location' && <MapPin size={20} className="text-accent-blue" />}
                  </div>
                  <div>
                    <div className="text-white font-medium">{t(`contact.methods.${method}.label`)}</div>
                    <div className="text-gray-400">{t(`contact.methods.${method}.value`)}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Card */}
            <div className="card flex flex-col justify-center space-y-4 mb-8 p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.workTogether')}</h3>

              <p className="text-gray-400 mb-8">
                {t('contact.reachOut')}
              </p>

              <a
                href="mailto:belaatiknizar@gmail.com"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                {t('contact.emailMe')}
                <Mail size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">{t('contact.followMe')}</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 ${color}`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact