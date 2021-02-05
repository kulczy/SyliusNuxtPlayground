<template>
  <NuxtLink
    v-if="type == 'link'"
    :to="url"
    class="inline-block bg-gray-200 py-3 px-6 rounded hover:bg-gray-300"
  >
    {{ value }}
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="inline-block bg-gray-200 py-3 px-6 rounded hover:bg-gray-300"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['value', 'type', 'url']
};
</script>
