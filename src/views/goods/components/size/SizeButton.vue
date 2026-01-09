<template>
  <el-button
    plain
    class="size-button w-full rounded-[8px]"
    :class="{ 'is-selected': isSelected }"
    :disabled="disabled"
    @click="handleClick"
  >
    <span :class="{ 'line-through': disabled }">
      {{ label }}
    </span>
  </el-button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string | number
  value: string | number
  isSelected?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  select: [value: string | number]
}>()

function handleClick () {
  if (!props.disabled) {
    emit('select', props.value)
  }
}
</script>

<style lang="scss" scoped>
.size-button {
  &.is-selected {
    --el-button-bg-color: theme('colors.neutral-200');
    --el-button-border-color: theme('colors.secondary-600');
    --el-button-text-color: theme('colors.brand-800');
    --el-button-hover-bg-color: theme('colors.neutral-200');
    --el-button-hover-border-color: theme('colors.secondary-600');

    @apply border-[1.5px] text-black;
  }
}
</style>
