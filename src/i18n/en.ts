import type { SiteTranslations } from './types';

export const en: SiteTranslations = {
  lang: 'en',
  meta: {
    title: 'Iván Campos Armero — Systems & Development Specialist',
    description:
      'Professional portfolio. Field infrastructure and security technician transitioning to IT, Systems and Development roles.',
  },
  hero: {
    eyebrow: '[ Portfolio — Iván Campos Armero ]',
    tagline: 'Building IT solutions from physical infrastructure to software.',
    subtitle: 'Systems, Networks & Hybrid Development Specialist.',
    cta: 'View full profile',
    scroll: 'Scroll',
  },
  terminal: {
    label: '// about_me.sh',
    heading: 'About Me',
    chromeTitle: 'bash — ivan@portfolio',
    bio: 'I understand technology from the physical router to the script. I combine field problem-solving experience with my curiosity and training in Cross-Platform Application Development (DAM) and Python programming (UOC).',
  },
  skills: {
    label: '// core_skills.exe',
    heading: 'Technical Skills',
    categories: [
      {
        label: 'Systems & Networks',
        code: '01',
        accent: 'cyan',
        items: ['Mikrotik', 'Wimax', 'CGNAT', 'RADIUS', 'Linux', 'Ubiquiti', 'Cambium', 'Albentia', 'Netonix', 'Network Management', 'Customer Support'],
      },
      {
        label: 'Development',
        code: '02',
        accent: 'green',
        items: ['Python', 'Git', 'Automation', 'AI', 'LLM Experience'],
      },
      {
        label: 'Hardware',
        code: '03',
        accent: 'amber',
        items: ['HW/SW Maintenance', 'IoT', 'Climax', 'Proview', 'Private Environment Deployment', 'Home/Business Automation'],
      },
    ],
  },
  experience: {
    label: '// experience.log',
    heading: 'Work Experience',
    jobs: [
      {
        index: '01',
        title: 'Alarm Technician',
        company: 'Prosegur / Insyte',
        summary: 'IoT configuration, cameras, control panels and autonomous resolution on Climax/Proview platforms.',
        details: [
          'Installation and configuration of residential and business alarm systems.',
          'Programming and commissioning of control panels on Climax and Proview platforms.',
          'Integration of IoT devices: IP cameras, motion and opening sensors.',
          'Autonomous field diagnosis and resolution of technical incidents.',
        ],
      },
      {
        index: '02',
        title: 'Office Technician',
        company: 'AVATEL',
        summary: 'Wimax, Fiber, IP PBX network management and remote IT support.',
        details: [
          'Administration and monitoring of Wimax and fiber optic network infrastructure.',
          'Management and configuration of IP PBX telephony systems.',
          'Remote technical support to residential and business customers.',
          'Coordination with field teams for fault resolution.',
        ],
      },
      {
        index: '03',
        title: 'Internet Installer',
        company: 'Icono Enterprise',
        summary: 'HFC network fault diagnosis and resolution.',
        details: [
          'Installation of HFC (Hybrid Fiber-Coaxial) infrastructure at customer premises.',
          'Diagnosis and repair of external and internal plant faults.',
          'Configuration of ONTs, routers and CPE equipment.',
          'Verification of signal parameters and quality of service.',
        ],
      },
      {
        index: '04',
        title: 'Other customer-focused roles',
        company: 'NHotels · Repairpart',
        summary: 'Customer service, reservations management and technical product sales.',
        details: [
          'Receptionist at NHotels: reservations management, check-in/check-out and multichannel customer service.',
          'Technical Sales at Repairpart: advice, sales and repair of consoles and peripherals.',
          'First-level incident resolution and warranty management.',
        ],
      },
    ],
  },
  education: {
    label: '// credentials.db',
    heading: 'Education & Certifications',
    blocks: [
      {
        index: '01',
        title: 'IT & Development',
        items: [
          { degree: 'Cross-Platform Application Development (DAM) — 1st year', institution: 'IES Doctor Balmis — Alicante' },
          { degree: 'Python Programming Course', institution: 'UOC — Universitat Oberta de Catalunya' },
          { degree: 'Computer Systems & Networks (SMR)', institution: 'IES Paco Molla — Petrer' },
          { degree: 'Computer Security', institution: 'Instituto Formación Permanente Alicante' },
        ],
      },
      {
        index: '02',
        title: 'Base Studies',
        items: [
          { degree: 'Science Baccalaureate', institution: 'IES — Monóvar' },
          { degree: 'Secondary Education (E.S.O.)', institution: 'IES Enric Valor — Monóvar' },
        ],
      },
      {
        index: '03',
        title: 'Languages & Licenses',
        items: [
          { degree: 'English', institution: 'Conversational level' },
          { degree: 'Valencian', institution: 'Intermediate level' },
          { degree: "Driver's License B & A", institution: 'Own vehicle' },
        ],
      },
    ],
  },
  contact: {
    label: '// contact.sh',
    heading: 'Contact',
    tagline: "Looking for a resourceful and autonomous technical profile? Let's connect.",
    location: 'Alicante, Spain',
    copyright: '© 2025 Iván Campos Armero',
  },
};
