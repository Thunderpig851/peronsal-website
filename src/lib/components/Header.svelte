<script lang="ts">

  import { page } from "$app/stores";

  type NavLink = { href: string; name: string};
  const links: NavLink[] = 
  [ 
        {href: "/", name: "Home"},
        {href: "/projects",  name: "Projects"},
        {href: "/resume", name: "Resume"}
  ];
  
  $: current = $page.url.pathname;

</script>

<header class="site">
  <div class="container nav">

    <nav aria-label="Primary" class="primary-destop">
      <ul class="primary-desktop">
        {#each links as link}
          <li>
            <a class="link" href={link.href}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>