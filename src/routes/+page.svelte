<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import WelcomeBanner from '$lib/components/home/WelcomeBanner.svelte';
    //I want to store some dummy data to use in this file to loop through some data. Where should I store it in this folder structure?
</script>

<PageHeader pageTitle="Home"/>

<main class="mx-16">
    <WelcomeBanner />
    <section class="grid grid-flow-col grid-rows-3">
        <div class="flex justify-center">
            <h2 class="text-3xl">Explore My Popular Projects</h2>
        </div>
        <div>Cards</div>
        <div>Button</div>
    </section>
    <section class="grid grid-flow-col grid-rows-3">
        <div>
            <h2>Heading</h2>
            <button>Button</button>
        </div>
        <div>Subtitle</div>
        <div>Cards</div>
    </section>
</main>