<script lang="ts">
  import { createAccordion, melt } from '@melt-ui/svelte';
  import { slide } from 'svelte/transition';
  import Down from '$lib/icons/down.svelte';

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: '',
  });

  const items = [
    {
      id: 'item-1',
      title: 'What is HashPass?',
      description:
        'HashPass is a no-storage password managment solution, where everything happens without logs or any info saved. It works ' +
        'by using the information you put into it to generate a secure password that can be reproduced on any instance of HashPass ' +
        'across the world, as long as you use the same values. First, it smashes together the domain, username, and master password. ' +
        'then, it uses a hashing algorithm of your choosing, encrypts that data, and then encodes it into base64. Finally, the password ' +
        'gets trimmed to your requested length and copied to your clipboard.',
    },
    {
      id: 'item-2',
      title: 'Where did it come from?',
      description:
        'To make a long story short, a friend of mine called <a href="https://devenison.com" class="underline">Devenison</a> ' +
        'got the idea for this kind of software from 4Chan and made it into a bash script. In the state that he found it in, ' +
        'it was just a series of commands that would output the final password in plaintext in the shell, which is obviously' +
        'not a good idea. From there, he sent it to me, and I thought it was pretty cool, and decided to turn it into a simple web GUI :D',
    },
  ];
</script>

<div class="hidden h-[35.375rem] w-96 rounded-md border-2 border-black bg-white p-8 md:block" {...$root}>
  {#each items as { id, title, description }}
    <div
      use:melt={$item(id)}
      class="overflow-hidden transition-colors first:rounded-t-xl
              last:rounded-b-xl"
    >
      <h2 class="flex">
        <button
          use:melt={$trigger(id)}
          class="flex flex-1 cursor-pointer items-center justify-between
            bg-white px-5 pt-5 text-base font-medium leading-none
            text-black transition-colors hover:bg-neutral-100 focus:!ring-0
            focus-visible:text-magnum-800"
        >
          {title}<span class="float-right"><Down /></span>
        </button>
      </h2>
      {#if $isSelected(id)}
        <div class="overflow-hidden bg-neutral-100 text-sm text-neutral-600" use:melt={$content(id)} transition:slide>
          <div class="px-5 pb-4 pt-2">
            {@html description}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
