<script lang="ts">
  interface props {
    fieldName: string;
    placeholder: string;
    required?: boolean;
    type: 'url' | 'text' | 'number' | 'password';
  }

  const { fieldName, placeholder, required = false, type }: props = $props();
</script>

<label for={fieldName.toLowerCase().replace(' ', '')} class="mx-3 my-0.5 font-medium text-black">
  <span>{fieldName}</span>
</label>
<input
  {type}
  id={fieldName.toLowerCase().replace(' ', '')}
  name={fieldName.toLowerCase().replace(' ', '')}
  class="mx-auto mb-0.5 h-10 w-11/12 rounded-md border-[1px] border-black bg-white px-3 py-2 text-black"
  {placeholder}
  {required}
/>
