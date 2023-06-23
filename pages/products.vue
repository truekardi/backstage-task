<template>
    <div class="container pt-4 md:pt-10">
        <main class="flex justify-center align-center flex-wrap gap-5 md:gap-10 pb-4 md:pb-10">
            <div v-for="product in products" class="text-center">
                <h2 class="text-xl font-bold pb-4">{{ product.title }}</h2>
                <img :src="product.image" :alt="product.description" :title="product.title" width="600" height="400" loading="lazy">
                <p class="text-sm py-3">{{ product.description }}</p>
                <h3 class="text-lg">{{ formatNumber(product.price) }}</h3>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

const { data: products } = await useFetch('/api/products')

function formatNumber(value: number) {
    return value.toFixed(2);
}
</script>

<style>
.container {
  @apply max-w-1440 px-4 md:px-10 m-auto;
}
</style>