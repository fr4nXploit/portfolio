import { sites } from './sites';

export interface Project {
  slug: string; name: string; category: string; year: string; summary: string;
  role: string; challenge: string; work: string; architecture: string[]; security?: string;
  outcome: string; stack: string[]; learning?: string; url?: string; visual: string;
}
// Add authorized product screenshots here when supplied. The previews are editorial
// compositions, not screenshots or claims about the products' actual interfaces.
// Personal retrospective/learning statements remain omitted until supplied.
export const projects: Project[] = [
  { slug: 'espartanos', name: 'Espartanos', category: 'PLATAFORMA DIGITAL MULTIPLATAFORMA', year: '2026', role: 'Technical Lead', visual: 'espartanos', url: sites.espartanos,
    summary: 'Un ecosistema completo. Una arquitectura compartida.',
    challenge: 'Articular una landing page, aplicaciones Android/iOS y un panel administrativo con servicios de autenticación, pagos y una experiencia gamificada.',
    work: 'Liderazgo técnico y definición de arquitectura. Coordinación de frontend, backend, UX/UI, QA, infraestructura y seguridad; documentación y capacitación al cliente.',
    architecture: ['Landing · Android / iOS · Panel administrativo', 'APIs · Autenticación · Registro · Pagos', 'Backend · Base de datos', 'Docker · Linux'],
    security: 'Pruebas técnicas, ethical hacking y QA como parte del trabajo sobre la plataforma.',
    outcome: 'Trabajo integral sobre el ecosistema, desde la arquitectura y la implementación hasta los despliegues, la documentación y la capacitación.', stack: ['APIs', 'Docker', 'Linux', 'Android / iOS'] },
  { slug: 'orientacion-vocacional', name: 'Orientación vocacional', category: 'SOFTWARE · DATOS · INVESTIGACIÓN', year: '2026', role: 'Proyecto de investigación / tesis UPC', visual: 'vocacional',
    summary: 'Ingeniería aplicada a una decisión importante.',
    challenge: 'Apoyar la elección de carrera de estudiantes de secundaria mediante un sistema web con un árbol de decisión.',
    work: 'Arquitectura, frontend y backend, motor de decisión, persistencia, contenedores, diseño experimental y validación con estudiantes.',
    architecture: ['Next.js · React', 'Python · Árbol de decisión', 'PostgreSQL', 'Docker'],
    outcome: 'Sistema de orientación vocacional desarrollado como investigación aplicada de la UPC, con diseño experimental y validación con estudiantes.', stack: ['Next.js', 'React', 'Python', 'PostgreSQL', 'Docker'] },
  { slug: 'winpwnshell', name: 'WinPwnShell', category: 'SECURITY RESEARCH · OFFENSIVE LAB', year: '2024', role: 'Proyecto personal de investigación', visual: 'research',
    summary: 'Entender las comunicaciones para analizar la seguridad.',
    challenge: 'Estudiar comunicaciones cliente-servidor y escenarios controlados de post-explotación con una HTTP Reverse Shell.',
    work: 'Investigación y aprendizaje práctico de PowerShell, HTTP y comunicaciones cliente-servidor.',
    architecture: ['Cliente', 'Comunicación HTTP', 'Servidor'], security: 'Proyecto de laboratorio para investigación y aprendizaje en entornos controlados y autorizados.',
    outcome: 'Repositorio público de investigación centrado en el aprendizaje de comunicaciones HTTP y escenarios controlados de seguridad ofensiva.', stack: ['PowerShell', 'HTTP'], url: 'https://github.com/fr4nXploit/WinPwnShell' },
  { slug: 'estas-con-suerte', name: 'Estás con Suerte', category: 'ECOSISTEMA DIGITAL · INTEGRACIONES', year: '', role: 'Arquitectura y desarrollo', visual: 'suerte',
    summary: 'Usuarios, suscripciones y pagos conectados.',
    challenge: 'Integrar la plataforma web, la gestión de usuarios y los procesos digitales de Estás con Suerte S.A.C.',
    work: 'Arquitectura, plataforma web, APIs, automatización e integración de suscripciones y pagos.',
    architecture: ['Plataforma web · Gestión de usuarios', 'APIs · Automatización', 'Suscripciones · Pagos'],
    outcome: 'El proyecto reportó aproximadamente un 90% de incremento en llegada de usuarios. Esta cifra corresponde al resultado reportado del proyecto.', stack: ['APIs', 'Automatización', 'Suscripciones', 'Pagos'], url: sites.suerte },
];
