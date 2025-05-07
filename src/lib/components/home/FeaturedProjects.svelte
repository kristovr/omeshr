<script lang="ts">
    import type { Project } from '../../../types/data';
    export let projectData: {projects: Project[]};
</script>

<section class="my-10">
    <div class="flex justify-center">
        <h2 class="text-3xl mb-8">Explore My Popular Projects</h2>
    </div>
    <div class="flex flex-row justify-evenly gap-4">
        {#each projectData.projects as project}
            {#if project.featured}
                <a href="#top"> <!-- implement url from slug but first need to finish the projects page? idk-->
                    <div class="shadow-md rounded-md transition duration-150 ease-in-out hover:shadow-lg">
                        <img src={project.featuredImage} alt="Featured" class="rounded-md h-64 w-auto">
                        <div class="flex flex-col items-center py-4">
                            <h2 class="text-2xl">{project.name}</h2>
                            <h3 class="text-xl font-light">{project.category}</h3>
                        </div>
                    </div>
                </a>   
            {/if}
        {/each}
    </div>
    <div class="flex justify-center my-8">
        <a href="/projects" class="bg-primary text-xl transition duration-200 ease-in-out hover:bg-blue-700 text-white rounded py-2 px-4 shadow-md">
            More Projects
        </a>
    </div>
</section>