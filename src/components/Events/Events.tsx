import { useLanguage } from '../../i18n/LanguageContext'
import type { EventItem } from '../../types'
import { Reveal } from '../animations/Reveal'

interface EventCardProps {
  item: EventItem
}

function EventCard({ item }: EventCardProps) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col gap-4 h-full ${
      item.upcoming
        ? 'bg-white dark:bg-gray-900 border-2 border-dashed border-pink-200 dark:border-pink-800'
        : 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm'
    }`}>

      {/* Upcoming badge */}
      {item.upcoming && (
        <span className="self-start text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-400 dark:text-pink-500 border border-pink-200 dark:border-pink-800">
          Coming up
        </span>
      )}

      {/* Result badge — solo se presente */}
      {item.result && (
        <span className="self-start text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400">
          {item.result}
        </span>
      )}

      {/* Titolo + organizzatore */}
      <div>
        <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 dark:text-gray-500">{item.organizer}</p>
      </div>

      {/* Data + luogo */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          {item.date}
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          {item.location}
        </span>
      </div>

      {/* Descrizione */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {item.tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Events() {
  const { t } = useLanguage()
  const { events } = t

  return (
    <section id="events" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal className="mb-16" delayIndex={1}>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-3">
            04
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100">
            {events.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.items.map((item, i) => (
            <Reveal key={i} delayIndex={Math.min(i + 2, 10)}>
              <EventCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
