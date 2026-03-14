import { useLanguage } from '../../i18n/LanguageContext'
import type { Project } from '../../types'

// Cicliamo tra questi colori per i tag dello stack tecnologico
const TAG_COLORS = [
  'bg-pink-50 text-pink-600 border-pink-100',
  'bg-violet-50 text-violet-600 border-violet-100',
  'bg-rose-50 text-rose-500 border-rose-100',
  'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
]

// =============================================================================
// SOTTOCOMPONENTE: ProjectCard
//
// Definire un'interfaccia per le props è buona pratica TypeScript:
// rende esplicito cosa si aspetta il componente senza leggere il codice interno.
// =============================================================================
interface ProjectCardProps {
  project: Project
  githubLabel: string
  demoLabel: string
}

function ProjectCard({ project, githubLabel, demoLabel }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">

      {/* Header della card */}
      <div>
        <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Stack tecnologico — pill badges colorati */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={tech}
            // `i % TAG_COLORS.length` fa sì che i colori ciclino
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${TAG_COLORS[i % TAG_COLORS.length]}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link — separati dal resto con un bordo sottile */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-50">

        {/* GitHub — sempre presente */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          {githubLabel}
        </a>

        {/* Demo — renderizzato SOLO se `project.demo` non è null.
            Questo è conditional rendering: TypeScript sa che dentro questo blocco
            `project.demo` è `string` (non più `string | null`). */}
        {project.demo !== null && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pink-500 bg-pink-50 hover:bg-pink-100 transition-colors px-3 py-1 rounded-full flex items-center gap-1.5"
          >
            {demoLabel}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

// =============================================================================
// COMPONENTE PRINCIPALE: Projects
// =============================================================================
export function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intestazione sezione */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400 mb-3">
            02
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            {projects.title}
          </h2>
          <p className="text-gray-500 text-base max-w-xl">
            {projects.subtitle}
          </p>
        </div>

        {/* Grid di card: 1 colonna su mobile, 2 su tablet, 3 su desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*
            `projects.items` è `Project[]` — TypeScript conosce il tipo di ogni `project`
            nel callback, quindi autocomplete e type checking funzionano.
          */}
          {projects.items.map(project => (
            <ProjectCard
              key={project.title}
              project={project}
              githubLabel={projects.githubLabel}
              demoLabel={projects.demoLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
