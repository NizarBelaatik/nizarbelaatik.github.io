import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
        <Globe size={18} />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:block">{currentLanguage.name}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-48 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-3 ${
              i18n.language === language.code ? 'bg-accent-blue/20 text-accent-blue' : 'text-white'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher