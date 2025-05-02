<script lang="ts">
    import Github from '@lucide/svelte/icons/github';
    import Linkedin from '@lucide/svelte/icons/linkedin';
    import CircleArrowRight from '@lucide/svelte/icons/circle-arrow-right';
    import SocialButton from './SocialButton.svelte';

    const githubUrl: string = "https://github.com/kristovr";
    const linkedinUrl: string = "https://www.linkedin.com/in/omeshr"
</script>

<section class="grid grid-flow-col grid-rows-1">
    <div class="col-span-2 flex justify-items-center items-center">
        <div>
            <h3 class="text-3xl text-brand-heading">Hello, I'm</h3>
            <h1 class="text-8xl font-medium text-brand-heading">Omesh Ramlagan</h1>
            <h2 class="text-6xl text-primary mt-4">Software Developer</h2>
            <div class="flex gap-4 mt-6">
                <a href="/about" class="bg-primary text-2xl transition duration-200 ease-in-out hover:bg-blue-700 text-white rounded py-2 px-4 inline-flex shadow-md">
                    Get to know me<span class="inline-flex ml-2"><CircleArrowRight size=32/></span>
                </a>
                <div>
                    <SocialButton href={githubUrl} title="Github" icon={Github} />
                    <SocialButton href={linkedinUrl} title="LinkedIn" icon={Linkedin} className="ml-2"/>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-1 flex justify-items-center items-center">
        <img src="images/me.jpeg" alt="Omesh Ramlagan" class="h-2/3 w-auto rounded-full outline outline-8 outline-brand outline-offset-2 shadow-2xl">
    </div>
</section>