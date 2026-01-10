<template>
  <button
    type="button"
    class="bg-neutral border border-neutral-100 rounded-lg p-[16px] sm:w-[100px]
     sm:h-[70px] w-[65px] h-[60px] transition-all group"
    :class="{
      'border-[1.5px] border-secondary-600 bg-neutral-200': isSelected,
      'opacity-50 cursor-not-allowed': !isInStock,
      'hover:border-secondary-600 hover:bg-neutral-200 cursor-pointer': isInStock && !isSelected
    }"
    :disabled="!isInStock"
    @click="handleClick"
  >
    <el-image
      :src="thumbnail"
      fit="contain"
      class="w-full h-full pointer-events-none group-hover:scale-[1.01] transition-all duration-200"
    />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  thumbnail: string
  isSelected: boolean
  isInStock: boolean
}>()

const emit = defineEmits<{
  select: []
}>()

function handleClick () {
  if (props.isInStock) {
    emit('select')
  }
}
</script>

