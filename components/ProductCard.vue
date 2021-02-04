<template>
  <div>
    <div class="mb-4">
      <NuxtLink :to="url">
        <ProductImage :src="image" :alt="title" />
      </NuxtLink>
    </div>
    <NuxtLink :to="url">
      <span class="font-bold">{{ title }}</span>
    </NuxtLink>
    <div>{{ price }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['title', 'image', 'url', 'price']
};
</script>
