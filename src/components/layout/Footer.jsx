import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { socialLinks, contactMethods} from '../../data/links'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              Portfolio
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Data Science Master's Student & Full-Stack Developer passionate about 
              creating intelligent solutions through code and data.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              {contactMethods.map(({ value }) => (
                <p>{value}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Nizar Belaatik. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400">
            Made with <Heart size={16} className="mx-2 text-red-500" /> using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer