<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import { enhance } from '$app/forms';
  import { createToaster, melt } from '@melt-ui/svelte';
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';
  import { page } from '$app/state';

  interface ToastData {
    title: string;
    description: string;
    color: string;
  }

  const { form } = $props();

  const {
    elements: { content, title, description, close },
    helpers: { addToast },
    states: { toasts },
    actions: { portal },
  } = createToaster<ToastData>();

  $effect(() => {
    if (form?.success) {
      // Copy PW to clipboard and send success toast
      navigator.clipboard.writeText(form?.password!);
      addToast({
        data: {
          title: 'Success!',
          description: 'Password generated and copied to clipboard.',
          color: 'bg-green-500',
        },
      });
    } else if (!form?.success && page.status !== 200) {
      addToast({
        data: {
          title: 'Error',
          description: `An error occured while generating the password: ${(form?.e as Error).message}`,
          color: 'bg-red-500',
        },
      });
    }
  });
</script>

<svelte:head>
  <title>HashPass</title>
</svelte:head>

<main class="flex h-screen gap-2 p-4 md:absolute md:left-1/2 md:top-1/2 md:h-auto md:-translate-x-1/2 md:-translate-y-1/2 md:p-0">
  <form method="POST" use:enhance class="my-auto h-[35.375rem] w-full rounded-md border-2 border-black bg-white p-8 md:w-96">
    <h1 class="mx-3 text-lg font-bold">HashPass</h1>
    <hr class="mx-3 mb-2 border-[1px] border-black" />
    <div class="flex flex-col items-start justify-center">
      <FormInput type="url" fieldName="Website" placeholder="www.example.com" required />
      <FormInput type="text" fieldName="Username" placeholder="janedoe1970" required />
      <FormInput type="password" fieldName="Master Password" placeholder="password123" required />
      <FormInput type="number" fieldName="Character Limit" placeholder="16" />

      <!-- Hashes Dropdown -->
      <label for="hashtype" class="mx-3 my-0.5 font-medium text-black">
        <span>Hash Type</span>
      </label>
      <select
        id="hashtype"
        name="hashtype"
        class="mx-auto mb-0.5 h-10 w-11/12 rounded-md border-[1px] border-black bg-white px-3 py-2 text-black"
        required
      >
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
  <div>
    <Accordion />
  </div>
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
