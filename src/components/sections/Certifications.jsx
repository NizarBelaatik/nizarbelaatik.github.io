import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import ScanPingCanvas from '../v6/ScanPingCanvas'
import { certificationsENG, alxProgramENG } from '../../data/certifications/certificationsENG'
import { certificationsFR, alxProgramFR } from '../../data/certifications/certificationsFR'

const LOGOS = {
  alx_africa: '/logos/alx2.svg',
  deeplearning_ai: '/logos/deeplearning_ai.svg',
  ibm: '/logos/ibm.svg',
  certiprof: '/logos/certiprof.svg',
  coursera: '/logos/coursera.svg'
}

const Certifications = () => {
  const { t, i18n } = useTranslation()
  const isFr = i18n.language?.startsWith('fr')

  const certs = isFr ? certificationsFR : certificationsENG
  const program = isFr ? alxProgramFR : alxProgramENG

  return (
    <section id="certs">
      <ScanPingCanvas className="section-bg" />
      <div className="wrap">
        <SectionHead
          title={t('certifications.subtitle')}
          index="06"
          label={t('v6.sections.certs')}
          emWords={2}
        />

        <Reveal className="prog rv">
          <img
            className="logo"
            src={LOGOS.alx_africa}
            alt=""
            onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
          />
          <div>
            <h3>{program.name}</h3>
            <p className="who mono">{program.subtitle}</p>
          </div>
          <div className="mods">
            {program.progress.map((mod) => (
              <div className="mod" key={mod.name}>
                <b className={mod.status === 'current' ? 'cur' : undefined} />
                {mod.name}
                <span className="m">
                  {mod.duration} · {mod.date}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="certs">
          {certs.map((cert, i) => (
            <Reveal key={cert.id} className="cert rv" delay={i * 55}>
              <div className="row1">
                <img
                  src={LOGOS[cert.logo] || ''}
                  alt=""
                  onError={(e) => e.currentTarget.remove()}
                />
                <span className="iss">{cert.issuer}</span>
              </div>
              <h4>{cert.name}</h4>
              <div className="d">
                {t('dates.issued')} {cert.date}
                {cert.expiryDate ? ` · ${t('dates.expires')} ${cert.expiryDate}` : ''}
                <br />
                {t('certifications.id')} {cert.credentialId}
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {t('certifications.show')} ↗
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
