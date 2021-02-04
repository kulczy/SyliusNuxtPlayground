<template>
  <button
    type="button"
    class="inline-block bg-gray-200 py-3 px-6 rounded hover:bg-gray-300"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['value']
};
</script>
