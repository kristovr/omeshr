<script lang="ts">
	import '../app.css';
	import { Navbar, PageHeader } from "$lib/components/";
	let { children } = $props();
</script>

<Navbar />

{@render children()}
