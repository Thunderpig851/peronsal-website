// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexConfig = { extensions: ['.md', '.svx'] };
const dev = process.argv.includes('dev');

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*'] },
    paths: {
      base: dev ? '' : '/my-site' // <-- change to your repo name
    }
  }
};

export default config;
