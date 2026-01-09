<template>
  <h1 class="sm:text-[32px] sm:leading-[40px] text-[28px] leading-[36px] font-bold mb-[16px]">
    {{ name }}
  </h1>

  <p class="flex gap-1 items-center sm:text-2xl text-[22px] leading-[28px] font-bold mb-[36px]">
    <span>{{ currency }}</span>
    {{ price }}
  </p>

  <p class="text-base font-normal text-brand-800 mb-[12px]">
    <span class="font-semibold">Colour:</span> {{ color }}
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  price: string
  currency: string
  color: string
}>()
</script>
