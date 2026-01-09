<template>
  <div class="max-w-[800px]">
    <p class="text-brand-800 text-base font-normal">
      {{ description.length ? description : 'There is no description for this product.' }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  description: string
}>()
</script>
