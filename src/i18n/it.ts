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
      'Buildo cose: codice che funziona quasi sempre, interfacce che (si spera) non facciano piangere nessuno, plugin Python, applicazioni web ed esperimenti di AI che ogni tanto mi mangiano il weekend. Vivo da poco a Milano, e vado avanti a curiosità e caffeina in dosi pressoché uguali. Inoltre non resisto mai a imparare qualcosa di nuovo solo perché esiste: l\'estate dopo la laurea è toccato al tedesco, studiato da autodidatta, senza un vero motivo se non voler vedere se ce la facessi.',
    cta: 'Scopri i miei lavori',
    ctaSecondary: 'Contattami',
  },

  about: {
    title: 'Chi sono',
    bio: [
      'Sono neolaureata in Ingegneria Informatica al Politecnico di Torino.',
      'Ho iniziato programmando in C, ed è probabilmente lì che mi è rimasta l\'abitudine di voler sempre capire cosa succede sotto il cofano. Da allora ho girato parecchio: Python, Java con Spring Boot, JavaScript e TypeScript, costruendo applicazioni web e provando tecnologie nuove ogni volta che ne avevo la scusa.',
      'Per la tesi sono uscita dal solito perimetro accademico e mi sono buttata su qualcosa di concreto: un plugin Python per Autodesk VRED, sviluppato in ambito automotive, che permette a designer e ingegneri di visualizzare direttamente in scena VR le tolleranze generate da strumenti di analisi statistica come 3DCS. È stato un lavoro tutt\'altro che glamour: molto tedioso, con bisogno di un\'attenzione ai dettagli quasi ossessiva, ma è stata anche la prima volta che ho visto con chiarezza quanto mi piace prendere qualcosa di astratto (numeri, distribuzioni statistiche) e renderlo qualcosa che una persona può letteralmente guardare e capire d\'istinto. Mi ha dato una soddisfazione particolare vedere che il progetto è piaciuto abbastanza da restare in azienda, con l\'obiettivo di svilupparlo e validarlo fino a farlo diventare parte stabile del processo di progettazione.',
      'Da settembre 2026 sono Graduate Engineer in Empatica, a Milano, dove si sviluppano wearable medicali certificati FDA e CE per la ricerca clinica: dispositivi che misurano segnali fisiologici e li trasformano in digital biomarker validati. È lo stesso tipo di problema che mi aveva conquistata con VRED, spostato di dominio: prendere un dato che da solo non dice niente a nessuno (una tolleranza, un segnale) e costruire tutto quello che serve perché diventi qualcosa su cui una persona può fidarsi e decidere. Il programma prevede tre rotazioni da quattro mesi tra Embedded Software, Data Science, Cloud Engineering e Mobile Development: quattro tratti dello stesso percorso che un dato compie dal sensore sul polso fino a chi lo analizza. Lavorare su tutta la catena, in un contesto dove il software è regolamentato come dispositivo medico, è esattamente il tipo di visione d\'insieme che cercavo per iniziare.',
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
      'Cose che ho costruito: alcune accademiche, alcune per divertimento, alcune perché non riuscivo a dormire.',
    githubLabel: 'GitHub',
    demoLabel: 'Demo live',
    items: [
      {
        title: 'VR Tolerance Chain Analysis',
        description:
          'Progetto di tesi magistrale (concluso). Plugin Python per Autodesk VRED che analizza i dati di tolleranza da 3DCS e visualizza le misure di gap e flush su componenti automotive direttamente nella scena 3D.',
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
        title: 'Anomaly Detection (MVTec AD)',
        description:
          'Pipeline di anomaly detection e localizzazione di difetti di produzione su immagini, addestrata solo su campioni conformi (setting one-class / cold-start). Approccio PatchCore-style: descrittori di patch estratti da una ResNet18 pre-addestrata su ImageNet e congelata, memory bank dei patch "normali" e anomaly score come distanza k-NN. Sulla categoria "bottle": AUROC a livello immagine 0.994.',
        stack: ['Python', 'PyTorch', 'torchvision', 'scikit-learn', 'OpenCV', 'Google Colab'],
        github: 'https://github.com/DianaHus/anomaly-detection-mvtec',
        demo: null,
        image: null,
        features: [
          'Feature extraction con ResNet18 pre-addestrata e congelata, troncata a layer2 (nessun training)',
          'Memory bank dei patch normali e anomaly score come distanza media ai k vicini più prossimi',
          'Heatmap di localizzazione del difetto e maschera binaria via smoothing gaussiano, soglia a percentile e operazioni morfologiche',
          'Valutazione a livello immagine (AUROC 0.994) e a livello pixel (IoU, Dice) secondo la convenzione MVTec AD',
          'Notebook eseguibile end-to-end su GPU Colab gratuita, con markdown esplicativi per ogni sezione',
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
          "Applicazione full stack ispirata al gioco \"Shit Happens\", con tema originale \"Transportation Hoes\". Pescate una carta e posizionatela nell'ordine corretto per indice di sfiga: 3 errori e si perde, 3 corrette di fila e si vince.",
        stack: ['Node.js', 'Express.js', 'React', 'JavaScript', 'SQLite'],
        github: 'https://github.com/DianaHus/exam-Web-Applications-1-Stuff-Happens',
        demo: null,
        image: null,
        features: [
          'Autenticazione utenti con sessioni persistenti su SQLite',
          'Timer per turno: scade il tempo e si perde la domanda',
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
          year: '2026 – In corso',
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
          year: 'Nov 2025 – Giu 2026',
          title: 'Tirocinante Tesi – Progetto VR Tolerance Chain Analysis',
          place: 'Italdesign, Moncalieri (TO)',
          description:
            'Ho sviluppato un\'applicazione in Realtà Virtuale per l\'analisi delle catene di tolleranza nel design automotive, nell\'ambito della tesi magistrale, integrando ingegneria del software e processi di progettazione industriale.',
        },
        {
          year: 'Set 2026 – In corso',
          title: 'Graduate Engineer',
          place: 'Empatica, Milano',
          description:
            'Ingresso nel Graduate Program di Empatica, azienda che sviluppa dispositivi wearable e software per il monitoraggio di pazienti con patologie neurologiche croniche. Il percorso prevede rotazioni tra i team di ingegneria, contribuendo allo sviluppo di prodotti software a supporto della ricerca clinica e del monitoraggio remoto dei pazienti.',
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
        result: '1° Posto (143 partecipanti, 40+ team)',
        description:
          'Il mio primo hackathon. Lo abbiamo vinto. Ho guidato un team cross-disciplinare di 4 persone attraverso la sfida completa: scegliere un verticale industriale, mappare le opportunità AI lungo la catena del valore, prioritizzare i casi d\'uso e consegnare una raccomandazione strategica Make vs Buy. Abbiamo scelto l\'automotive. Valutati 20 casi d\'uso AI su quattro aree di processo (Embedded SW Development, Cybersecurity Engineering, V&V e Predictive Maintenance) e presentato quattro raccomandazioni finali davanti a una giuria di esperti NTT DATA.',
        tags: ['AI Strategy', 'Automotive', 'Team Lead'],
      },
      {
        date: '17 Apr 2026',
        title: 'Hackathon SIAE & DataPizza',
        organizer: 'SIAE & DataPizza',
        location: 'Roma, Italia',
        result: null,
        description:
          'Selezionata tra le prime 10 su 650+ candidate. Ho costruito da zero un plugin per Claude Code: hook SessionStart, gate Conventional Commits, un agente reviewer con budget token, e 4 skill file (brainstorming, TDD, implementazione, verifica). Poi ho usato il plugin dal vivo per sviluppare SIAE+: frontend Vue 3, backend TypeScript/Express, JWT auth, bcrypt e 70% di copertura Vitest.',
        tags: ['Plugin Dev', 'Full Stack', 'Claude Code'],
      },
      {
        date: '23 Mag 2026',
        title: 'Vibathon',
        organizer: 'LifeAtPolito × Lovable',
        location: 'Torino, Italia',
        result: null,
        description:
          'App che permette a locali (ristoranti, circoli, associazioni) di creare eventi tramite una chat vocale con l\'AI (integrazione API OpenAI). Gli eventi confluiscono in Parley, una startup torinese il cui chatbot mette in contatto persone che cercano attività sociali (un aperitivo tra sconosciuti, una partita a tennis, un gruppo studio) con quello che succede vicino a loro. Fiera del lavoro fatto anche se non siamo arrivate in cima.',
        tags: ['Voice AI', 'OpenAI', 'Social'],
      },
      {
        date: '9 Giu 2026',
        title: 'TIM Innovation Lab Experience: Women in STEM',
        organizer: 'TIM',
        location: 'Torino, Italia (OGR)',
        result: null,
        description:
          'Selezionata per una mattinata di lavoro di gruppo al Customer Innovation Center di TIM all\'OGR di Torino. Il nostro team ha progettato una soluzione XR (un tool tramite visore VR) per aiutare pazienti con patologie serie (oncologiche, autoimmuni) a capire la propria diagnosi, il decorso della malattia e cosa aspettarsi in ogni fase. La soluzione è stata definita genuinamente innovativa dal team TIM.',
        tags: ['XR / VR', 'Healthcare', 'Women in STEM'],
      },
      {
        date: '13 Giu 2026',
        title: 'The Triage: Empatica Technical Day',
        organizer: 'Empatica',
        location: 'Milano, Italia',
        result: null,
        description:
          'Una giornata negli uffici di Empatica su una sfida di triage medico: costruire uno strumento per classificare 6 pazienti con condizioni neurologiche croniche per priorità di cura, usando 7 giorni di dati da sensori indossabili (HR, EDA, temperatura, accelerometria + auto-report) recuperati via REST API. Il nostro team ha sviluppato una web app per infermieri e tenuto una presentazione convincente. Coordinamento di squadra ottimo: uno dei lavori collaborativi più belli che abbia fatto.',
        tags: ['Healthcare', 'Data Analysis', 'Wearables'],
      },
      {
        date: '24 Giu 2026',
        title: 'Lovable × Databricks Hackathon',
        organizer: 'Lovable × Databricks',
        location: 'Londra, UK',
        result: null,
        description:
          'Hackathon di una giornata negli uffici Databricks a Londra, per esplorare i connector che collegano Lovable ai lakehouse Databricks. Tra i database messi a disposizione ho scelto quello con le cartelle cliniche di un medico di base e costruito Patient Insights Hub: un cruscotto clinico per cercare pazienti ed esplorare visite, prescrizioni, esami di laboratorio e note, con dati letti live da Databricks via SQL. Ho aggiunto due funzionalità di AI generativa scoped al singolo paziente: un riassunto clinico automatico e una chat Q&A, entrambe vincolate rigidamente ai soli dati recuperati, senza consigli medici né inferenze diagnostiche. Stack: React 19, TanStack Start/Router, Vercel AI SDK con Gemini.',
        tags: ['Databricks', 'Lovable', 'Healthcare AI'],
      },
    ],
  },

  contacts: {
    title: 'Parliamoci',
    closing:
      'Che sia per un progetto, una collaborazione, o una sfida a chi risolve il cubo di Rubik per primo, la mia inbox è friendly :)',
    email: 'di.husanu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dianahusanu/',
    github: 'https://github.com/DianaHus',
  },
}
