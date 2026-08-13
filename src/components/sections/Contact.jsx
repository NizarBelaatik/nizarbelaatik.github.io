import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import SignalPulseCanvas from '../v6/SignalPulseCanvas'
import { socialLinks } from '../../data/links'

const Contact = () => {
  const { t } = useTranslation()

  const byLabel = (label) => socialLinks.find((l) => l.label === label)?.href || '#'
  const stripProtocol = (url) => url.replace(/^https?:\/\//, '')

  const rows = [
    {
      label: t('v6.contactLinks.email'),
      value: t('contact.methods.email.value'),
      href: t('contact.methods.email.href')
    },
    {
      label: t('v6.contactLinks.phone'),
      value: t('contact.methods.phone.value'),
      href: t('contact.methods.phone.href')
    },
    {
      label: t('v6.contactLinks.github'),
      value: stripProtocol(byLabel('GitHub')),
      href: byLabel('GitHub'),
      external: true
    },
    {
      label: t('v6.contactLinks.linkedin'),
      value: stripProtocol(byLabel('LinkedIn')),
      href: byLabel('LinkedIn'),
      external: true
    },
    {
      label: t('v6.contactLinks.resume'),
      value: t('v6.contactLinks.resumeValue'),
      href: t('resume.resume_link'),
      download: true
    },
    {
      label: t('v6.contactLinks.located'),
      value: t('v6.contactLinks.locatedValue')
    }
  ]

  return (
    <section id="contact" className="dark">
      <SignalPulseCanvas className="section-bg" />
      <div className="wrap">
        <SectionHead title={t('contact.title')} index="07" label={t('v6.sections.contact')} />

        <Reveal as="ul" className="links rv">
          {rows.map((row) => (
            <li key={row.label}>
              <b>{row.label}</b>
              {row.href ? (
                <a
                  href={row.href}
                  download={row.download || undefined}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                >
                  {row.value}
                </a>
              ) : (
                <span>{row.value}</span>
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
