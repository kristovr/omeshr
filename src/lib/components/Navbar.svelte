<script lang="ts">
	import { Icon, Moon } from 'svelte-hero-icons';
</script>

<nav>
	<div class="flex justify-between m-6">
		<a href="#top">
			<img class="w-14" src="/images/omeshr-logo.svg" alt="logo" srcset="">
		</a>
		<ul class="flex align-middle lg:gap-x-[5vw] md:gap-x-[3vw] sm:gap-x-[1vw]">
			<li>
				<a href="top#">About</a>
			</li>
			<li>
				<a href="top#">Projects</a>
			</li>
			<li>
				<a href="top#">Blog</a>
			</li>
			<li>
				<a href="top#">Contact</a>
			</li>
		</ul>
        <div class="flex justify-evenly">
            <a href="#top" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Hire Me</a>
		    <button type="button" class="ml-4">
				<Icon src="{Moon}" size="32" solid/>
			</button>
        </div>
	</div>
</nav>