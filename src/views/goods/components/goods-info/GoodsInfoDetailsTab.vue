<template>
  <div class="w-full">
    <p class="text-brand-800 text-base font-normal">
      {{ details.length ? details : 'There is no details for this product.' }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  details: string
}>()
</script>
