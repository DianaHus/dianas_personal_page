import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../animations/Reveal'

function SplitWordsTitle({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          {index > 0 && ' '}
          <span className={`split-word split-delay-${Math.min(index, 10)}`}>
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [spotlightEnabled, setSpotlightEnabled] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    setSpotlightEnabled(!prefersReducedMotion && !isTouchDevice)
  }, [])

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (!spotlightEnabled || !sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    sectionRef.current.style.setProperty('--spot-x', `${x}px`)
    sectionRef.current.style.setProperty('--spot-y', `${y}px`)
    sectionRef.current.style.setProperty('--spot-opacity', '1')
  }

  function handleMouseLeave() {
    if (!sectionRef.current) return
    sectionRef.current.style.setProperty('--spot-opacity', '0')
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-spotlight relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900"
      onMouseMove={spotlightEnabled ? handleMouseMove : undefined}
      onMouseLeave={spotlightEnabled ? handleMouseLeave : undefined}
    >
      {/* Blobs decorativi — cerchi sfumati in background, puramente decorativi */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 dark:bg-violet-900/20 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none animate-float-medium"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 w-full">
        <div className="max-w-3xl">

          {/* Kicker / etichetta decorativa */}
          <Reveal delayIndex={1}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-6">
              Portfolio
            </p>
          </Reveal>

          {/* Nome — titolo principale H1 */}
          <Reveal delayIndex={2}>
            <h1 className="font-serif text-[clamp(2.05rem,9vw,5.9rem)] md:text-8xl font-medium text-gray-900 dark:text-gray-100 leading-none mb-6 whitespace-nowrap">
              <SplitWordsTitle text={t.hero.greeting} />
            </h1>
          </Reveal>

          {/* Ruolo */}
          <Reveal delayIndex={3}>
            <p className="text-xl md:text-2xl font-light text-gray-400 dark:text-gray-500 mb-8 tracking-wide">
              {t.hero.role}
            </p>
          </Reveal>

          {/* Tagline — la frase che fa capire chi sei */}
          <Reveal delayIndex={4}>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-12">
              {t.hero.tagline}
            </p>
          </Reveal>

          {/* CTA principali */}
          <Reveal delayIndex={5}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-medium text-pink-500 border border-pink-200 dark:border-pink-800 px-6 py-3 rounded-full hover:bg-pink-50 dark:hover:bg-pink-950/30 hover:border-pink-300 dark:hover:border-pink-700 transition-colors"
              >
                {t.hero.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contacts"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                {t.hero.ctaSecondary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
