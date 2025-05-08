<script lang="ts">
    import Github from '@lucide/svelte/icons/github';
    import Linkedin from '@lucide/svelte/icons/linkedin';
    import CircleArrowRight from '@lucide/svelte/icons/circle-arrow-right';
    import SocialButton from './SocialButton.svelte';
    import { githubUrl, linkedinUrl } from '../../../data/socialUrls';
</script>

<section class="grid grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 sm:justify-items-center">
    <div class="lg:col-span-2 md:col-span-1 sm:col-span-1 flex justify-items-center items-center">
        <div>
            <h3 class="lg:text-3xl md:text-2xl sm:text-xl text-brand-heading">Hello, I'm</h3>
            <h1 class="lg:text-8xl md:text-6xl sm:text-4xl font-medium text-brand-heading">Omesh Ramlagan</h1>
            <h2 class="lg:text-6xl md:text-2xl sm:text-xl text-primary lg:mt-4 md:mt-2 mt:1">Software Developer</h2>
            <div class="flex flex-wrap gap-4 lg:mt-6 md:mt-4 sm:mt-2 mt-1">
                <a href="/about" class="bg-primary lg:text-2xl md:text-xl sm:text-md transition duration-200 ease-in-out hover:bg-blue-700 text-white rounded py-2 px-4 inline-flex shadow-md">
                    Get to know me<span class="inline-flex ml-2"><CircleArrowRight size=32 class="lg:block md:block hidden"/></span>
                </a>
                <div>
                    <SocialButton href={githubUrl} title="Github" icon={Github} />
                    <SocialButton href={linkedinUrl} title="LinkedIn" icon={Linkedin} className="ml-2"/>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:col-span-1 md:col-span-1 sm:col-span-1 flex justify-items-center items-center">
        <img src="images/me.jpeg" alt="Omesh Ramlagan" class="lg:h-3/4 md:h-2/3 sm:h-4/5 h- w-auto rounded-full outline outline-8 outline-brand outline-offset-2 shadow-2xl">
    </div>
</section>