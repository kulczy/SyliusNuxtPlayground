<template>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div
        v-for="product in products['hydra:member']"
        :key="product.code"
        class="mb-4"
      >
        <ProductCard
          :title="product.translations.en_US.name"
          :image="
            `https://master.demo.sylius.com/media/image/${product.images[0].path}`
          "
          :url="`/product/${product.code}`"
          :price="product.variants[0].channelPricings.FASHION_WEB.price | price"
        />
      </div>
    </div>
    <Pagination url="/products/" :pages="totalPages" />
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [],
      totalPages: null
    };
  },

  async asyncData({ $axios, params }) {
    const itemsPerPage = 12;
    const products = await $axios.$get(
      `/api/v2/shop/products?itemsPerPage=${itemsPerPage}&page=${params.page}`
    );
    const totalPages = Math.ceil(products['hydra:totalItems'] / itemsPerPage);

    return { products, totalPages };
  }
};
</script>
