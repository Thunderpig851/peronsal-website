<script lang="ts">
  import "$lib/styles/app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main id="main" class="container">
  <slot />
</main>

<Footer />


