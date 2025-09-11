<script lang="ts">

  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import { tick } from "svelte";

  type NavLink = { href: string; label: string , name: string};
  const links: NavLink[] = 
  [ 
        {href: "/", label: "home", name: "Home"},
        {href: "/projects", label: "projects", name: "Projects"},
        {href: "/contact", label: "contact", name: "Contacts"}
  ];
  
  $: current = $page.url.pathname;
  const isActive = (href: string) => current === href;

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