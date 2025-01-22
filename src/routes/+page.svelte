<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import { enhance } from '$app/forms';
  import { createLabel, melt } from '@melt-ui/svelte';

  const {
    elements: { root },
  } = createLabel();
</script>

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
