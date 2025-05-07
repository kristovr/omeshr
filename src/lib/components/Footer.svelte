<script lang="ts">
    import Github from '@lucide/svelte/icons/github';
    import Linkedin from '@lucide/svelte/icons/linkedin';
    import BicepsFlexed from '@lucide/svelte/icons/biceps-flexed';
    import SocialButton from '$lib/components/home/SocialButton.svelte';
    import { githubUrl, linkedinUrl } from '../../data/socialUrls';
</script>

<footer class="mx-6 mt-20">
    <div class="grid grid-flow-col grid-rows-2 gap-1">
        <div class="grid grid-cols-3">
            <div class="inline-flex justify-items-center items-center gap-4">
                <a href="/" class="">
                    <img class="w-14 h-auto" src="/images/omeshr-logo.svg" alt="logo" srcset="">
                </a>
                <h4 class="text-xl font-medium">Omesh Ramlagan</h4>
            </div>
            <ul class="inline-flex justify-items-center items-center justify-evenly">
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
            <div class="inline-flex items-center justify-end">
                <SocialButton href={githubUrl} title="Github" icon={Github} />
                <SocialButton href={linkedinUrl} title="LinkedIn" icon={Linkedin} className="ml-2"/>
            </div>  
        </div>
        <div class="grid grid-cols-1 items-center justify-items-end">
            <div class="inline-flex items-center gap-4">
                <p class="inline-flex gap-1">Made with <span><BicepsFlexed fill="#E6F0FF"/></span> by yours truly</p>
                <a href="#top" class="text-primary hover:underline">Hire Me</a>
            </div>
        </div>
    </div>
</footer>