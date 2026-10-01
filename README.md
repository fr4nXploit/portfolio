# Francesco Rios Anton — Portfolio

Portfolio editorial en Astro + TypeScript, renderizado estático, en español.

## Desarrollo

```sh
npm install
npm run dev
```

Abrir http://localhost:4321. Para verificar: `npm run check` y `npm run build`.
Para revisar la versión de producción: `npm run preview`.

## Arquitectura

- `src/data/profile.ts`: perfil, experiencia, capacidades y certificaciones.
- `src/data/projects.ts`: cuatro casos de estudio, generados en `/work/[slug]/`.
- `src/styles/tokens.css`: paleta, tipografía y espaciado base.
- `src/styles/global.css`: composición editorial y responsive.
- `src/assets/francesco.png`: retrato proporcionado; Astro genera WebP responsivo.
- `src/i18n/ui.ts`: diccionario inicial en español. Incorporar traducciones y rutas inglesas al ampliar idiomas.

Se prioriza HTML y CSS nativos. La fuente Manrope se sirve localmente. Los detalles técnicos y capacidades usan `<details>` y funcionan sin JavaScript.

## Dirección visual y movimiento

`src/styles/experimental.css` define la dirección editorial en negro, hueso y ultramarino, el retrato en capas, las órbitas CSS y la galería asimétrica. `src/components/Motion.astro` controla la tipografía ligada al scroll, las entradas con IntersectionObserver, el CTA magnético y el indicador de lectura; no requiere librerías de animación.

Las animaciones se activan automáticamente y respetan `prefers-reduced-motion`, sin botón ni preferencias guardadas. El retrato permanece estático dentro del hero, sin paralaje ni animación de entrada. Sin JavaScript el contenido sigue visible. Los efectos de puntero se limitan a dispositivos con mouse. El otro script de interfaz copia el email.

`src/styles/editorial-content.css` desarrolla los capítulos: selector accesible de experiencia bancaria (`ExperienceStage.astro`), proyectos con composiciones conceptuales, liderazgo con tótem ilustrado en CSS (`LeadershipLab.astro`), capacidades desplegables y credenciales en una composición de fichas. El selector de experiencia admite flechas, Home y End; sin JavaScript muestra todas las etapas.

Los cinco logos proporcionados están en `src/assets/brands/`, con un mapa de importaciones en `src/data/brands.ts`. Astro los optimiza localmente. Se conservan sus colores. Las ilustraciones de plataformas y del tótem son diagramas editoriales, no capturas reales de producto.

Fuentes de los logos, proporcionadas por el autor:
- BBVA: https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/BBVA_logo_2025.svg/1280px-BBVA_logo_2025.svg.png
- BCP: https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo-bcp-vector.svg/3840px-Logo-bcp-vector.svg.png
- Espartanos: https://espartanos.com.pe/images/logov2.webp
- Kioscos IA: https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20HORIZONTAL-i2e47LDKRGah0s35rCR2Y66CjsYw13.png
- Estás con Suerte: https://wsshrt52akzzgpf3.public.blob.vercel-storage.com/logo%20%283%29.png

## Antes de publicar

Configurar `SITE_URL` con el dominio definitivo (ver `.env.example`). Esta variable habilita canonical, og:url y URLs absolutas en sitemap. Sin ella, el sitemap queda vacío a propósito: no se inventa un dominio público.

Assets pendientes opcionales: capturas reales autorizadas de los proyectos, imagen social OpenGraph y enlaces verificables de credenciales. Las composiciones visuales actuales son ilustraciones editoriales, no screenshots de producto. No se inventaron métricas ni tecnologías; la cifra del 90% se identifica como resultado reportado del proyecto. Los aprendizajes personales tienen un campo opcional y se publicarán cuando el autor los proporcione.

No hay formularios, servicios externos de analítica ni backend. `dist/` se puede desplegar en un alojamiento estático.
