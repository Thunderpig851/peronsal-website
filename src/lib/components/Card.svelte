<script lang="ts">
    export let title: string;
    export let description: string;
    export let image = ''; // URL
    export let href = '#';
    export let alt = '';
    export let tag = '';
    export let link = ''; // URL
    export let stack: string[] = [];
</script>

<article class="card">
    {#if image}
        <a class="media" href={href} aria-label={title}>
            <img src="image" alt={alt} loading="lazy" />
        </a>
    {/if}
    <div class="card-body">
        <h1><a class="link" href={href}>{title}</a></h1>
        {#if description}
            <h3 class="muted">{description}</h3>
        {/if}
        {#if stack}
            <ul>
                {#each stack as item}
                <li>{item}</li>
                {/each}
            </ul>
        {/if}
        {#if tag}
            <div class="footer"><span class="tag">{tag}</span></div>
        {/if}
    </div>
</article>