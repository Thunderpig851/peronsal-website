
<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/css';
  import Card from '$lib/components/Card.svelte';
</script>

<Splide>
  <SplideSlide>
    <Card
      title="Hive Tracks Case Study"
      description="Design notes and performance tweaks."
      image="/images/hivetracks.jpg"
      href="/projects/hive-tracks"
      tag="Case Study" />
  </SplideSlide>

  <SplideSlide>
    <Card
      title="Svelte Blog Layout"
      description="Clean list with tiny hover accents."
      image="/images/blog-layout.jpg"
      href="/blog/layout"
      tag="Svelte" />
  </SplideSlide>
</Splide>
