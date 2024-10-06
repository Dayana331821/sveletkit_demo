<script>
    export let data
    // console.log(data)
</script>

<h1>List of Recipes</h1>
<ul>
{#if data?.recipes?.length}
    {#each data?.recipes as r}
        <li>
            <a href="/recipes/{r?.id}">
                {r?.name}
            </a>
        </li>
    {/each}
{:else}
<li>No recipes data found</li>
{/if}
</ul>