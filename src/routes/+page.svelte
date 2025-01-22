<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import { enhance } from '$app/forms';
  import { createLabel, createToaster, melt } from '@melt-ui/svelte';
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';
  import type { PageData, ActionData } from './$types';

  interface ToastData {
    title: string;
    description: string;
    color: string;
  }

  interface props {
    data: PageData;
    form: ActionData;
  }

  const { data, form }: props = $props();

  const {
    elements: { content, title, description, close },
    helpers: { addToast },
    states: { toasts },
    actions: { portal },
  } = createToaster<ToastData>();

  function createToast() {
    addToast({
      data: {
        title: 'boo'!,
        description: 'This toast is scary!',
        color: 'bg-green-500',
      },
    });
  }

  const {
    elements: { root },
  } = createLabel();
</script>

<button
  class="fixed left-2 top-2 inline-flex items-center justify-center rounded-xl
  bg-black px-4 py-3 font-medium leading-none text-white shadow-md hover:opacity-75"
  onclick={createToast}
>
  Bake Toast
</button>

<main class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-black p-8">
  <form method="POST" use:enhance>
    <div class="flex flex-col items-start justify-center">
      <FormInput type="url" fieldName="Website" placeholder="www.example.com" />
      <FormInput type="text" fieldName="Username" placeholder="janedoe1970" />
      <FormInput type="password" fieldName="Master Password" placeholder="password123" />
      <FormInput type="number" fieldName="Character Limit" placeholder="16" />

      <!-- Hashes Dropdown -->
      <label use:melt={$root} for="hashtype" class="mb-0.5 mt-0.5 font-medium text-black" data-melt-part="root">
        <span>Hash Type</span>
      </label>
      <select id="hashtype" name="hashtype" class="mb-0.5 h-10 w-[240px] rounded-md border-[1px] border-black bg-white px-3 py-2 text-black">
        <option value="sha256">SHA-256</option>
        <option value="sha512">SHA-512</option>
        <option>bcrypt</option>
        <option value="md5">MD5</option>
      </select>
      <button
        class="mx-auto mt-2 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3
        font-medium leading-none text-white shadow-md hover:opacity-75"
      >
        Generate Password
      </button>
    </div>
  </form>
</main>

<div class="fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-0 md:top-auto" use:portal>
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      animate:flip={{ duration: 500 }}
      in:fly={{ duration: 150, x: '100%' }}
      out:fly={{ duration: 150, x: '100%' }}
      class="rounded-lg bg-neutral-200 text-black shadow-md"
    >
      <div class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5">
        <div>
          <h3 use:melt={$title(id)} class="flex items-center gap-2 font-semibold">
            {data.title}
            <span class="size-1.5 rounded-full {data.color}"></span>
          </h3>
          <div use:melt={$description(id)}>
            {data.description}
          </div>
        </div>
        <button
          use:melt={$close(id)}
          class="absolute right-4 top-4 grid size-6 place-items-center rounded-full bg-opacity-50
          text-red-500 hover:bg-red-300"
        >
          X
        </button>
      </div>
    </div>
  {/each}
</div>
