import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import BackgroundField from './components/v6/BackgroundField'
import ScrollProgress from './components/v6/ScrollProgress'
import ScrollToTop from './components/v6/ScrollToTop'
import BackToTop from './components/v6/BackToTop'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <BackgroundField />
        {/* `v6` is scoped per-page (see pages/Home) so the element-level
            typography rules don't leak into the legacy project pages. */}
        <div id="app-shell">
          <ScrollProgress />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
