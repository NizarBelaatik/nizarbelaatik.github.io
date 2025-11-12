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

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const headerHeight = 80 // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleAnchorClick = (href, e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const sectionId = href; // This is already '#section'
    
    if (location.pathname !== '/') {
      // If we're not on home page, navigate to home with the section hash
      navigate(`/${sectionId}`)
      
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      // If we're already on home page, just scroll to section
      scrollToSection(sectionId)
    }
  }

  // Check if we need to scroll to a section after page load
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Wait a bit for the page to fully load
      setTimeout(() => {
        scrollToSection(location.hash)
      }, 500)
    }
  }, [location.pathname, location.hash])

  return (
    <header className="fixed top-0 w-full bg-primary-dark/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium transition-colors hover:text-accent-blue ${
                    location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
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
            ))}
          </nav>

          {/* Theme Toggle, Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-accent-blue ${
                      location.pathname === item.href ? 'text-accent-blue' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
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
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header