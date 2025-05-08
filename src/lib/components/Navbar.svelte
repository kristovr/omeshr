<script lang="ts">
	import { Icon, Moon, Bars3 } from 'svelte-hero-icons';
	let showMenu: boolean = false;

	function toggleMobileNavBar(): void {
		showMenu = !showMenu;
	}

	function closeMobileNavBar(): void {
		showMenu = false;
	}
</script>

<nav>
	<div class="grid lg:grid-cols-3 lg:gap-4">
		<a href="/" class="m-6">
			<img class="w-14" src="/images/omeshr-logo.svg" alt="logo" srcset="">
		</a>
		<ul class="hidden lg:grid lg:grid-cols-4 justify-items-center items-center p-4">
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
        <div class="flex justify-end m-6 gap-6">
            <a href="#top" class="hidden lg:block xl:block bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded">Hire Me</a>
		    <button type="button" class="hidden lg:block xl:block bg-brand p-1 rounded">
				<Icon src="{Moon}" size="32" outline/>
			</button>
			<button type="button" class="flex xl:hidden lg:hidden bg-brand p-1 rounded" on:click={toggleMobileNavBar}>
				<Icon src="{Bars3}" size="32" outline/>
			</button>
        </div>
	</div>
	<div class="{showMenu ? 'grid' : 'hidden'}">
		<h1>Hi</h1>
	</div>
</nav>