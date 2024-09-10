<script lang="ts">
import { page } from '$app/stores';

export let data
</script>

<h1>Todo{$page?.params?.id}</h1>

{#if data?.reciepe?.id}
<h2>Todo{data?.reciepe?.name}</h2>
{:else}
<h2>No reciepe found</h2>
{/if}