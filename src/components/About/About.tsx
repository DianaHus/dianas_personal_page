import { useLanguage } from '../../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intestazione sezione */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-3">
            01
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100">
            {about.title}
          </h2>
        </div>

        {/* Layout a due colonne: bio a sinistra, liste a destra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Colonna sinistra: bio */}
          <div className="space-y-5">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Colonna destra: due liste */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Lista "cose che adoro" */}
            <div>
              <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span className="text-pink-400" aria-hidden="true">♥</span>
                {about.loves.title}
              </h3>
              <ul className="space-y-2.5">
                {/* `item` è `string` — TypeScript lo sa perché `loves.items` è `string[]` */}
                {about.loves.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2.5">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-pink-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lista "cose di cui farei a meno" */}
            <div>
              <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">✕</span>
                {about.dislikes.title}
              </h3>
              <ul className="space-y-2.5">
                {about.dislikes.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2.5">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
