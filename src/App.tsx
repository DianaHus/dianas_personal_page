import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Contacts } from './components/Contacts/Contacts'

function App() {
  return (
    // ThemeProvider gestisce light/dark mode — avvolge tutto così il toggle
    // è accessibile ovunque senza prop drilling.
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contacts />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
