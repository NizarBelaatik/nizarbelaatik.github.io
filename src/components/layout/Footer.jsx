import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { socialLinks } from '../../data/links'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="v6-footer">
      <div className="wrap mono">
        <div>© {year} Nizar Belaatik</div>

        <div className="fnav">
          <Link to="/projects">{t('nav.projects')}</Link>
          {socialLinks
            .filter((l) => l.label !== 'Email')
            .map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer
