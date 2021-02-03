<template>
  <div>
    <div class="text-2xl mb-6">{{ translations.name }}</div>
    <div class="mb-6">{{ translations.description }}</div>
    <div class="mb-6">
      <div v-for="(variant, i) in product.variants" :key="variant.code">
        {{ variants[i].translations.en_US.name }} - Price:
        <!-- TODO Wrong prices -->
        {{ variant.channelPricings.FASHION_WEB.price / 100 }}
      </div>
    </div>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
      translations: {},
      variants: []
    };
  },

  async asyncData({ $axios, params }) {
    const base = 'https://master.demo.sylius.com';

    const product = await $axios.$get(
      `${base}/api/v2/shop/products/${params.slug}`
    );

    const translations = await $axios.$get(
      `${base}${product.translations.en_US['@id']}`
    );

    const variants = await Promise.all(
      product.variants.map(item => {
        return $axios.$get(`${base}${item['@id']}`);
      })
    );

    return { product, translations, variants };
  }
};
</script>
