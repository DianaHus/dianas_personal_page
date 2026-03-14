import { useLanguage } from '../../i18n/LanguageContext'
import type { ExperienceItem } from '../../types'

// =============================================================================
// SOTTOCOMPONENTE: TimelineEntry
//
// Gestisce la visualizzazione di una singola voce nella timeline.
// `isLast` serve per non mostrare la linea verticale dopo l'ultimo elemento.
// =============================================================================
interface TimelineEntryProps {
  item: ExperienceItem
  isLast: boolean
}

function TimelineEntry({ item, isLast }: TimelineEntryProps) {
  return (
    <div className={`relative pl-8 ${!isLast ? 'pb-10' : ''}`}>

      {/* Linea verticale che connette i punti — nascosta sull'ultimo elemento */}
      {!isLast && (
        <div className="absolute left-[6px] top-4 bottom-0 w-px bg-pink-100" />
      )}

      {/* Dot della timeline */}
      <div className="absolute left-0 top-[6px] w-3 h-3 rounded-full bg-pink-200 ring-2 ring-white ring-offset-1" />

      {/* Anno */}
      <p className="text-xs font-semibold text-pink-400 tracking-widest uppercase mb-1.5">
        {item.year}
      </p>

      {/* Titolo della voce */}
      <h4 className="font-serif text-base md:text-lg font-medium text-gray-900 leading-snug mb-0.5">
        {item.title}
      </h4>

      {/* Luogo / azienda */}
      <p className="text-sm text-gray-400 mb-2">{item.place}</p>

      {/* Descrizione */}
      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
    </div>
  )
}

// =============================================================================
// COMPONENTE PRINCIPALE: Experience
// =============================================================================
export function Experience() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intestazione sezione */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-3">
            03
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900">
            {experience.title}
          </h2>
        </div>

        {/* Due colonne: Formazione | Lavoro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Colonna Formazione */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-gray-800 mb-10 pb-4 border-b border-gray-200">
              {experience.education.title}
            </h3>
            <div>
              {experience.education.items.map((item, i) => (
                <TimelineEntry
                  key={i}
                  item={item}
                  // L'ultimo elemento non ha la linea verticale
                  isLast={i === experience.education.items.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Colonna Lavoro */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-gray-800 mb-10 pb-4 border-b border-gray-200">
              {experience.work.title}
            </h3>
            <div>
              {experience.work.items.map((item, i) => (
                <TimelineEntry
                  key={i}
                  item={item}
                  isLast={i === experience.work.items.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
