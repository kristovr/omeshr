<script lang="ts">
    import type { Blog } from '../../../types/data';
    export let blogData: {blogs: Blog[]};
</script>

<section class="my-20">
    <div class="flex flex-row justify-between">
        <h2 class="text-3xl">Explore My Blog</h2>
        <a href="/blog" class="bg-primary text-xl transition duration-200 ease-in-out hover:bg-blue-700 text-white rounded py-2 px-4 shadow-md">
            More Topics
        </a>
    </div>
    <div class="font-light">Cool stuff that I find interesting</div>
    <div class="grid grid-cols-3 gap-4 my-8">
        {#each blogData.blogs as blog}
            {#if blog.featured}
                <a href="#top">
                    <div class="inline-flex items-center h-5/6 w-5/6 gap-2 shadow-md rounded-md transition duration-150 ease-in-out hover:shadow-lg p-8">
                        <img src={blog.featuredImage} alt="thumbnail" srcset="" class="h-14 w-auto">
                        <h2 class="font-light">{blog.title}</h2>
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</section>