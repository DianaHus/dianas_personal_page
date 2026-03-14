import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { en, type Translations } from './en'
import { it } from './it'

// =============================================================================
// LANGUAGE CONTEXT
//
// Un Context React rende un valore disponibile a tutti i componenti nell'albero
// senza doverlo passare manualmente come prop a ogni livello ("prop drilling").
//
// Pattern:
//   1. createContext() — crea il "contenitore"
//   2. <Provider> in App.tsx — fornisce il valore a tutta l'app
//   3. useLanguage() nei componenti — legge il valore dal context
// =============================================================================

// Union type: solo questi due valori sono accettati per la lingua
type Language = 'it' | 'en'

// Il tipo del valore che il context espone ai componenti figli
interface LanguageContextType {
  lang: Language
  t: Translations       // `t` = translations (convenzione comune nelle app i18n)
  toggleLang: () => void
}

// Creiamo il context con `null` come valore iniziale.
// `null` indica che il context non è ancora stato inizializzato dal Provider.
// Il tipo generico `<LanguageContextType | null>` è necessario proprio per questo.
const LanguageContext = createContext<LanguageContextType | null>(null)

// =============================================================================
// PROVIDER
// Questo componente avvolge l'app in App.tsx e fornisce le traduzioni.
// `{ children: ReactNode }` è il pattern standard per componenti wrapper.
// =============================================================================
export function LanguageProvider({ children }: { children: ReactNode }) {
  // useState con tipo esplicito `Language` — TypeScript capisce che
  // setLang accetta solo 'it' o 'en', non qualsiasi stringa
  const [lang, setLang] = useState<Language>('it')

  // Alterna tra le due lingue — `prev` è tipizzato automaticamente come `Language`
  const toggleLang = () => setLang(prev => (prev === 'it' ? 'en' : 'it'))

  // Selezioniamo il dizionario corretto in base allo stato corrente
  const t: Translations = lang === 'it' ? it : en

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// =============================================================================
// HOOK PERSONALIZZATO
// Invece di scrivere `useContext(LanguageContext)` in ogni componente,
// usiamo questo hook che gestisce anche il caso di errore.
// =============================================================================
export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)

  // Se il hook viene chiamato fuori dal Provider, `ctx` è null.
  // Il type narrowing di TypeScript capisce che dopo questo if, ctx non è null.
  if (!ctx) {
    throw new Error('useLanguage() deve essere usato dentro <LanguageProvider>')
  }

  return ctx
}
