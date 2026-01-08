<template>
  <div
    ref="containerRef"
    class="carousel flex gap-2 md:gap-4 overflow-x-auto justify-between
           snap-x snap-mandatory scroll-smooth w-full"
  >
    <button
      v-for="(image, index) in images"
      :key="index"
      class="carousel-item group flex-shrink-0 snap-start md:snap-align-none
             w-[64px] h-[64px] md:w-[100px] md:h-[100px]
             rounded-xl overflow-hidden border border-neutral-100 transition-all duration-200
             bg-neutral-50 hover:border-secondary-600 hover:bg-neutral-200 flex items-center justify-center"
      :class="[
        selectedIndex === index
          ? 'border-secondary-600 bg-neutral-200 shadow-md border-[1.5px]'
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

