// =============================================================================
// INTERFACCE TYPESCRIPT PER I DATI DEL PORTFOLIO
//
// Definire le interfacce separatamente dai dati ha diversi vantaggi:
//   1. Documentazione implicita: la "forma" dei dati è esplicita e leggibile
//   2. Riuso: stessa interfaccia usata in più componenti e nei file i18n
//   3. Type safety: TypeScript ci avvisa se un oggetto non rispetta la struttura
//
// `interface` vs `type`: entrambi funzionano per oggetti. `interface` è più
// leggibile per strutture dati, `type` è più flessibile per unioni/intersezioni.
// =============================================================================

/**
 * Rappresenta un progetto nel portfolio.
 *
 * `demo: string | null` — union type: il valore può essere una stringa OPPURE null.
 * È null quando il progetto non ha ancora un link live (es. WIP o solo su GitHub).
 */
export interface Project {
  title: string
  description: string
  stack: string[]       // Array di stringhe: es. ['React', 'TypeScript', 'Node.js']
  github: string
  demo: string | null   // null = nessun link live disponibile
}

/**
 * Rappresenta una voce nella timeline — usata sia per formazione che per lavoro.
 * Riutilizzare la stessa interfaccia evita duplicazioni e mantiene la struttura coerente.
 */
export interface ExperienceItem {
  year: string          // es. '2021 – 2024' o '2023'
  title: string
  place: string
  description: string
}
