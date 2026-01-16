<template>
  <el-tooltip
    :disabled="isInStock"
    content="Sold out"
    placement="bottom"
    :show-arrow="false"
    effect="dark"
  >
    <button
      type="button"
      class="relative bg-neutral border border-neutral-100 rounded-lg p-[12px] sm:w-[100px]
             sm:h-[70px] w-[65px] h-[60px] transition-all group overflow-hidden"
      :class="{
        'border-[1.5px] border-secondary-600 bg-neutral-200': isSelected,
        'cursor-not-allowed opacity-50': !isInStock,
        'hover:border-secondary-600 hover:bg-neutral-200 cursor-pointer': isInStock && !isSelected
      }"
      :disabled="!isInStock"
      @click="handleClick"
    >
      <el-image
        :src="thumbnail"
        alt="goods image"
        fit="contain"
        class="w-full h-full pointer-events-none"
        :class="{ 'group-hover:scale-[1.01] transition-all duration-200': isInStock,
                  'opacity-50': !isInStock
        }"
      />

      <div
        v-if="!isInStock"
        class="absolute inset-0 bg-slate-gray-50 rounded-lg pointer-events-none"
      />
    </button>
  </el-tooltip>
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

