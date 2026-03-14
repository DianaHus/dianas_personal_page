// Importiamo il tipo `Translations` da `en.ts`.
// In questo modo TypeScript garantisce che `it` abbia esattamente le stesse chiavi
// di `en` — se ci dimentichiamo di tradurre qualcosa, errore a compile time.
import type { Translations } from './en'

export const it: Translations = {
  nav: {
    about: 'Chi sono',
    projects: 'Progetti',
    experience: 'Percorso',
    contacts: 'Contatti',
  },

  hero: {
    greeting: 'Puoi Chiamarmi "Di"',
    role: 'Diana Husanu, Computer Engineer',
    tagline:
      'Codice che funziona quasi sempre, interfacce che non fanno piangere, scrivo plugin Python, applicazioni web e qualche esperimento di AI, al momento vivo a Torino e tiro avanti a curiosità (e caffè).',
    cta: 'Scopri i miei lavori',
  },

  about: {
    title: 'Chi sono',
    bio: [
      'Tesista magistrale in Ingegneria Informatica al Politecnico di Torino.',
      'Ho iniziato programmando in C, probabilmente è lì che ho sviluppato l\'abitudine di voler capire cosa succede davvero sotto il cofano. Da allora ho esplorato un po\' di tutto: Python, Java (Spring Boot), JavaScript e TypeScript, costruendo applicazioni web e sperimentando nuove tecnologie lungo il percorso.',
      'Attualmente lavoro alla mia tesi in ambito automotive, sviluppando un plugin Python per Autodesk VRED.',
      'Nel frattempo sto esplorando sempre più il mondo dell\'intelligenza artificiale, seguendo corsi e sperimentando per conto mio, con molto entusiasmo e una quantità non trascurabile di notebook.',
    ],
    loves: {
      title: 'Cose che adoro',
      items: [
        'La dark mode (ovviamente)',
        'I notebook Python che diventano esperimenti',
        'Le brioche della domenica mattina',
        'Imparare nuove tecnologie solo per il gusto di farlo',
        'Giocare con i modelli di AI finché non succede qualcosa di interessante',
      ],
    },
    dislikes: {
      title: 'Cose di cui farei a meno',
      items: [
        'I bug che spariscono quando provi a mostrarli',
        'La documentazione ferma a due versioni fa',
        'Le soluzioni inutilmente complicate',
        'Richieste tipo "Solo una modifica veloce"',
      ],
    },
  },

  projects: {
    title: 'I miei progetti',
    subtitle:
      'Cose che ho costruito — alcune per lavoro, alcune per divertimento, alcune perché non riuscivo a dormire.',
    githubLabel: 'GitHub',
    demoLabel: 'Demo live',
    items: [
      {
        title: 'Lunaris',
        description:
          "Un'app per tracciare l'umore con un twist lunare. Registra le giornate, trova i pattern, dai la colpa alla luna.",
        stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
      {
        title: 'Patchwork',
        description:
          'Un task manager drag-and-drop che si fa da parte e ti lascia lavorare. Niente notifiche, niente gamification — solo la tua lista.',
        stack: ['Vue 3', 'Pinia', 'TailwindCSS'],
        github: 'https://github.com',
        demo: null,
      },
      {
        title: 'API Sketch',
        description:
          'Un playground REST minimale per mockare endpoint backend senza tirare su un server completo.',
        stack: ['Node.js', 'Express', 'PostgreSQL'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
    ],
  },

  experience: {
    title: 'Formazione & Esperienza',
    education: {
      title: 'Formazione',
      items: [
        {
          year: '2021 – 2024',
          title: 'Laurea Triennale in Informatica',
          place: 'Università degli Studi di Milano',
          description:
            'Focus su ingegneria del software e tecnologie web. Tesi sui design system component-driven.',
        },
        {
          year: '2016 – 2021',
          title: 'Diploma Scientifico',
          place: 'Liceo Scientifico — Milano',
          description:
            'Matematica, fisica, e la rivelazione di essere molto più brava con i computer che con la chimica.',
        },
      ],
    },
    work: {
      title: 'Esperienza',
      items: [
        {
          year: '2024 – oggi',
          title: 'Junior Frontend Developer',
          place: 'Startup XYZ — Milano',
          description:
            'Sviluppo e manutenzione di una dashboard React. Spesso quella che nota il typo in produzione.',
        },
        {
          year: '2023',
          title: 'Frontend Intern',
          place: 'Agency ABC — Remoto',
          description:
            'Trasformare sogni di Figma in CSS reale. Ho imparato che "piccola modifica" non è mai una piccola modifica.',
        },
        {
          year: '2022',
          title: 'Web Developer Freelance',
          place: 'Vari clienti',
          description:
            'Landing page, piccoli e-commerce, e la sicurezza di farmi pagare per il mio tempo.',
        },
      ],
    },
  },

  contacts: {
    title: 'Parliamoci',
    closing:
      'Che sia per un progetto, una collaborazione, o condividere un buon meme CSS — la mia inbox è friendly.',
    email: 'hello@diana.dev',
    linkedin: 'linkedin.com/in/diana',
    github: 'github.com/diana',
  },
}
