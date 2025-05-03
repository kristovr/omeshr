<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import WelcomeBanner from '$lib/components/home/WelcomeBanner.svelte';
    import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
    export let data: { projects: Array<{id: number; name: string; category: string; description: string; technologies: string[]; liveDemo: string; sourceCode: string; featuredImage:string; featured: boolean;}>}
</script>

<PageHeader pageTitle="Home"/>

<main class="mx-16">
    <WelcomeBanner />
    <FeaturedProjects projectData={data} />
    <section class="grid grid-flow-col grid-rows-3">
        <div>
            <h2>Heading</h2>
            <button>Button</button>
        </div>
        <div>Subtitle</div>
        <div>Cards</div>
    </section>
</main>