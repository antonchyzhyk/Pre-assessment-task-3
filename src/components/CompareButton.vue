<template>
  <button
    class="h-[44px] w-[44px] aspect-square rounded-lg hover:text-secondary-600 text-brand-800"
    @click="$emit('toggle-compare')"
  >
    <IconScales />
  </button>
</template>

<script lang="ts" setup>
import IconScales from '~icons/icon/scales'

defineEmits(['toggle-compare'])
</script>
