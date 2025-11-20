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
    { name: t('nav.home'), href: '/', type: 'route' },
    { name: t('nav.projects'), href: '/projects', type: 'route' },
    { name: t('nav.experience'), href: '#experience', type: 'anchor' },
    { name: t('nav.education'), href: '#education', type: 'anchor' },
    { name: t('nav.certifications'), href: '#certifications', type: 'anchor' },
    { name: t('nav.skills'), href: '#skills', type: 'anchor' },
    { name: t('nav.contact'), href: '#contact', type: 'anchor' },
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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-2xl font-bold text-gradient cursor-pointer"
          >
            Nizar Belaatik
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.type === 'anchor' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(item.href, e)}
                  className="text-lg font-medium text-white hover:text-accent-blue transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium transition-colors hover:text-accent-blue ${
                    location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* dark/light mode toggle*/}
            {/*  <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            */}
           

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) =>
                item.type === 'route' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.href === '/' ? handleHomeClick : () => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-accent-blue ${
                      location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(item.href, e)}
                    className="text-lg font-medium text-white hover:text-accent-blue transition-colors cursor-pointer"
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
