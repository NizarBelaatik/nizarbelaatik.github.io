import React from 'react'
import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'

const Home = () => (
  <div className="v6">
    <Hero />
    <Ticker />
    <Stats />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <Contact />
  </div>
)

export default Home
