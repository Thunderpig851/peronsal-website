<script lang="ts">
  export let data;
  const modules = import.meta.glob('/src/content/blog/*.md');

  let Component: any = null;
  $: if (data?.post?.importKey) {
    (async () => {
      const mod: any = await modules[data.post.importKey]();
      Component = mod.default;
    })();
  }
  console.log(data);
</script>

{#if Component}
  <svelte:component this={Component} />
{/if}
