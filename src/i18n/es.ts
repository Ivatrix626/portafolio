import type { SiteTranslations } from './types';

export const es: SiteTranslations = {
  lang: 'es',
  meta: {
    title: 'Iván Campos Armero — Especialista en Sistemas y Desarrollo',
    description:
      'Portfolio profesional. Técnico en infraestructuras y seguridad en transición hacia roles de IT, Sistemas y Desarrollo.',
  },
  hero: {
    eyebrow: '[ Portfolio — Iván Campos Armero ]',
    tagline: 'Construyendo soluciones IT desde la infraestructura física hasta el software.',
    subtitle: 'Especialista en Sistemas, Redes y Desarrollo Híbrido.',
    cta: 'Ver perfil completo',
    scroll: 'Scroll',
  },
  terminal: {
    label: '// sobre_mi.sh',
    heading: 'Sobre Mí',
    chromeTitle: 'bash — ivan@portfolio',
    bio: 'Entiendo la tecnología desde el router físico hasta el script. Combino experiencia resolviendo problemas en campo, con mi curiosidad y formación en Desarrollo de Aplicaciones Multiplataforma (DAM) y programación en Python (UOC).',
  },
  skills: {
    label: '// core_skills.exe',
    heading: 'Habilidades Técnicas',
    categories: [
      {
        label: 'Sistemas y Redes',
        code: '01',
        accent: 'cyan',
        items: ['Mikrotik', 'Wimax', 'CGNAT', 'RADIUS', 'Linux', 'Ubiquiti', 'Cambium', 'Albentia', 'Netonix', 'Gestión de Red', 'Soporte clientes'],
      },
      {
        label: 'Desarrollo',
        code: '02',
        accent: 'green',
        items: ['Python', 'Git', 'Automatización', 'IA', 'Experiencia con LLM'],
      },
      {
        label: 'Hardware',
        code: '03',
        accent: 'amber',
        items: ['Mantenimiento HW/SW', 'IoT', 'Climax', 'Proview', 'Implementación de sistemas en entorno privado', 'Implementación de Domótica Privado/Empresarial'],
      },
    ],
  },
  experience: {
    label: '// experience.log',
    heading: 'Experiencia Laboral',
    jobs: [
      {
        index: '01',
        title: 'Técnico de Alarmas',
        company: 'Prosegur / Insyte',
        summary: 'Configuración IoT, cámaras, centralitas y resolución autónoma en plataformas Climax/Proview.',
        details: [
          'Instalación y configuración de sistemas de alarma residenciales y empresariales.',
          'Programación y puesta en marcha de centralitas en plataformas Climax y Proview.',
          'Integración de dispositivos IoT: cámaras IP, sensores de movimiento y apertura.',
          'Diagnóstico y resolución autónoma de incidencias técnicas en campo.',
        ],
      },
      {
        index: '02',
        title: 'Técnico de Oficina',
        company: 'AVATEL',
        summary: 'Gestión de redes Wimax, Fibra, IP PBX y soporte IT remoto.',
        details: [
          'Administración y monitorización de infraestructura de red Wimax y fibra óptica.',
          'Gestión y configuración de sistemas de telefonía IP PBX.',
          'Soporte técnico remoto a clientes residenciales y empresariales.',
          'Coordinación con equipos de campo para resolución de averías.',
        ],
      },
      {
        index: '03',
        title: 'Instalador de Internet',
        company: 'Icono Enterprise',
        summary: 'Diagnóstico y resolución de averías en redes HFC.',
        details: [
          'Instalación de infraestructura HFC (Hybrid Fiber-Coaxial) en domicilios.',
          'Diagnóstico y reparación de averías en planta externa e interna.',
          'Configuración de ONTs, routers y equipos CPE.',
          'Verificación de parámetros de señal y calidad de servicio.',
        ],
      },
      {
        index: '04',
        title: 'Otros roles enfocados en el cliente',
        company: 'NHotels · Repairpart',
        summary: 'Atención al cliente, gestión de reservas y venta técnica de equipos.',
        details: [
          'Recepcionista en NHotels: gestión de reservas, check-in/check-out y atención multicanal.',
          'Dependiente Técnico en Repairpart: asesoramiento, venta y reparación de consolas y periféricos.',
          'Resolución de incidencias de primer nivel y gestión de garantías.',
        ],
      },
    ],
  },
  education: {
    label: '// credentials.db',
    heading: 'Formación y Certificaciones',
    blocks: [
      {
        index: '01',
        title: 'Informática y Desarrollo',
        items: [
          { degree: 'Desarrollo de Aplicaciones Multiplataforma (DAM) — 1er curso', institution: 'IES Doctor Balmis — Alicante' },
          { degree: 'Curso de Programación Python', institution: 'UOC — Universitat Oberta de Catalunya' },
          { degree: 'Sistemas Microinformáticos y Redes (SMR)', institution: 'IES Paco Molla — Petrer' },
          { degree: 'Seguridad Informática', institution: 'Instituto Formación Permanente Alicante' },
        ],
      },
      {
        index: '02',
        title: 'Estudios Base',
        items: [
          { degree: 'Bachiller Científico', institution: 'IES — Monóvar' },
          { degree: 'Educación Secundaria Obligatoria (E.S.O.)', institution: 'IES Enric Valor — Monóvar' },
        ],
      },
      {
        index: '03',
        title: 'Idiomas y Permisos',
        items: [
          { degree: 'Inglés', institution: 'Nivel conversacional' },
          { degree: 'Valenciano', institution: 'Nivel medio' },
          { degree: 'Carnet de conducir B y A', institution: 'Vehículo propio' },
        ],
      },
    ],
  },
  contact: {
    label: '// contacto.sh',
    heading: 'Contacto',
    tagline: '¿Buscas un perfil técnico resolutivo y autónomo? Conectemos.',
    location: 'Alicante, España',
    copyright: '© 2025 Iván Campos Armero',
  },
};
