import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

export function Navbar() {
  const { lang, t, toggleLang } = useLanguage()

  // Stato locale per il menu mobile — non serve nel context perché
  // è rilevante solo per questo componente
  const [menuOpen, setMenuOpen] = useState(false)

  // Array di link — usiamo `t.nav.*` così cambiano automaticamente con la lingua
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contacts', label: t.nav.contacts },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand / logo */}
        <a
          href="#hero"
          className="font-serif text-xl font-medium text-gray-900 hover:opacity-70 transition-opacity"
        >
          diana<span className="text-pink-400">.</span>dev
        </a>

        {/* Nav links — visibili solo su desktop (nascosti su mobile con md:flex) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language toggle + hamburger (mobile) */}
        <div className="flex items-center gap-3">

          {/* Toggle lingua: mostra la lingua verso cui si può cambiare */}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-pink-200 text-pink-500 hover:bg-pink-50 transition-colors"
            aria-label="Switch language"
          >
            {lang === 'it' ? 'EN' : 'IT'}
          </button>

          {/* Hamburger — visibile solo su mobile */}
          <button
            className="md:hidden p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile — si apre sotto la navbar quando menuOpen è true */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
              onClick={() => setMenuOpen(false)}   // chiudi il menu dopo il click
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
