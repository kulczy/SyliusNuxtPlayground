<template>
  <div class="border-b py-5">
    <div class="container mx-auto flex items-center justify-between px-5">
      <div class="logo">
        <NuxtLink :to="localePath('index')"><Logo /></NuxtLink>
      </div>
      <div class="flex gap-10">
        <NuxtLink :to="localePath('index')">
          {{ $t('home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/products/1')">
          {{ $t('products') }}
        </NuxtLink>

        <div v-if="isAuthenticated" class="flex gap-10">
          <NuxtLink :to="localePath('/account')">
            {{ $t('myAccount') }}
          </NuxtLink>
          <span @click="$auth.logout()" class="cursor-pointer">Logout</span>
        </div>
        <div v-else>
          <NuxtLink :to="localePath('/login')">
            {{ $t('login') }}
          </NuxtLink>
        </div>

        <div>
          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="locale-switch border rounded p-1 text-gray-500"
          >
            {{ locale.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
};
</script>

<style scoped>
.logo {
  width: 8rem;
  height: auto;
}

.nuxt-link-exact-active:not(.locale-switch) {
  @apply text-green-500;
}
</style>
