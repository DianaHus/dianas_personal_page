import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeContext'

export function Navbar() {
  const { lang, t, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  // La home è una "cover" editoriale: la navigazione principale vive già nell'hero
  // (l'indice numerato 01–05), quindi qui nascondiamo i link — restano solo logo,
  // tema e lingua. Su tutte le altre pagine la navbar è invariata.
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Stato locale per il menu mobile — non serve nel context perché
  // è rilevante solo per questo componente
  const [menuOpen, setMenuOpen] = useState(false)

  // Array di link — usiamo `t.nav.*` così cambiano automaticamente con la lingua
  const links = [
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/experience', label: t.nav.experience },
    { to: '/events', label: t.nav.events },
    { to: '/contacts', label: t.nav.contacts },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-colors duration-300 ${isHome ? '' : 'border-b border-gray-100 dark:border-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand / logo */}
        <NavLink
          to="/"
          end
          className="font-serif text-xl font-medium text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
        >
          diana<span className="text-pink-400">.</span>dev
        </NavLink>

        {/* Nav links — visibili solo su desktop (nascosti su mobile con md:flex).
            Sulla home non compaiono: la navigazione è l'indice nell'hero. */}
        {!isHome && (
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `text-sm transition-colors ${isActive
                  ? 'text-pink-500 dark:text-pink-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Theme toggle + Language toggle + hamburger (mobile) */}
        <div className="flex items-center gap-3">

          {/* Toggle tema: ☀️ in dark mode per tornare al chiaro, 🌙 in light mode per il buio */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              // Sun icon — light mode
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon — dark mode
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Toggle lingua: mostra la lingua verso cui si può cambiare */}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-pink-200 dark:border-pink-800 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors"
            aria-label="Switch language"
          >
            {lang === 'it' ? 'EN' : 'IT'}
          </button>

          {/* Hamburger — visibile solo su mobile, mai sulla home */}
          {!isHome && (
            <button
              className="md:hidden p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
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
          )}
        </div>
      </div>

      {/* Menu mobile — si apre sotto la navbar quando menuOpen è true */}
      {!isHome && menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-5 flex flex-col gap-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `text-sm transition-colors py-1 ${isActive
                ? 'text-pink-500 dark:text-pink-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              onClick={() => setMenuOpen(false)}   // chiudi il menu dopo il click
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
