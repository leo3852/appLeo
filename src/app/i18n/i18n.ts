export type Lang = 'en' | 'es';

/** A string the page can show in either language. */
export interface I18nText {
  en: string;
  es: string;
}

/**
 * Chrome for the page: labels, headings and buttons. Content that belongs to
 * a specific experience or project lives in portfolio.data.ts instead.
 *
 * Strings rendered with [innerHTML] may contain <strong>; they are authored
 * here, never user input. No class attributes — the emphasis is styled from
 * the component stylesheet so nothing depends on the sanitizer.
 */
export const UI = {
  langLabel: { en: 'Language', es: 'Idioma' },

  // ---- hero
  role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
  techAi: { en: 'AI Tooling', es: 'Herramientas de IA' },
  location: { en: 'Montevideo, Uruguay', es: 'Montevideo, Uruguay' },
  bio1: {
    en:
      "Hi! I'm Leo, a full-stack developer with over 5 years of experience. I started out in " +
      'front-end development and moved progressively deeper into the back end, which is where most ' +
      'of my work lives today. <strong>RESTful APIs</strong> are at the centre of almost everything ' +
      'I build — designed and shipped in <strong>.NET</strong> and <strong>C#</strong>, backed by ' +
      'the <strong>SQL Server</strong> databases I model behind them.',
    es:
      '¡Hola! Soy Leo, desarrollador full-stack con más de 5 años de experiencia. Empecé en el ' +
      'front-end y me fui metiendo cada vez más en el back-end, que es donde vive la mayor parte de ' +
      'mi trabajo hoy. Las <strong>APIs RESTful</strong> están en el centro de casi todo lo que ' +
      'construyo: diseñadas y puestas en producción con <strong>.NET</strong> y <strong>C#</strong>, ' +
      'sobre las bases <strong>SQL Server</strong> que modelo detrás.'
  },
  bio2: {
    en:
      'AI tooling is part of my daily workflow: I use <strong>Claude Code</strong> from the terminal ' +
      'every day. Reviewing AI-generated code professionally has made me pragmatic about it — I know ' +
      'where these tools genuinely speed up delivery, and where the output still needs a careful ' +
      'human pass.',
    es:
      'Las herramientas de IA son parte de mi día a día: uso <strong>Claude Code</strong> desde la ' +
      'terminal todos los días. Revisar código generado por IA de forma profesional me volvió ' +
      'pragmático al respecto: sé dónde aceleran de verdad y dónde el resultado todavía necesita una ' +
      'revisión humana cuidadosa.'
  },
  bio3: {
    en:
      'On the front end I build responsive, pixel-perfect interfaces with <strong>Angular</strong>, ' +
      '<strong>TypeScript</strong> and <strong>Tailwind CSS</strong>. After spending the last few ' +
      'months in Dublin, Ireland — where working in an English-speaking environment sharpened my ' +
      "communication — I'm now based back in Montevideo, Uruguay.",
    es:
      'En el front-end construyo interfaces responsive y pixel-perfect con <strong>Angular</strong>, ' +
      '<strong>TypeScript</strong> y <strong>Tailwind CSS</strong>. Después de pasar los últimos ' +
      'meses en Dublín, Irlanda —donde trabajar en un entorno de habla inglesa afinó mi ' +
      'comunicación— hoy estoy de vuelta en Montevideo, Uruguay.'
  },
  ctaWork: { en: 'View my work', es: 'Ver mi trabajo' },

  // ---- experience
  experienceLabel: { en: 'Experience', es: 'Experiencia' },
  experienceTitle: { en: "Where I've worked", es: 'Dónde trabajé' },
  present: { en: 'Present', es: 'Actualidad' },
  visitCompany: { en: 'Visit company site', es: 'Ver sitio de la empresa' },

  // ---- ai + experience
  aiLabel: { en: 'AI + Experience', es: 'IA + Experiencia' },
  aiTitle1: { en: 'AI writes the first draft.', es: 'La IA escribe el primer borrador.' },
  aiTitle2: {
    en: 'Experience decides what ships.',
    es: 'La experiencia decide qué sale a producción.'
  },
  aiP1: {
    en:
      'AI tooling genuinely makes me faster — it clears most of the blank-page work, and I lean on ' +
      "it every day. What it doesn't do is decide where the boundaries go, which query falls over " +
      "at scale, or what belongs in a public contract. That part is still judgement, and it's the " +
      "part I've spent years building.",
    es:
      'Las herramientas de IA me hacen más rápido de verdad: se llevan casi todo el trabajo de la ' +
      'hoja en blanco, y me apoyo en ellas todos los días. Lo que no hacen es decidir dónde van los ' +
      'límites, qué consulta se cae cuando escala, o qué corresponde exponer en un contrato ' +
      'público. Esa parte sigue siendo criterio, y es la que me llevó años construir.'
  },
  aiP2: {
    en:
      "Here's a concrete one: an endpoint close to what a model hands you on the first try, and the " +
      "version I'd actually deploy.",
    es:
      'Un ejemplo concreto: un endpoint parecido al que te devuelve un modelo en el primer intento, ' +
      'y la versión que realmente pondría en producción.'
  },
  codeComparison: { en: 'Code comparison', es: 'Comparación de código' },
  tabDraft: { en: 'What AI handed me', es: 'Lo que me dio la IA' },
  tabShipped: { en: 'What I shipped', es: 'Lo que puse en producción' },
  aiPracticesLead: {
    en: 'The habits around the tool matter as much as its output:',
    es: 'Los hábitos alrededor de la herramienta importan tanto como su salida:'
  },
  aiClosing: {
    en:
      'Reviewing AI-generated code is also my day job right now, at TELUS Digital · Outlier. Doing ' +
      'it at volume is what turned these into habits rather than a checklist.',
    es:
      'Revisar código generado por IA es además mi trabajo actual, en TELUS Digital · Outlier. ' +
      'Hacerlo en volumen es lo que convirtió todo esto en hábitos y no en una lista de control.'
  },

  // ---- projects
  projectsLabel: { en: 'Side work', es: 'Proyectos propios' },
  projectsTitle: { en: 'Independent projects', es: 'Proyectos independientes' },
  projectsIntro: {
    en:
      'Things I build on my own time to keep my stack sharp and solve problems I actually care about.',
    es:
      'Cosas que construyo en mi tiempo para mantener el stack afilado y resolver problemas que me ' +
      'importan de verdad.'
  },
  viewProject: { en: 'View live project', es: 'Ver proyecto' },
  previewAlt: { en: 'preview', es: 'vista previa' },
  privateTitle: { en: "And the ones I can't show", es: 'Y los que no puedo mostrar' },
  privateBody: {
    en:
      'Alongside these, I build steadily on projects that stay private — day-to-day work I have no ' +
      'link for. Different problems, the same stack and the same standards, and a good part of my ' +
      'recent experience comes from there.',
    es:
      'Además de estos, construyo de forma constante en proyectos que se mantienen privados: ' +
      'trabajo del día a día que no puedo linkear. Problemas distintos, el mismo stack y los mismos ' +
      'estándares, y de ahí sale buena parte de mi experiencia reciente.'
  },

  // ---- footer
  createdBy: { en: 'Created by', es: 'Hecho por' }
} satisfies Record<string, I18nText>;
