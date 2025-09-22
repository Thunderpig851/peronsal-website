import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// filename -> slug: strip YYYY-MM-DD- and .md
const toSlug = (p: string) =>
  p.split('/').pop()!.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');


export const load: PageLoad = async ({ params }) => 
{
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

  const match = Object.entries(modules).find(([path]) => toSlug(path) === params.slug);
  if (!match) throw error(404, 'Not found');

  const [importKey, mod] = match as [string, any];
  
  const meta = (mod?.metadata ?? {}) as 
  {
    title?: string; 
    date?: string; 
    description?: string; 
    tags?: string[]; 
    cover?: string; 
    draft?: boolean;
  };

  if (!import.meta.env.DEV && meta.draft) throw error(404, 'Not found');

  return { post: { slug: params.slug, meta, importKey } };
};
