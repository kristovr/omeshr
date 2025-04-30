<script lang="ts">
    import Github from '@lucide/svelte/icons/github';
    import Linkedin from '@lucide/svelte/icons/linkedin';
    import CircleArrowRight from '@lucide/svelte/icons/circle-arrow-right';
</script>

<main class="mx-16">
    <section class="grid grid-flow-col grid-rows-1 my-10">
        <div class="col-span-2">
            <div>
                <h3 class="text-2xl">Hello, I'm</h3>
                <h1 class="text-6xl font-medium">Omesh Ramlagan</h1>
                <h2 class="text-4xl text-primary mt-4">Software Developer</h2>
                <div class="flex gap-4 mt-6">
                    <a href="#top" class="bg-primary transition duration-200 ease-in-out hover:bg-blue-700 text-white rounded py-2 px-4 inline-flex">
                        Get to know me<span class="inline-flex ml-2"><CircleArrowRight /></span>
                    </a>
                    <div>
                        <button class="bg-brand transition duration-200 ease-in-out hover:bg-slate-100 p-2 rounded shadow-md">
                            <a href="https://github.com/kristovr">
                                <Github />
                            </a>    
                        </button>
                        <button class="bg-brand transition duration-200 ease-in-out hover:bg-slate-100 p-2 rounded shadow-md">
                            <a href="www.linkedin.com/in/omeshr">
                                <Linkedin />
                            </a>    
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            Image
        </div>
    </section>
    <section class="grid grid-flow-col grid-rows-3">
        <div>Heading</div>
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