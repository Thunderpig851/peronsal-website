<script lang="ts">
    export let title: string;
    export let description: string;
    export let image = ''; // URL
    export let href = '#';
    export let alt = '';
    export let link = '' // URL
    export let stack: string[] = [];
</script>

<article class="card">
    {#if image}
        <a class="card-image" href={href} aria-label={title}>
            <img src="image" alt={alt} loading="lazy" />
        </a>
    {/if}
    <div class="card-body">
        {#if description}
            <h3>{description}</h3>
        {/if}
    </div>
</article>