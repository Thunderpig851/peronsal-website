<script lang="ts">
    export let title: string;
    export let description: string;
    export let image = ''; // URL
    export let href = '#';
    export let alt = '';
    export let tag = '';
    export let stack = "";
</script>

<article class="card">
    {#if image}
        <a class="media" href={href} aria-label={title}>
            <img src={image} alt={alt} loading="lazy" />
        </a>
    {/if}
    <div class="card-body">
        <h1><a class="link" href={href}>{title}</a></h1>
        {#if description}
            <h3 class="muted">{description}</h3>
        {/if}
        {#if stack}
            <p>{stack}</p>
        {/if}
        {#if tag}
            <div class="footer"><span class="tag">{tag}</span></div>
        {/if}
    </div>
</article>