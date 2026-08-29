import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../animations/Reveal'

// Titolo principale: ogni parola entra con un piccolo stagger (vedi .split-word in index.css).
// Il soprannome tra virgolette va in corsivo rosa — un accento editoriale che rima
// col punto rosa del logo "diana.dev".
//
// Nella stringa c'è un NBSP prima del soprannome ("…Chiamarmi \"Di\""): le parole
// separate solo da NBSP formano un gruppo che non va mai a capo al proprio interno,
// così "Di" resta sempre attaccato alla parola che lo precede. Gli spazi normali tra
// i gruppi restano spezzabili (a-capo intenzionale solo su schermi molto stretti).
function SplitWordsTitle({ text }: { text: string }) {
  const groups = text
    .trim()
    .split(/ +/) // spazi normali → confini spezzabili
    .map(token => token.split(/\s/)) // NBSP interno → parole tenute insieme

  let counter = 0
  const groupsWithDelay = groups.map(words =>
    words.map(word => ({ word, delay: Math.min(counter++, 10) }))
  )

  return (
    <span className="inline-block">
      {groupsWithDelay.map((words, groupIndex) => (
        <Fragment key={groupIndex}>
          {groupIndex > 0 && ' '}
          <span className={words.length > 1 ? 'whitespace-nowrap' : undefined}>
            {words.map(({ word, delay }, wordIndex) => {
              const isName = /["“]/.test(word)
              return (
                <Fragment key={wordIndex}>
                  {wordIndex > 0 && ' '}
                  <span
                    className={`split-word split-delay-${delay}${
                      isName ? ' italic text-pink-400 dark:text-pink-300' : ''
                    }`}
                  >
                    {word}
                  </span>
                </Fragment>
              )
            })}
          </span>
        </Fragment>
      ))}
    </span>
  )
}

export function Hero() {
  const { t } = useLanguage()

  // "Diana Husanu, Computer Engineer" → nome + ruolo, mostrati come testata editoriale
  const [name, role] = t.hero.role.split(/,\s*/)

  // Le altre pagine come indice numerato: stesso sistema di numeri delle sezioni
  // (01, 02, 03…) già usato in About/Projects/Experience. Il colore torna qui in
  // piccolo — un pallino per voce — invece che come sfondo pieno dei bottoni.
  const pages = [
    { to: '/about', label: t.nav.about, dot: 'bg-pink-400', arrow: 'group-hover:text-pink-500 dark:group-hover:text-pink-400' },
    { to: '/projects', label: t.nav.projects, dot: 'bg-amber-400', arrow: 'group-hover:text-amber-500 dark:group-hover:text-amber-400' },
    { to: '/experience', label: t.nav.experience, dot: 'bg-teal-400', arrow: 'group-hover:text-teal-500 dark:group-hover:text-teal-400' },
    { to: '/events', label: t.nav.events, dot: 'bg-violet-400', arrow: 'group-hover:text-violet-500 dark:group-hover:text-violet-400' },
    { to: '/contacts', label: t.nav.contacts, dot: 'bg-lime-500', arrow: 'group-hover:text-lime-600 dark:group-hover:text-lime-400' },
  ]

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-6xl mx-auto px-6 pb-20 pt-24 sm:pt-28">

        {/* Testata: nome a sinistra, ruolo a destra — micro-tipografia mono */}
        <Reveal delayIndex={1}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-gray-200 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:border-gray-700 dark:text-gray-500 sm:text-xs">
            <span>{name}</span>
            {role && <span>{role}</span>}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-y-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12">

          {/* Colonna sinistra: il gancio */}
          <div className="lg:col-span-8">
            <Reveal delayIndex={2}>
              <h1 className="font-serif font-medium text-gray-900 dark:text-gray-100 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.015em]">
                <SplitWordsTitle text={t.hero.greeting} />
              </h1>
            </Reveal>

            <Reveal delayIndex={3}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg">
                {t.hero.tagline}
              </p>
            </Reveal>
          </div>

          {/* Colonna destra: indice delle altre pagine */}
          <nav className="max-w-xl lg:col-span-4 lg:max-w-none lg:self-center" aria-label={name}>
            <ul className="border-t border-gray-200 dark:border-gray-700">
              {pages.map((page, i) => (
                <li key={page.to} className="border-b border-gray-200 dark:border-gray-700">
                  <Reveal delayIndex={Math.min(i + 4, 10)}>
                    <NavLink
                      to={page.to}
                      className="group flex items-center gap-3 -mx-3 rounded-lg px-3 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    >
                      <span className="font-mono text-xs tabular-nums text-gray-400 dark:text-gray-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`ml-1 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${page.dot} transition-transform duration-300 group-hover:scale-[1.7]`}
                      />

                      <span className="font-serif text-lg text-gray-900 dark:text-gray-100 md:text-xl">
                        {page.label}
                      </span>

                      <svg
                        className={`icon-pop ml-auto h-4 w-4 flex-shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 dark:text-gray-600 ${page.arrow}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </NavLink>
                  </Reveal>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
