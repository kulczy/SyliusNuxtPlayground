<template>
  <div class="border-b py-2">
    <div class="container mx-auto flex items-center justify-between">
      <div class="logo">
        <NuxtLink to="/"><Logo /></NuxtLink>
      </div>
      <div class="flex gap-10">
        <NuxtLink to="/products/1">Products</NuxtLink>
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
