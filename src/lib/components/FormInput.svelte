<script lang="ts">
  interface props {
    fieldName: string;
    placeholder: string;
    type: 'url' | 'text' | 'number' | 'password';
  }

  const { fieldName, placeholder, type }: props = $props();
</script>

<label for={fieldName.toLowerCase().replace(' ', '')} class="mb-0.5 mt-0.5 font-medium text-black">
  <span>{fieldName}</span>
</label>
<input
  {type}
  id={fieldName.toLowerCase().replace(' ', '')}
  name={fieldName.toLowerCase().replace(' ', '')}
  class="mb-0.5 h-10 w-[240px] rounded-md border-[1px] border-black bg-white px-3 py-2 text-black"
  {placeholder}
/>
