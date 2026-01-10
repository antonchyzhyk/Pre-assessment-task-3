<template>
  <div class="flex flex-col gap-4">
    <div
      class="relative bg-neutral-50 border border-neutral-100 rounded-xl
            overflow-hidden flex items-center justify-center cursor-zoom-in transition-all duration-200"
      @click="openPreview"
    >
      <transition name="fade" mode="out-in">
        <el-image
          :key="selectedIndex"
          :src="selectedImage"
          fit="contain"
          class="w-full aspect-square flex items-center justify-center pointer-events-none"
        />
      </transition>

      <div class="absolute top-3 right-3">
        <LikeButton
          v-if="isMobile"
          :is-liked="props.isLiked"
          :loading="props.likeLoading"
          @toggle-like="$emit('toggle-like')"
        />
      </div>
    </div>

    <ThumbnailCarousel
      ref="mainCarouselRef"
      :images="images"
      :selected-index="selectedIndex"
      @select="selectImage"
    />

    <el-image-viewer
      v-if="showPreview"
      ref="imageViewerRef"
      :url-list="images"
      :initial-index="selectedIndex"
      :zoom-rate="1.2"
      :max-scale="2"
      :min-scale="0.5"
      @close="closePreview"
      @switch="onPreviewSwitch"
    >
      <template #toolbar>
        <ThumbnailCarousel
          ref="toolbarCarouselRef"
          :images="images"
          :selected-index="selectedIndex"
          @select="selectImageFromToolbar"
        />
      </template>
    </el-image-viewer>
  </div>
</template>

<script lang="ts" setup>
import type { ImageViewerInstance } from 'element-plus'
import ThumbnailCarousel from './ThumbnailCarousel.vue'
import { useScreenBreakpoints } from '@/composables/useScreenBreakpoints'

const props = withDefaults(defineProps<{
  images: string[]
  initialIndex?: number
  isLiked?: boolean
  likeLoading?: boolean
}>(), {
  initialIndex: 0,
  isLiked: false,
  likeLoading: false
})

defineEmits(['toggle-like'])

const mainCarouselRef = useTemplateRef('mainCarouselRef')
const toolbarCarouselRef = useTemplateRef('toolbarCarouselRef')

const { isMobile } = useScreenBreakpoints()

const selectedIndex = ref(props.initialIndex)
const showPreview = ref(false)

const imageViewerRef = ref<ImageViewerInstance | null>(null)

const selectedImage = computed(() => props.images[selectedIndex.value])

function selectImage (index: number) {
  selectedIndex.value = index
  mainCarouselRef.value?.scrollIntoView(index)
}

function selectImageFromToolbar (index: number) {
  selectedIndex.value = index

  imageViewerRef.value?.setActiveItem(index)
  toolbarCarouselRef.value?.scrollIntoView(index)
}

function openPreview () {
  showPreview.value = true
}

function closePreview () {
  showPreview.value = false
}

function onPreviewSwitch (index: number) {
  selectedIndex.value = index
  toolbarCarouselRef.value?.scrollIntoView(index)
  mainCarouselRef.value?.scrollIntoView(index)
}
</script>

