<template>
  <div>
    <div class="text-4xl font-bold mb-10">{{ $t('latestProducts') }}</div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div
        v-for="product in products['hydra:member']"
        :key="product.code"
        class="mb-4"
      >
        <ProductCard
          :title="product.translations[$i18n.locale].name"
          :image="`${product.images[0].path}`"
          :url="localePath(`/product/${product.code}`)"
          :price="product.variants[0].channelPricings.FASHION_WEB.price | price"
        />
      </div>
    </div>
    <div class="text-center">
      <FormButton value="More" type="link" :url="localePath('/products/1')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: []
    };
  },

  async asyncData({ $axios, params }) {
    const products = await $axios.$get(
      `/api/v2/shop/products?itemsPerPage=4&page=1`
    );

    return { products };
  }
};
</script>
