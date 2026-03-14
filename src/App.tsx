import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Contacts } from './components/Contacts/Contacts'

function App() {
  return (
    // LanguageProvider avvolge tutta l'app così ogni componente
    // può accedere alle traduzioni tramite useLanguage() senza
    // dover passare le props manualmente a ogni livello.
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
  )
}

export default App
