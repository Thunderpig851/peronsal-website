<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/css/core';
  import Card from '$lib/components/Card.svelte';
</script>

<h1>Projects</h1>

<Splide on:arrowsMounted={ e => { console.log( e.detail.prev ) } }>
    <SplideSlide></SplideSlide>
</Splide>
