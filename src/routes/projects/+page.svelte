<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/splide/css';

  type Project = {
    slug: string;
    title: string;
    description: string;
    technicalWriting: string[];
    github: string;
    websiteHref?: string;
    stack: string[];
  };

  const projects: Project[] = [
    {
      slug: 'leyline',
      title: 'Leyline',
      description:
        'Leyline is a tabletop play app for running card-based games online. It brings room setup, video, shared tools, and game state into one place so remote sessions are easier to manage.',
      technicalWriting: [
        'Socket.IO drives the realtime game layer: room membership, player actions, and shared table updates are sent as events so every client sees the same session state during live play.',
        'mediasoup is used as the SFU for video, keeping media routing separate from card and table logic. That separation matters because video transport and game-state updates fail, scale, and debug differently.',
        'The card inspection flow is built around an AI-enhanced on-click identification service, letting players request card metadata from the table without blocking the main React interface.'
      ],
      github: 'https://github.com/Thunderpig851/Leyline',
      websiteHref: 'https://www.ley-line.dev',
      stack: ['React', 'Socket.IO', 'MongoDB', 'mediasoup', 'SFU']
    },
    {
      slug: 'lit-hub',
      title: 'Lit-Hub',
      description:
        'Lit-Hub is a React-based reading project for public-domain books. The idea is simple: browse works, keep your place, and adjust the reading experience with color-blind and accessibility options.',
      technicalWriting: [
        'The React reading interface is built around accessibility-first controls: text-to-speech, translation, color-blind display modes, and reader preferences are part of the core reading flow.',
        'Dexie and Workbox support an offline-first library experience by caching selected books and reading state, so users can keep access to their library when network conditions are unreliable.',
        'The Express and MongoDB backend supports account-backed library state, while Bcrypt and JSON Web Tokens protect user authentication and saved reading data.'
      ],
      github: 'https://github.com/Blue-Ocean-Koi-Fish',
      stack: ['React', 'Express', 'Dexie', 'MongoDB', 'Workbox']
    },
    {
      slug: 'supernova-expansion',
      title: 'Supernova Expansion',
      description:
        'Supernova Expansion is backend work focused on making a growing platform hold up under more traffic. The main concerns are API behavior, performance, deployment, and day-to-day maintenance.',
      technicalWriting: [
        'The first performance pass focused on Node route behavior and database access patterns, establishing a 500 request-per-second baseline on high-traffic product routes.',
        'The service was scaled horizontally behind Nginx, raising tested throughput to more than 4,900 requests per second on the same routes.',
        'Loader.io testing was used to validate the expansion under load, with observed error rates kept below 0.1% at 5,000+ requests per second.'
      ],
      github: 'https://github.com/supernova-backend',
      stack: ['Node.js', 'Performance', 'Nginx']
    }
  ];

</script>

<svelte:head>
  <title>Projects | Cameron Estep</title>
</svelte:head>

<div id="projects-page">
  <div class="projects-copy">
    <h1>Projects</h1>
  </div>

  <section id="projects-carousel" aria-labelledby="projects-carousel-heading">
    <h2 id="projects-carousel-heading" class="visually-hidden">Featured projects carousel</h2>

    <Splide
      hasTrack={false}
      options={{
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true,
        drag: true,
        rewind: true,
        speed: 500,
        easing: 'ease',
        type: 'slide'
      }}
    >
      <SplideTrack>
        {#each projects as project}
          <SplideSlide>
            <section id={project.slug} class="project-detail-panel">
              <div class="project-detail-panel__intro">
                <p class="project-detail-panel__eyebrow">Project</p>
                <h2>{project.title}</h2>

                <ul class="project-stack-list" aria-label={`${project.title} technologies`}>
                  {#each project.stack as item}
                    <li>{item}</li>
                  {/each}
                </ul>

                <div class="project-detail-panel__actions">
                  <a class="btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  {#if project.websiteHref}
                    <a class="btn btn-secondary" href={project.websiteHref}>Project page</a>
                  {/if}
                </div>
              </div>

              <div class="project-detail-panel__body">
                <p class="muted project-detail-panel__summary">{project.description}</p>

                <div class="project-technical-writing">
                  <h3>Technical notes</h3>
                  <ul>
                    {#each project.technicalWriting as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            </section>
          </SplideSlide>
        {/each}
      </SplideTrack>
    </Splide>
  </section>
</div>
