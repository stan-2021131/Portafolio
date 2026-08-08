// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  site: 'https://portafolio.sergiotan.online',
  integrations: [astroIcon()],
});
