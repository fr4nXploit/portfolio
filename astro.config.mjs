import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'es', locales: ['es'], routing: { prefixDefaultLocale: false } },
});
