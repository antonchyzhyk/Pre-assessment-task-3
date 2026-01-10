<template>
  <p class="text-brand-800 text-base font-normal">
    {{ shippingInformation }}
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  shippingInformation: string
}>()
</script>
