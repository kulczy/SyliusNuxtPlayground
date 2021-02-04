<template>
  <div class="image">
    <img :src="base + src" :alt="alt" class="rounded" />
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    base: {
      type: String,
      default: 'https://master.demo.sylius.com/media/image/'
    },
    src: {
      type: String
    },
    alt: {
      type: String
    }
  }
};
</script>

<style>
.image {
  @apply bg-gray-100;
  @apply rounded;
  aspect-ratio: 3/4;
}
</style>
