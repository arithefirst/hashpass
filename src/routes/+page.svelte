<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import { enhance } from '$app/forms';
</script>

<main class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-black p-8">
  <form method="POST" use:enhance>
    <div class="flex flex-col items-start justify-center">
      <FormInput type="url" fieldName="Website" placeholder="www.example.com" />
      <FormInput type="text" fieldName="Username" placeholder="janedoe1970" />
      <FormInput type="password" fieldName="Master Password" placeholder="password123" />
      <FormInput type="number" fieldName="Character Limit" placeholder="16" />

      <button
        class="mx-auto mt-2 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3
        font-medium leading-none text-white shadow-md hover:opacity-75"
      >
        Show toast
      </button>
    </div>
  </form>
</main>
