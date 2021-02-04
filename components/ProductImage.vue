<template>
  <div class="image">
    <img :src="src" :alt="alt" class="rounded" />
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: ['src', 'alt']
};
</script>

<style>
.image {
  @apply bg-gray-100;
  @apply rounded;
  aspect-ratio: 3/4;
}
</style>
