<template>
  <slot :data />
</template>

<script setup lang="ts" generic="T">
defineProps<{
  data: T
}>()
</script>
