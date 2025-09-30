
<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/splide/css';
  import Card from '$lib/components/Card.svelte';

  
</script>
<h1>This page is currently a work in progress.</h1>
<p class=muted>Actually this entire page is a work in progress.</p>
<p class=muted>This is just the most active portion.</p>
<div id="splide-carousel">

    <Splide 
      hasTrack={ false }
      options={{
        width: "100%",
        gap: "1rem",
        perPage: 3,
        perMove: 1,
        breakpoints: {
          1024: { perPage: 2 },
          640:  { perPage: 1 }
        },
        type: 'slide',     // or 'loop'
    rewind: true,      // if using 'slide'
    arrowPath: 'M15 18l-6-6 6-6',   // thin chevron example
    classes: {
      arrows: 'splide__arrows my-arrows',
      arrow:  'splide__arrow my-arrow',
      prev:   'splide__arrow--prev my-prev',
      next:   'splide__arrow--next my-next'
    }
      }}>
      <SplideTrack>
        <SplideSlide>
          <Card
            title="Hive Tracks Case Study"
            description="Design notes and performance tweaks."
            image="/images/hivetracks.jpg"
            href="/projects/hive-tracks"
            tag="Case Study"/>
        </SplideSlide>
      
        <SplideSlide>
          <Card
            title="Svelte Blog Layout"
            description="Clean list with tiny hover accents."
            image="/images/blog-layout.jpg"
            href="/blog/layout"
            tag="Svelte" />
        </SplideSlide>
      
        <SplideSlide>
          <Card
            title="Svelte Blog Layout"
            description="Clean list with tiny hover accents."
            image="/images/blog-layout.jpg"
            href="/blog/layout"
            tag="Svelte" />
        </SplideSlide>
      
        <SplideSlide>
          <Card
            title="Svelte Blog Layout"
            description="Clean list with tiny hover accents."
            image="/images/blog-layout.jpg"
            href="/blog/layout"
            tag="Svelte" />
        </SplideSlide>
      
        <SplideSlide>
          <Card
            title="Svelte Blog Layout"
            description="Clean list with tiny hover accents."
            image="/images/blog-layout.jpg"
            href="/blog/layout"
            tag="Svelte" />
        </SplideSlide>
      </SplideTrack>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">Prev</button>
        <button class="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
</div>
