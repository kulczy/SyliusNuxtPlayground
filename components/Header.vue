<template>
  <div class="border-b py-2">
    <div class="container mx-auto flex items-center justify-between">
      <div class="logo">
        <NuxtLink :to="localePath('index')"><Logo /></NuxtLink>
      </div>
      <div class="flex gap-10">
        <NuxtLink :to="localePath('/products/1')">
          {{ $t('products') }}
        </NuxtLink>
        <div>
          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  width: 10rem;
  height: auto;
}
</style>
