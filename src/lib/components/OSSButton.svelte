<script lang="ts">
  import Github from '$lib/icons/github.svelte';
  import Info from '$lib/icons/info.svelte';
  interface props {
    className?: string;
  }

  const { className = '' }: props = $props();
</script>

<div class={`flex gap-1 ${className}`}>
  <a class="rounded-lg bg-black p-2 text-white" href="https://github.com/arithefirst/hashpass" rel="noreferrer" target="_blank">
    <Github />
  </a>
  <a class="rounded-lg bg-black p-2 text-white" href="https://www.arithefirst.com" rel="noreferrer" target="_blank">
    <Info />
  </a>
</div>
