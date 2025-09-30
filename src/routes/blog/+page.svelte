<script lang="ts">
  export let data: {
    posts: {
      slug: string;
      title: string;
      date: string;
      description: string;
      tags: string[];
      cover?: string;
      component?: any;
    }[];
  };

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, 
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
</script>

<section id="blog-landing" class="container">
  <h1>Recent Posts</h1>

  {#if data.posts.length === 0}
    <p>No posts yet.</p>
  {:else}
      {#each data.posts as post}
          <div class="post-list">
              <h2><a class="link" href={`/blog/${post.slug}`}>{post.title}</a></h2>
              <p class="muted">{fmt(post.date)}</p>
              {#if post.description}
                <p>{post.description}</p>
              {/if}
          </div>
      {/each}
  {/if}
</section>
