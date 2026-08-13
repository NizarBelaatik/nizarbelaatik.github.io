import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'fr', name: 'Français', short: 'FR' }
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const boxRef = useRef(null)

  const current =
    languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0]

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const switchTo = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="lang" ref={boxRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe size={13} strokeWidth={1.6} />
        <span>{current.short}</span>
      </button>

      {open && (
        <div className="menu" role="listbox">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-current={lang.code === current.code}
              aria-selected={lang.code === current.code}
              onClick={() => switchTo(lang.code)}
            >
              <span>{lang.short}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
