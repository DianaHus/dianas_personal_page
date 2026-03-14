import type { Project, ExperienceItem } from '../types'

// =============================================================================
// INTERFACCIA DELLE TRADUZIONI
//
// Definiamo qui la "forma" di tutte le traduzioni.
// Viene importata da `it.ts` per garantire che entrambe le lingue
// abbiano esattamente le stesse chiavi — TypeScript ci avvisa a compile time
// se ci dimentichiamo di tradurre qualcosa.
// =============================================================================
export interface Translations {
  nav: {
    about: string
    projects: string
    experience: string
    contacts: string
  }
  hero: {
    greeting: string
    role: string
    tagline: string
    cta: string
  }
  about: {
    title: string
    bio: string[]   // ogni elemento è un paragrafo
    loves: { title: string; items: string[] }
    dislikes: { title: string; items: string[] }
  }
  projects: {
    title: string
    subtitle: string
    githubLabel: string
    demoLabel: string
    items: Project[]    // Usiamo l'interfaccia Project definita in types.ts
  }
  experience: {
    title: string
    education: { title: string; items: ExperienceItem[] }
    work: { title: string; items: ExperienceItem[] }
  }
  contacts: {
    title: string
    closing: string
    email: string
    linkedin: string
    github: string
  }
}

// =============================================================================
// TRADUZIONI IN INGLESE
//
// `en` è tipizzato esplicitamente come `Translations`: se aggiungiamo una nuova
// chiave all'interfaccia, TypeScript ci obbliga ad aggiungerla anche qui e in it.ts.
// =============================================================================
export const en: Translations = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contacts: 'Contacts',
  },

  hero: {
    greeting: 'Just Call Me "Di"',
    role: 'Diana Husanu, Computer Engineer',
    tagline:
      "Code that mostly works, interfaces that don't make people cry, building Python plugins, web apps, and tinkering with AI experiments, currently based in Turin and fueled by curiosity (and caffeine).",
    cta: 'See my work',
  },

  about: {
    title: 'About me',
    bio: [
      'MSc student in Computer Engineering at Politecnico di Torino.',
      "I started programming in C, which is probably where I developed the habit of wanting to understand what's really going on under the hood. Since then I've explored a bit of everything: Python, Java (Spring Boot), JavaScript, and TypeScript, building web applications and experimenting with different technologies along the way.",
      "I'm currently working on my master's thesis in the automotive domain, developing a Python plugin for Autodesk VRED.",
      "Lately, I've been diving deeper into artificial intelligence, following specialized courses and experimenting on my own, usually with a fair number of notebooks involved.",
    ],
    loves: {
      title: 'Things I love',
      items: [
        'Dark mode (obviously)',
        'Python notebooks that turn into experiments',
        'Sunday morning brioches',
        'Learning new tech just for the fun of it',
        'Playing with AI models until something interesting happens',
      ],
    },
    dislikes: {
      title: 'Things I could do without',
      items: [
        'Bugs that disappear when you try to show them',
        'Docs that are two versions behind',
        'Overly complicated solutions',
        '"Just one quick change" requests',
      ],
    },
  },

  projects: {
    title: 'My projects',
    subtitle:
      "Things I built — some for work, some for fun, some because I couldn't sleep.",
    githubLabel: 'GitHub',
    demoLabel: 'Live demo',
    items: [
      {
        title: 'Lunaris',
        description:
          'A mood-tracking app with a lunar cycle twist. Log your days, spot your patterns, blame the moon.',
        stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
      {
        title: 'Patchwork',
        description:
          "A drag-and-drop task manager that stays out of your way. No noise, no gamification — just your list.",
        stack: ['Vue 3', 'Pinia', 'TailwindCSS'],
        github: 'https://github.com',
        demo: null,   // nessun link live — il bottone non verrà renderizzato
      },
      {
        title: 'API Sketch',
        description:
          'A minimal REST API playground for mocking backend endpoints without spinning up a full server.',
        stack: ['Node.js', 'Express', 'PostgreSQL'],
        github: 'https://github.com',
        demo: 'https://example.com',
      },
    ],
  },

  experience: {
    title: 'Education & Experience',
    education: {
      title: 'Education',
      items: [
        {
          year: '2021 – 2024',
          title: "Bachelor's in Computer Science",
          place: 'Università degli Studi di Milano',
          description:
            'Focused on software engineering and web technologies. Thesis on component-driven design systems.',
        },
        {
          year: '2016 – 2021',
          title: 'Scientific High School Diploma',
          place: 'Liceo Scientifico — Milan',
          description:
            'Mathematics, physics, and the revelation that I was much better at computers than at chemistry.',
        },
      ],
    },
    work: {
      title: 'Work Experience',
      items: [
        {
          year: '2024 – now',
          title: 'Junior Frontend Developer',
          place: 'Startup XYZ — Milan',
          description:
            'Building and maintaining a React dashboard. Often the first one to notice the typo in production.',
        },
        {
          year: '2023',
          title: 'Frontend Intern',
          place: 'Agency ABC — Remote',
          description:
            'Translated Figma dreams into CSS reality. Learned that "just a small change" is never just a small change.',
        },
        {
          year: '2022',
          title: 'Freelance Web Developer',
          place: 'Various clients',
          description:
            'Built landing pages, small e-commerce sites, and the confidence to charge for my time.',
        },
      ],
    },
  },

  contacts: {
    title: "Let's talk",
    closing:
      "Whether it's a project, a collaboration, or just sharing a good CSS meme — my inbox is friendly.",
    email: 'hello@diana.dev',
    linkedin: 'linkedin.com/in/diana',
    github: 'github.com/diana',
  },
}
