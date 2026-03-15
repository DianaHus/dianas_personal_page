import { useLanguage } from '../../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Blobs decorativi — cerchi sfumati in background, puramente decorativi */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 dark:bg-violet-900/20 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 w-full">
        <div className="max-w-3xl">

          {/* Kicker / etichetta decorativa */}
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-6">
            Portfolio
          </p>

          {/* Nome — titolo principale H1 */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium text-gray-900 dark:text-gray-100 leading-none mb-6">
            {t.hero.greeting}
          </h1>

          {/* Ruolo */}
          <p className="text-xl md:text-2xl font-light text-gray-400 dark:text-gray-500 mb-8 tracking-wide">
            {t.hero.role}
          </p>

          {/* Tagline — la frase che fa capire chi sei */}
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-12">
            {t.hero.tagline}
          </p>

          {/* CTA — anchor link alla sezione About */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-500 border border-pink-200 dark:border-pink-800 px-6 py-3 rounded-full hover:bg-pink-50 dark:hover:bg-pink-950/30 hover:border-pink-300 dark:hover:border-pink-700 transition-colors"
          >
            {t.hero.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
