<template>
  <el-button
    plain
    class="size-button"
    :class="{
      'is-selected': isSelected,
      'opacity-50': disabled
    }"
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
    @apply bg-neutral-200 border-secondary-600 text-black border-[1.5px]
     hover:bg-neutral-200 hover:border-secondary-600;
  }
}
</style>

