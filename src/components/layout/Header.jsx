import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { Moon, Sun, Menu, X } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: t('nav.home'), href: '/', type: 'route', nav_name: 'home' },
    { name: t('nav.projects'), href: '/projects', type: 'route', nav_name: 'projects' },
    { name: t('nav.experience'), href: '#experience', type: 'anchor', nav_name: 'experience' },
    { name: t('nav.education'), href: '#education', type: 'anchor', nav_name: 'education' },
    { name: t('nav.certifications'), href: '#certifications', type: 'anchor', nav_name: 'certifications' },
    { name: t('nav.skills'), href: '#skills', type: 'anchor', nav_name: 'skills' },
    { name: t('nav.contact'), href: '#contact', type: 'anchor', nav_name: 'contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      const headerHeight = 80
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToTop(), 100)
    } else {
      scrollToTop()
    }
  }

  const handleAnchorClick = (id, e) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/') // go to home page first
      setTimeout(() => scrollToSection(id), 150)
    } else {
      scrollToSection(id)
    }
  }

  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => scrollToSection(location.hash), 300)
    }
  }, [location.pathname, location.hash])

  return (
    <header className="fixed top-0 w-full bg-primary-dark/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo - Shrinks on smaller screens */}
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-xl sm:text-2xl font-bold text-gradient cursor-pointer flex-shrink-0"
          >
            Nizar Belaatik
          </a>

          {/* Desktop Nav - Better spacing and wrapping */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-wrap justify-center max-w-2xl">
            {navigation.map((item) =>
              item.type === 'anchor' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(item.href, e)}
                  className="text-sm xl:text-base font-medium text-white hover:text-accent-blue transition-colors cursor-pointer whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : item.nav_name === 'projects' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm xl:text-base font-medium transition-colors hover:text-accent-blue whitespace-nowrap ${
                    location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm xl:text-base font-medium transition-colors hover:text-accent-blue whitespace-nowrap ${
                    location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <LanguageSwitcher />

            {/* Dark/Light Mode Toggle (commented out) */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) =>
                item.type === 'anchor' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(item.href, e)}
                    className="text-base font-medium text-white hover:text-accent-blue transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ) : item.nav_name === 'projects' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium transition-colors hover:text-accent-blue py-2 px-4 rounded-lg hover:bg-white/5 ${
                      location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-accent-blue py-2 px-4 rounded-lg hover:bg-white/5 ${
                      location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header