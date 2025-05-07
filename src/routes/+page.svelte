<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import WelcomeBanner from '$lib/components/home/WelcomeBanner.svelte';
    import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
    import type { Project, Blog } from '../types/data';
	import FeaturedBlogs from '$lib/components/home/FeaturedBlogs.svelte';
    
    export let data: { 
        projects: Project[],
        blogs: Blog[]
    }
</script>

<PageHeader pageTitle="Home"/>

<main class="mx-16">
    <WelcomeBanner />
    <FeaturedProjects projectData={{projects: data.projects}} />
    <FeaturedBlogs blogData={{blogs: data.blogs}}/>
</main>