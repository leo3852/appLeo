import { I18nText } from '../i18n/i18n';

export interface Link {
  url: string;
  label: I18nText;
}

export interface Experience {
  /** Company names are proper nouns and stay the same in both languages. */
  company: string;
  role: I18nText;
  period: I18nText;
  current?: boolean;
  summary: I18nText;
  highlights?: I18nText[];
  stack: string[];
  link?: Link;
}

export interface Project {
  title: string;
  period: I18nText;
  summary: I18nText;
  note?: I18nText;
  image?: string;
  /** Give the card the full row even without an image. */
  wide?: boolean;
  stack: string[];
  link?: Link;
}

const VISIT_COMPANY: I18nText = {
  en: 'Visit company site',
  es: 'Ver sitio de la empresa'
};

const VIEW_PROJECT: I18nText = {
  en: 'View live project',
  es: 'Ver proyecto'
};

const READ_BLOG: I18nText = {
  en: 'Read the blog',
  es: 'Leer el blog'
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'TELUS Digital · Outlier',
    role: {
      en: 'AI Data Annotator / Code Reviewer',
      es: 'Anotador de datos IA / Revisor de código'
    },
    period: { en: '09/2025 — Present', es: '09/2025 — Actualidad' },
    current: true,
    summary: {
      en:
        'I evaluate AI-generated text and code for accuracy, quality and guideline compliance, ' +
        "reviewing model output the same way I would review a teammate's pull request.",
      es:
        'Evalúo texto y código generados por IA en precisión, calidad y cumplimiento de ' +
        'lineamientos, revisando la salida del modelo como revisaría el pull request de un colega.'
    },
    highlights: [
      {
        en:
          'Identify errors and improvement opportunities in AI-generated code against development ' +
          'best practices.',
        es:
          'Identifico errores y oportunidades de mejora en código generado por IA aplicando buenas ' +
          'prácticas de desarrollo.'
      },
      {
        en: 'Rate model responses on correctness, instruction-following and overall quality.',
        es:
          'Califico las respuestas del modelo según exactitud, seguimiento de instrucciones y ' +
          'calidad general.'
      },
      {
        en: 'Label and classify multimodal data used to train machine learning models.',
        es:
          'Etiqueto y clasifico datos multimodales para el entrenamiento de modelos de machine ' +
          'learning.'
      }
    ],
    stack: ['AI Evaluation', 'Code Review', 'Data Annotation', 'Multimodal Data', 'Quality Assurance']
  },
  {
    company: 'Dominion Capital Strategies',
    role: { en: 'Full-Stack .NET Developer', es: 'Desarrollador Full-Stack .NET' },
    period: { en: '01/04/2021 — 31/03/2023 · 2 yr', es: '01/04/2021 — 31/03/2023 · 2 años' },
    summary: {
      en:
        'During my tenure as a Full-Stack .NET Developer, I contributed to various aspects of the ' +
        'company’s operations. From launching new processes to maintaining existing ones, I ' +
        'delivered both minor and major features that supported and improved daily business ' +
        'functionality.',
      es:
        'Durante mi tiempo como desarrollador Full-Stack .NET contribuí en distintos frentes de la ' +
        'operación de la empresa. Desde poner en marcha procesos nuevos hasta mantener los ' +
        'existentes, entregué funcionalidades chicas y grandes que sostuvieron y mejoraron el ' +
        'funcionamiento diario del negocio.'
    },
    stack: [
      'TypeScript',
      'Angular',
      'SCSS',
      'TailwindCSS',
      'C#',
      'ASP.NET',
      'SQL Server',
      'Azure DevOps',
      'Docker',
      'RabbitMQ',
      'APIRest'
    ],
    link: { url: 'https://dominion-cs.com/en', label: VISIT_COMPANY }
  },
  {
    company: 'Porto Servicios',
    role: { en: 'Full-Stack .NET Developer', es: 'Desarrollador Full-Stack .NET' },
    period: { en: '22/06/2020 — 26/03/2021', es: '22/06/2020 — 26/03/2021' },
    summary: {
      en:
        'As a Full-Stack .NET Developer, I led the modernization of the company’s system by ' +
        'integrating a RESTful API and migrating to a new framework. This significantly improved ' +
        'performance and enhanced the overall user experience.',
      es:
        'Como desarrollador Full-Stack .NET lideré la modernización del sistema de la empresa ' +
        'integrando una API RESTful y migrando a un framework nuevo. Eso mejoró el rendimiento de ' +
        'forma significativa y elevó la experiencia de usuario.'
    },
    stack: ['Angular', 'Bootstrap', 'JavaScript', 'C#', 'ASP.NET', 'SQL Server', 'Azure DevOps'],
    link: { url: 'https://www.portoservicios.com.uy/', label: VISIT_COMPANY }
  },
  {
    company: 'Middlesoft',
    role: { en: '.NET Developer', es: 'Desarrollador .NET' },
    period: { en: '21/10/2019 — 12/06/2020', es: '21/10/2019 — 12/06/2020' },
    summary: {
      en:
        'In a fast-paced software factory environment, I worked as a .NET developer with a strong ' +
        'focus on front-end tasks. I adapted quickly to diverse projects, using a variety of modern ' +
        'and legacy technologies to deliver quality solutions under tight deadlines.',
      es:
        'En el entorno acelerado de una fábrica de software trabajé como desarrollador .NET con ' +
        'foco fuerte en front-end. Me adapté rápido a proyectos diversos, usando tecnologías ' +
        'modernas y legacy para entregar soluciones de calidad con plazos ajustados.'
    },
    stack: ['TypeScript', 'React', 'jQuery', 'HTML/CSS', 'Bootstrap', 'C#', '.NET Core', 'Azure'],
    link: { url: 'https://www.middlesoft.com.uy/', label: VISIT_COMPANY }
  },
  {
    company: 'Wunderman',
    role: { en: 'Front-End Developer', es: 'Desarrollador Front-End' },
    period: { en: '01/04/2019 — 21/10/2019', es: '01/04/2019 — 21/10/2019' },
    summary: {
      en:
        'As a Front-End Developer, I delivered performant web apps using agile methodologies. My ' +
        'responsibilities included building responsive interfaces, ensuring pixel-perfect design ' +
        'fidelity, and collaborating across teams on multi-platform solutions.',
      es:
        'Como desarrollador Front-End entregué aplicaciones web performantes con metodologías ' +
        'ágiles. Mis responsabilidades incluyeron construir interfaces responsive, asegurar ' +
        'fidelidad pixel-perfect al diseño y colaborar entre equipos en soluciones multiplataforma.'
    },
    stack: ['Vue', 'Angular', 'HTML/CSS', 'SCSS', 'jQuery', 'Bootstrap', 'Jira'],
    link: { url: 'https://vml.com/uruguay', label: VISIT_COMPANY }
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Contexto y Código',
    period: { en: '2026 — Ongoing', es: '2026 — En curso' },
    image: 'assets/imageBlog.jpg',
    summary: {
      en:
        'A blog on software development and applied AI. It comes from something concrete: staying ' +
        'current. Each piece is put together from several very up-to-date sources, and that ' +
        'research ends up being the learning, because publishing on a topic means understanding ' +
        'it first.',
      es:
        'Un blog sobre desarrollo de software e inteligencia artificial aplicada. Nace de algo ' +
        'concreto: mantenerme actualizado. Cada nota la armo recopilando información de varias ' +
        'fuentes muy al día, y esa investigación termina siendo el aprendizaje, porque para ' +
        'publicar sobre un tema primero tengo que entenderlo.'
    },
    stack: ['Astro', 'Markdown', 'i18n', 'RSS'],
    link: { url: 'https://contextoycodigo.is-a.dev/', label: READ_BLOG }
  },
  {
    title: 'Reni Boediarti',
    period: { en: '2025 — August', es: '2025 — Agosto' },
    image: 'assets/reni.jpg',
    summary: {
      en:
        'Portfolio website for a Media Journalist from Indonesia, built with the latest ' +
        'technologies and is fully responsive and SEO optimized. The main goal was to create a ' +
        'website that is easy to navigate showing her most valuable work having a modern and clean ' +
        'design.',
      es:
        'Sitio de portfolio para una periodista de medios de Indonesia, construido con tecnologías ' +
        'actuales, totalmente responsive y optimizado para SEO. El objetivo principal era lograr un ' +
        'sitio fácil de navegar, que mostrara su trabajo más valioso con un diseño moderno y limpio.'
    },
    stack: ['TypeScript', 'Angular 19', 'SCSS', 'TailwindCSS', 'Cursor'],
    link: { url: 'https://reniboediarti.com/', label: VIEW_PROJECT }
  },
  {
    title: 'Graph Creator',
    period: { en: '2025 — June', es: '2025 — Junio' },
    summary: {
      en:
        'An Angular-based application designed to assist teachers and physical education teachers ' +
        'in Latin America create and visualize different types of graphs — linear, polynomial and ' +
        'exponential — and mathematically calculate the corresponding equation. Translated to ' +
        'English, Portuguese and Spanish to reach a broader audience.',
      es:
        'Una aplicación en Angular pensada para ayudar a docentes, y en particular a profesores de ' +
        'educación física en Latinoamérica, a crear y visualizar distintos tipos de gráficos ' +
        '—lineal, polinómico y exponencial— y calcular matemáticamente la ecuación correspondiente. ' +
        'Traducida a inglés, portugués y español para llegar a más gente.'
    },
    stack: ['TypeScript', 'Angular 19', 'SCSS', 'TailwindCSS', 'Chart.js']
  },
  {
    title: 'Finances Manager',
    period: { en: '2025', es: '2025' },
    summary: {
      en:
        'While living abroad and focusing on my studies, I built a full-stack application to stay ' +
        'current with industry practices and sharpen my skills in .NET, SQL Server and Angular. I ' +
        'implemented JWT authentication end to end, securing the ASP.NET REST API and the Angular ' +
        'client on top of it — a hands-on way to apply modern development principles and, not ' +
        'least, to build a useful tool.',
      es:
        'Mientras vivía en el exterior y me enfocaba en estudiar, construí una aplicación ' +
        'full-stack para mantenerme al día con las prácticas de la industria y afilar mis ' +
        'habilidades en .NET, SQL Server y Angular. Implementé autenticación JWT de punta a punta, ' +
        'asegurando la API REST en ASP.NET y el cliente Angular por encima: una forma práctica de ' +
        'aplicar principios modernos de desarrollo y, no menos importante, de construir una ' +
        'herramienta útil.'
    },
    stack: [
      'TypeScript',
      'Angular 19',
      'SCSS',
      'TailwindCSS',
      'C#',
      'ASP.NET',
      'SQL Server',
      'APIRest',
      'JWT Auth'
    ]
  }
];
