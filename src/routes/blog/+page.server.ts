// src/routes/blog/+page.ts
import type { PageLoad } from './$types';

type FM = 
{
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  draft?: boolean;
  cover?: string;
};

function toSlug(filepath: string) 
{
  const file = filepath.split('/').pop()!;
  return file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export const load: PageLoad = async () => 
{
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

  const posts = Object.entries(modules)
    .map(([path, mod]) => {
      const m = mod as { metadata?: FM; default: unknown };
      const meta = m.metadata ?? ({} as FM);

      return {
        slug: toSlug(path),
        title: meta.title,
        date: meta.date,
        description: meta.description ?? '',
        tags: meta.tags ?? [],
        draft: Boolean(meta.draft),
        cover: meta.cover ?? '',
      };
    })
    .filter((p) => (import.meta.env.DEV ? true : !p.draft))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
};
