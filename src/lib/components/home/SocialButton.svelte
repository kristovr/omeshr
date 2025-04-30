<script lang="ts">
    export let href: string = "#";
    export let title: string = '';
    export let icon: any = null;
    export let bgColor: string = 'bg-brand';
    export let hoverColor: string = 'hover:bg-slate-100';
    export let className: string = '';
    // fix client side unvalidated url redirection
</script>

<button class={`transition duration-200 ease-in-out ${bgColor} ${hoverColor} p-3 rounded shadow-md ${className}`}>
    <a href={href} title={title}>
        {#if icon}
            <svelte:component this={icon} color="#1A1A1A" />
        {/if}
    </a>
</button>