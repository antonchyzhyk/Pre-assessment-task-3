<template>
  <el-button
    :icon="IconCart"
    type="primary"
    size="large"
    :loading
    @click="$emit('add-to-cart')"
  >
    <el-badge
      :value="quantity"
      :offset="[10, 2]"
      :show-zero="false"
    >
      Add to Cart
    </el-badge>
  </el-button>
</template>

<script lang="ts" setup>
import IconCart from '~icons/icon/cart'

defineProps<{
  loading: boolean
  quantity?: number
}>()

defineEmits(['add-to-cart'])
</script>
