import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { socialLinks, contactMethods } from '../../data/links'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t('footer.links.home'), path: '/' },
    { name: t('footer.links.projects'), path: '/projects' },
    { name: t('footer.links.about'), path: '/#about' },
    { name: t('footer.links.contact'), path: '/#contact' }
  ]

  return (
    <footer className="bg-primary-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              {t('footer.brand')}
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-accent-blue hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold mb-4">{t('footer.getInTouch')}</h3>
            <div className="space-y-3 text-gray-400">
              <p>{t('contact.methods.email.value')}</p>
              <p>{t('contact.methods.phone.value')}</p>
              <p>{t('contact.methods.location.value')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center">
          <div className="text-gray-400 flex items-center">
            {t('footer.copyright', { year: currentYear, name: "Nizar Belaatik" })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer