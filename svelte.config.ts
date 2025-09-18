import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
  extensions: ['.md', '.svx'] // include .md if you want Markdown files too
  // remarkPlugins: [], rehypePlugins: [], layout: { blog: 'src/lib/layouts/BlogLayout.svelte' }, etc.
};

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
   adapter: adapter()
  }
};

export default config;
