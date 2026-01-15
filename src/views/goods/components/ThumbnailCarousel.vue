<template>
  <div
    ref="containerRef"
    class="carousel flex gap-2 md:gap-[18px] overflow-x-auto snap-x snap-mandatory scroll-smooth w-full"
  >
    <button
      v-for="(image, index) in images"
      :key="index"
      class="carousel-item group flex-shrink-0 snap-start md:snap-align-none p-[12px]
             w-[66px] h-[66px] md:w-[100px] md:h-[100px] flex items-center justify-center
             rounded-xl overflow-hidden border border-neutral-100 transition-all duration-200
             bg-neutral hover:border-secondary-600 hover:bg-neutral-200"
      :class="[
        selectedIndex === index
          ? 'border-secondary-600 !bg-neutral-200 border-[1.5px]'
          : 'border-transparent'
      ]"
      @click="handleSelect(index)"
    >
      <el-image
        :src="image"
        fit="contain"
        class="w-full h-full pointer-events-none group-hover:scale-[1.01] transition-all duration-200"
        loading="lazy"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  images: string[]
  selectedIndex: number
}>()

const emit = defineEmits<{
  select: [index: number]
}>()

const containerRef = useTemplateRef('containerRef')

function handleSelect (index: number) {
  emit('select', index)
  scrollIntoView(index)
}

function scrollIntoView (index: number) {
  if (!containerRef.value) return

  const thumbnails = containerRef.value.querySelectorAll('.carousel-item')
  const thumbnail = thumbnails[index] as HTMLElement

  if (thumbnail) {
    thumbnail.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}

defineExpose({
  scrollIntoView
})
</script>

<style scoped>
.carousel {
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}

@media (max-width: 768px) {
  .carousel {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }
}
</style>

