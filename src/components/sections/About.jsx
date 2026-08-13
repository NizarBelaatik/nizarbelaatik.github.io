import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from '../v6/SectionHead'
import Reveal from '../v6/Reveal'
import NeuralNetCanvas from '../v6/NeuralNetCanvas'

const About = () => {
  const { t } = useTranslation()

  const facts = [
    { k: t('v6.facts.based'), v: t('v6.facts.basedValue') },
    { k: t('v6.facts.now'), v: t('v6.facts.nowValue') },
    { k: t('v6.facts.field'), v: t('v6.facts.fieldValue') },
    { k: t('v6.facts.languages'), v: t('v6.facts.languagesValue') }
  ]

  return (
    <section id="about">
      {/* Pure backdrop — no card, no caption, not meant to be looked at
          directly. Sits behind the whole section at low opacity. */}


      <div className="wrap">
        <SectionHead title={t('about.subtitle')} index="01" label={t('v6.sections.about')} emWords={2} />

        <div className="about">
          <Reveal>
            <p>{t('about.content1')}</p>
            <p>{t('about.content2')}</p>
            <p>{t('about.content3')}</p>
          </Reveal>

          <div className="aside">
            <Reveal as="dl" className="facts rv">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
