// Importiamo il tipo `Translations` da `en.ts`.
// In questo modo TypeScript garantisce che `it` abbia esattamente le stesse chiavi
// di `en` — se ci dimentichiamo di tradurre qualcosa, errore a compile time.
import type { Translations } from './en'

export const it: Translations = {
  nav: {
    about: 'Chi sono',
    projects: 'Progetti',
    experience: 'Percorso',
    events: 'Eventi',
    contacts: 'Contatti',
  },

  hero: {
    greeting: 'Puoi Chiamarmi\u00A0"Di"',
    role: 'Diana Husanu, Computer Engineer',
    tagline:
      'Scrivo codice che funziona quasi sempre, interfacce che non fanno piangere, plugin Python, applicazioni web e qualche esperimento di AI. Al momento vivo a Torino e tiro avanti a curiosità (e caffè).',
    cta: 'Scopri i miei lavori',
    ctaSecondary: 'Contattami',
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
      'Cose che ho costruito — alcune accademiche, alcune per divertimento, alcune perché non riuscivo a dormire.',
    githubLabel: 'GitHub',
    demoLabel: 'Demo live',
    items: [
      {
        title: 'VR Tolerance Chain Analysis',
        description:
          'Progetto di tesi magistrale (in corso). Plugin Python per Autodesk VRED che analizza i dati di tolleranza da 3DCS e visualizza le misure di gap e flush su componenti automotive direttamente nella scena 3D.',
        stack: ['Python', 'Autodesk VRED', '3DCS', 'pandas', 'VR'],
        github: '',
        demo: null,
        image: null,
        features: [
          'Parsing delle tabelle 3DCS con pandas per dati di tolleranza gap e flush',
          'Posizionamento di sfere 3D interattive alle coordinate esatte delle misure in VRED',
          'Click su una sfera per ispezionare i dettagli e selezionarla per l\'export',
          'Generazione del file di input per il plugin nVIZ Perceived Quality Plugin',
          'Visualizzazione in VR delle deformazioni geometriche a tolleranza min/max/media',
        ],
      },
      {
        title: 'Music Mood Classifier',
        description:
          'Rete neurale che classifica i brani in categorie di mood (energetico, malinconico, calmo, felice) usando feature audio estratte tramite Spotify API (tempo, energy, valence, danceability). La pipeline include raccolta dati, preprocessing, training del modello e confronto con classificatori baseline (RandomForest, SVM). Deploy come endpoint REST con FastAPI. In corso.',
        stack: ['Python', 'PyTorch', 'scikit-learn', 'Spotify API', 'FastAPI'],
        github: '',
        demo: null,
        image: null,
        features: [
          'Integrazione Spotify API per feature audio a livello traccia',
          'Pipeline ML end-to-end: raccolta, preprocessing, training e valutazione',
          'Benchmark del modello contro baseline RandomForest e SVM',
          'Endpoint REST per inferenza realizzato con FastAPI',
        ],
      },
      {
        title: 'TravelMates',
        description:
          'Backend REST API per la gestione di viaggi di gruppo: spese condivise con calcolo automatico dei debiti ottimizzato per ridurre al minimo le transazioni, pianificazione attività, archivio documenti e note di gruppo.',
        stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Cloudinary', 'Mailgun'],
        github: 'https://github.com/DianaHus/backend-travelmates',
        demo: null,
        image: null,
        features: [
          'Autenticazione JWT con tre livelli di permesso (Admin, Organizer, Traveler)',
          'Spese condivise e personali con suddivisione automatica e ottimizzazione debiti',
          'Calendario attività con conferma e cancellazione prenotazioni',
          'Upload documenti e ricerca full-text tramite Cloudinary',
          'Notifiche email asincrone via Mailgun (inviti, spese, pagamenti)',
        ],
      },
      {
        title: 'Stuff Happens',
        description:
          "Applicazione full stack ispirata al gioco \"Shit Happens\", con tema originale \"Transportation Hoes\". Pescate una carta e posizionatela nell'ordine corretto per indice di sfiga — 3 errori e si perde, 3 corrette di fila e si vince.",
        stack: ['Node.js', 'Express.js', 'React', 'JavaScript', 'SQLite'],
        github: 'https://github.com/DianaHus/exam-Web-Applications-1-Stuff-Happens',
        demo: null,
        image: null,
        features: [
          'Autenticazione utenti con sessioni persistenti su SQLite',
          'Timer per turno — scade il tempo e si perde la domanda',
          'Massimo 3 tentativi per carta prima del game over',
          'Storico partite consultabile per gli utenti loggati',
          'Carte visualizzate e ordinate per indice di sfiga',
        ],
      },
    ],
  },

  experience: {
    title: 'Formazione & Esperienza',
    education: {
      title: 'Formazione',
      items: [
        {
          year: 'Ott 2018 – Dic 2022',
          title: 'Laurea Triennale in Ingegneria Informatica',
          place: 'Politecnico di Torino',
          description:
            'Percorso triennale focalizzato su ingegneria del software, sistemi informatici e infrastrutture digitali. Copre algoritmi, sistemi operativi, basi di dati e metodologie di sviluppo software, in uno dei principali atenei tecnici d\'Italia.',
        },
        {
          year: 'Dic 2022 – In corso',
          title: 'Laurea Magistrale in Ingegneria Informatica – Percorso Software',
          place: 'Politecnico di Torino',
          description:
            'Percorso avanzato focalizzato sulla progettazione e gestione di sistemi software complessi. Il percorso Software approfondisce architettura, qualità del codice e manutenzione di progetti che coinvolgono team numerosi. Attualmente in corso.',
        },
        {
          year: '2025 – In corso',
          title: 'Google Machine Learning Crash Course',
          place: 'Google Developers (online)',
          description:
            'Corso online sui fondamenti del machine learning: supervised learning, reti neurali e applicazioni pratiche.',
        },
      ],
    },
    work: {
      title: 'Esperienza',
      items: [
        {
          year: '2018 – In corso',
          title: 'Tutor Privato',
          place: 'Libera professionista',
          description:
            'Oltre sei anni di ripetizioni in informatica, matematica, fisica e chimica. Spiegare concetti complessi mi ha insegnato a comunicare con chiarezza e ad adattarmi a diversi stili di apprendimento. Vedere gli studenti appassionarsi alle materie con cui prima facevano fatica è la mia motivazione più grande.',
        },
        {
          year: 'Nov 2025 – In corso',
          title: 'Tirocinante Tesi – Progetto VR Tolerance Chain Analysis',
          place: 'Italdesign — Moncalieri (TO)',
          description:
            'Sviluppo di un\'applicazione in Realtà Virtuale per l\'analisi delle catene di tolleranza nel design automotive, integrando ingegneria del software e processi di progettazione industriale.',
        },
      ],
    },
  },

  events: {
    title: 'Hackathon & Eventi',
    items: [
      {
        date: '28 Mar 2026',
        title: 'BEST × NTT DATA Hackathon',
        organizer: 'BEST Politecnico di Torino × NTT DATA',
        location: 'Torino, Italia',
        result: '1° Posto — 143 partecipanti, 40+ team',
        description:
          'Il mio primo hackathon — e lo abbiamo vinto. Ho guidato un team cross-disciplinare di 4 persone attraverso la sfida completa: scegliere un verticale industriale, mappare le opportunità AI lungo la catena del valore, prioritizzare i casi d\'uso e consegnare una raccomandazione strategica Make vs Buy. Abbiamo scelto l\'automotive. Valutati 20 casi d\'uso AI su quattro aree di processo — Embedded SW Development, Cybersecurity Engineering, V&V e Predictive Maintenance — e presentato quattro raccomandazioni finali davanti a una giuria di esperti NTT DATA.',
        tags: ['AI Strategy', 'Automotive', 'Team Lead'],
      },
      {
        date: '17 Apr 2026',
        title: 'Hackathon — SIAE & DataPizza',
        organizer: 'SIAE & DataPizza',
        location: 'Roma, Italia',
        result: null,
        description:
          'Selezionata tra le prime 10 su 650+ candidate. Ho costruito da zero un plugin per Claude Code — hook SessionStart, gate Conventional Commits, un agente reviewer con budget token, e 4 skill file (brainstorming, TDD, implementazione, verifica). Poi ho usato il plugin dal vivo per sviluppare SIAE+: frontend Vue 3, backend TypeScript/Express, JWT auth, bcrypt e 70% di copertura Vitest.',
        tags: ['Plugin Dev', 'Full Stack', 'Claude Code'],
      },
      {
        date: '23 Mag 2026',
        title: 'Vibathon',
        organizer: 'LifeAtPolito × Lovable',
        location: 'Torino, Italia',
        result: null,
        description:
          'App che permette a locali — ristoranti, circoli, associazioni — di creare eventi tramite una chat vocale con l\'AI (integrazione API OpenAI). Gli eventi confluiscono in Parley, una startup torinese il cui chatbot mette in contatto persone che cercano attività sociali (un aperitivo tra sconosciuti, una partita a tennis, un gruppo studio) con quello che succede vicino a loro. Fiera del lavoro fatto anche se non siamo arrivate in cima.',
        tags: ['Voice AI', 'OpenAI', 'Social'],
      },
      {
        date: '9 Giu 2026',
        title: 'TIM Innovation Lab Experience — Women in STEM',
        organizer: 'TIM',
        location: 'Torino, Italia (OGR)',
        result: null,
        description:
          'Selezionata per una mattinata di lavoro di gruppo al Customer Innovation Center di TIM all\'OGR di Torino. Il nostro team ha progettato una soluzione XR — un tool tramite visore VR — per aiutare pazienti con patologie serie (oncologiche, autoimmuni) a capire la propria diagnosi, il decorso della malattia e cosa aspettarsi in ogni fase. La soluzione è stata definita genuinamente innovativa dal team TIM.',
        tags: ['XR / VR', 'Healthcare', 'Women in STEM'],
      },
      {
        date: '13 Giu 2026',
        title: 'The Triage — Empatica Technical Day',
        organizer: 'Empatica',
        location: 'Milano, Italia',
        result: null,
        description:
          'Una giornata negli uffici di Empatica su una sfida di triage medico: costruire uno strumento per classificare 6 pazienti con condizioni neurologiche croniche per priorità di cura, usando 7 giorni di dati da sensori indossabili (HR, EDA, temperatura, accelerometria + auto-report) recuperati via REST API. Il nostro team ha sviluppato una web app per infermieri e tenuto una presentazione convincente. Coordinamento di squadra ottimo — uno dei lavori collaborativi più belli che abbia fatto.',
        tags: ['Healthcare', 'Data Analysis', 'Wearables'],
      },
      {
        date: '24 Giu 2026',
        title: 'Lovable × Databricks Hackathon',
        organizer: 'Lovable × Databricks',
        location: 'Londra, UK',
        result: null,
        description:
          'Hackathon a Londra organizzato da Lovable e Databricks. Non vedo l\'ora.',
        tags: ['Lovable', 'Databricks'],
        upcoming: true,
      },
    ],
  },

  contacts: {
    title: 'Parliamoci',
    closing:
      'Che sia per un progetto, una collaborazione, o condividere un meme sull\'informatica - la mia inbox è friendly :)',
    email: 'di.husanu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dianahusanu/',
    github: 'https://github.com/DianaHus',
  },
}
