<template>
  <el-button
    plain
    :icon="IconLike"
    :loading="loading"
    :class="{ 'is-liked': isLiked }"
    class="like-button h-[44px] aspect-square text-[24px] border-brand-800 hover:text-secondary-600 text-brand-800"
    @click.stop="$emit('toggle-like')"
  />
</template>

<script lang="ts" setup>
import IconLike from '~icons/icon/like'

withDefaults(defineProps<{
  isLiked?: boolean
  loading?: boolean
}>(), {
  isLiked: false,
  loading: false
})

defineEmits(['toggle-like'])
</script>

<style lang="scss" scoped>
.like-button {

  &.is-liked {
    @apply border-brand-800 text-danger;
  }
}
</style>
