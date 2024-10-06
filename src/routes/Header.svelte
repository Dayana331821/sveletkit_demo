<script>
	import { page } from '$app/stores';
</script>

<ul>
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
    <a href="/">Home</a>
    </li>
    <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <a href="/">about</a>
        </li>
    <li aria-current={$page.url.pathname === '/recipes' ? 'page' : undefined}>
        <a href="/recipes">Reciepe</a>
        </li>

</ul>