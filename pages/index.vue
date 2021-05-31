<template>
  <div>
    <div class="text-4xl font-bold mb-10">{{ $t('latestProducts') }}</div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div v-for="product in productsList" :key="product.code" class="mb-4">
        <ProductCard
          :title="product.translations[$i18n.locale].name"
          :image="`${product.images[0].path}`"
          :url="localePath(`/product/${product.code}`)"
          :price="product.defaultVariantDetails.price | price"
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
      productsList: []
    };
  },

  async asyncData({ $axios, params }) {
    const products = await $axios.$get(
      `/syliusapi/api/v2/shop/products?itemsPerPage=4&page=1`
    );
    const productsList = await Promise.all(
      products['hydra:member'].map(async product => {
        product.defaultVariantDetails = await $axios.$get(
          `/syliusapi${product.defaultVariant}`
        );
        return product;
      })
    );

    return { productsList };
  }
};
</script>
