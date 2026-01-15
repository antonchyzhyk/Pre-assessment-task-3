<template>
  <div class="sticky bottom-0 px-[16px] py-[24px] w-full bg-white z-10">
    <div class="flex gap-3">
      <AddToCartButton
        class="flex-1"
        :loading="addToCartLoading"
        :quantity="cartQuantity"
        @add-to-cart="$emit('add-to-cart')"
      />

      <GoodsCompareButton @toggle-compare="$emit('toggle-compare')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  addToCartLoading: boolean
  cartQuantity: number
}>()

defineEmits(['add-to-cart', 'toggle-compare'])
</script>
