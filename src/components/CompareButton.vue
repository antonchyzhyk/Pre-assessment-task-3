<template>
  <button
    class="h-[44px] w-[44px] aspect-square hover:border border-brand-800 rounded-lg"
    @click="$emit('toggle-compare')"
  >
    <IconScales />
  </button>
</template>

<script lang="ts" setup>
import IconScales from '~icons/icon/scales'

defineEmits(['toggle-compare'])
</script>
