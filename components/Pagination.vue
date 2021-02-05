<template>
  <div class="flex gap-1">
    <NuxtLink
      v-for="page in pages"
      :key="page"
      :to="localePath(`${url}${page}`)"
      class="inline-block py-2 px-3 border rounded"
    >
      {{ page }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages', 'url']
};
</script>

<style scoped>
.nuxt-link-active {
  @apply bg-gray-200;
}
</style>
