<script lang="ts">
    export let title: string;
    export let description = '';
    export let image = '';
    export let href = '#';
    export let alt = '';
    export let tag = '';
    export let stack = '';
    export let githubUrl = '';
</script>

<article class="card project-card">
    <a class="card-stretch-link" href={href} aria-label={`Open ${title} on the projects page`}></a>

    {#if image}
        <div class="media">
            <img src={image} alt={alt || `${title} preview image`} loading="lazy" />
        </div>
    {/if}

    <div class="card-body">
        <div class="card-top-row">
            <h1>{title}</h1>

            {#if githubUrl}
                <a
                    class="github-link"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${title} on GitHub`}
                >
                    GitHub
                </a>
            {/if}
        </div>

        {#if description}
            <p class="muted">{description}</p>
        {/if}

        {#if stack}
            <p class="stack">{stack}</p>
        {/if}

        {#if tag}
            <div class="footer"><span class="tag">{tag}</span></div>
        {/if}
    </div>
</article>
