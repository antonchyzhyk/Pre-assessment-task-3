<template>
  <el-button
    plain
    :icon="IconLike"
    :loading="loading"
    :class="{ 'is-liked': isLiked }"
    class="like-button h-[44px] aspect-square border-brand-800"
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
    @apply border-brand-800;
    :deep(svg path) {
      fill: var(--el-color-danger);
    }
  }

  &:not(.is-liked) {
    :deep(svg path) {
      fill: currentColor;
    }
  }
}
</style>
