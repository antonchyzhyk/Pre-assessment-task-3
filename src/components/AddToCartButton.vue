<template>
  <el-button
    :icon="IconCart"
    type="primary"
    size="large"
    :loading
    @click="$emit('add-to-cart')"
  >
    <el-badge :value="1" :offset="[10, 2]">
      Add to Cart
    </el-badge>
  </el-button>
</template>

<script lang="ts" setup>
import IconCart from '~icons/icon/cart'

defineProps<{
  loading: boolean
}>()

defineEmits(['add-to-cart'])
</script>
