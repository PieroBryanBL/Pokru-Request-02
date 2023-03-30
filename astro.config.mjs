import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import './public/styles.css';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});