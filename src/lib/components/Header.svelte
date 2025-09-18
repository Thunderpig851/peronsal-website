<script lang="ts">
  import { page } from "$app/stores";

  type NavLink = { href: string; name: string };
  const links: NavLink[] = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/resume", name: "Resume" }
  ];

  $: current = $page.url.pathname;
  let open = false;
  const toggle = () => (open = !open);
  const close = () => (open = false);
</script>

<header class="site">
  <div class="container nav">
    <button
      class="primary-toggle"
      aria-label="Menu"
      aria-expanded={open}
      aria-controls="primary-menu"
      on:click={toggle}
    >
      <span class="bars" aria-hidden="true"></span>
    </button>

    <nav aria-label="Primary">
      <ul id="primary-menu" class="primary-desktop" class:open={open}>
        {#each links as link}
          <li>
            <a
              class="link"
              href={link.href}
              aria-current={current === link.href ? "page" : undefined}
              on:click={close}
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
