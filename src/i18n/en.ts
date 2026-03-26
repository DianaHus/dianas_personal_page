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
    ctaSecondary: string
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
    greeting: 'Just Call Me\u00A0"Di"',
    role: 'Diana Husanu, Computer Engineer',
    tagline:
      "I write code that mostly works, interfaces that don't make people cry, Python plugins, web apps, and tinkering with AI experiments. Currently based in Turin and fueled by curiosity (and caffeine).",
    cta: 'See my work',
    ctaSecondary: 'Contact me',
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
      "Things I built — some for accademical work, some for fun, some because I couldn't sleep.",
    githubLabel: 'GitHub',
    demoLabel: 'Live demo',
    items: [
      {
        title: 'VR Tolerance Chain Analysis',
        description:
          'Master\'s thesis project (in progress). A Python plugin for Autodesk VRED that analyses tolerance chain data from 3DCS and visualises gap/flush measurements on automotive components directly in the 3D scene.',
        stack: ['Python', 'Autodesk VRED', '3DCS', 'pandas', 'VR'],
        github: '',
        demo: null,
        image: null,
        features: [
          'Parses 3DCS output tables with pandas for gap and flush tolerance data',
          'Places interactive 3D spheres at exact measurement coordinates in VRED scene',
          'Click a sphere to inspect measurement details and select it for export',
          'Generates the input file for the nVIZ Perceived Quality Plugin',
          'Enables real-time visualisation of min/max/mean tolerance deformations in VR',
        ],
      },
      {
        title: 'Music Mood Classifier',
        description:
          'Neural network that classifies songs into mood categories (energetic, melancholic, calm, happy) using audio features extracted via the Spotify API (tempo, energy, valence, danceability). Pipeline includes data collection, preprocessing, model training, and comparison against baseline classifiers (RandomForest, SVM). Deployed as a REST endpoint with FastAPI. In progress.',
        stack: ['Python', 'PyTorch', 'scikit-learn', 'Spotify API', 'FastAPI'],
        github: '',
        demo: null,
        image: null,
        features: [
          'Spotify API ingestion for track-level audio features',
          'End-to-end ML pipeline: collection, preprocessing, training, and evaluation',
          'Model benchmarking against RandomForest and SVM baselines',
          'REST inference endpoint built with FastAPI',
        ],
      },
      {
        title: 'TravelMates',
        description:
          'REST API backend for managing group trips: shared expenses with automatic debt calculation optimised to minimise the number of transactions, activity planning, document storage, and group notes.',
        stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Cloudinary', 'Mailgun'],
        github: 'https://github.com/DianaHus/backend-travelmates',
        demo: null,
        image: null,
        features: [
          'JWT auth with three permission levels (Admin, Organizer, Traveler)',
          'Shared and personal expenses with automatic split and debt optimisation',
          'Activity calendar with booking confirmation and cancellation',
          'Document upload and full-text search via Cloudinary',
          'Async email notifications via Mailgun (invites, expenses, payments)',
        ],
      },
      {
        title: 'Stuff Happens',
        description:
          'Full stack card game inspired by "Shit Happens", with the original theme "Transportation Hoes". Draw a card and place it in the correct position by misfortune index — 3 wrong placements and you lose, 3 correct in a row and you win.',
        stack: ['Node.js', 'Express.js', 'React', 'JavaScript', 'SQLite'],
        github: 'https://github.com/DianaHus/exam-Web-Applications-1-Stuff-Happens',
        demo: null,
        image: null,
        features: [
          'User authentication with persistent sessions via SQLite',
          'Turn timer — let it expire and you lose the round',
          'Up to 3 attempts per card before game over',
          'Full match history for logged-in users',
          'Cards sorted and displayed by misfortune index',
        ],
      },
    ],
  },

  experience: {
    title: 'Education & Experience',
    education: {
      title: 'Education',
      items: [
        {
          year: 'Oct 2018 – Dec 2022',
          title: "Bachelor's Degree in Computer Engineering",
          place: 'Politecnico di Torino',
          description:
            'Three-year programme focused on software engineering, computer systems, and digital infrastructure. Covered algorithms, operating systems, databases, and software development methodologies at one of Italy\'s top technical universities.',
        },
        {
          year: 'Dec 2022 – Present',
          title: "Master's Degree in Computer Engineering – Software Track",
          place: 'Politecnico di Torino',
          description:
            'Advanced programme focused on designing and managing large-scale software systems. The Software track emphasises software architecture, quality, and maintenance of complex projects involving large teams. Currently in progress.',
        },
        {
          year: '2025 – Present',
          title: 'Google Machine Learning Crash Course',
          place: 'Google Developers (online)',
          description:
            'Self-directed course covering the fundamentals of machine learning, including supervised learning, neural networks, and practical applications.',
        },
      ],
    },
    work: {
      title: 'Work Experience',
      items: [
        {
          year: '2018 – Present',
          title: 'Private Tutor',
          place: 'Self-employed',
          description:
            'Six+ years tutoring computer science, mathematics, physics, and chemistry. Teaching complex topics sharpened my ability to communicate clearly and adapt to different learning styles. Watching students grow passionate about subjects they once struggled with is what motivates me most.',
        },
        {
          year: 'Nov 2025 – Present',
          title: 'Thesis Intern – VR Tolerance Chain Analysis Project',
          place: 'Italdesign — Moncalieri (TO)',
          description:
            'Developing a Virtual Reality application for tolerance chain analysis in automotive design, bridging software engineering and industrial design workflows.',
        },
      ],
    },
  },

  contacts: {
    title: "Let's talk",
    closing:
      "Whether it's a project, a collaboration, or just sharing a good cs meme - my inbox is friendly :)",
    email: 'di.husanu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dianahusanu/',
    github: 'https://github.com/DianaHus',
  },
}
