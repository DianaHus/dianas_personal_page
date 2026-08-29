import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Events } from './components/Events/Events'
import { Contacts } from './components/Contacts/Contacts'

// React Router non resetta lo scroll al cambio pagina — lo facciamo a mano
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    // ThemeProvider gestisce light/dark mode — avvolge tutto così il toggle
    // è accessibile ovunque senza prop drilling.
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
