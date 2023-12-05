import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Simo56.github.io',
  	//base: '/MyPortfolio',
	//public: '/public',
	integrations: [tailwind(), mdx(), image()],
});
