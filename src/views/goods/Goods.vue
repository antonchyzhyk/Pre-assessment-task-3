<template>
  <div class="p-4 md:p-8 max-w-4xl mx-auto">
    <div class="max-w-[700px]">
      <ImageGallery
        :images="shoeImages"
        :is-liked="isFavorite"
        :like-loading="favoriteLoading"
        @toggle-like="handleToggleLike"
      />
    </div>

    <div class="mt-8 border-t border-gray-200 pt-8">
      <h2 class="text-lg font-semibold text-brand-800 mb-4">Other Components</h2>

      <el-button type="primary" :icon="IconCart" @click="openModal('TestModal')">
        Chinazes
      </el-button>

      <el-button size="large" type="primary">Click me</el-button>

      <el-button class="is-icon-only" type="primary" :icon="IconCart" />

      <el-tabs v-model="activeTab" class="mt-6 text-[16px]">
        <el-tab-pane
          v-for="(tab, name) in tabsConfig"
          :key="name"
          :name="name"
          :label="tab.label"
        >
          <template #label>
            <span class="text-[16px]">
              {{ tab.label }}
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>

      <div v-if="activeTab === EHrDocumentPersonnelTabs.FOLDERS" class="mt-4">
        Here is the content of the folders tab
      </div>

      <div v-if="activeTab === EHrDocumentPersonnelTabs.LIST_VIEW" class="mt-4">
        Here is the content of the list view tab
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import IconCart from '~icons/icon/cart'
import { goodsService } from './goods.service'

const { openModal } = useModals()

// Mock product ID for demo purposes
const productId = 'shoe-asis-gold-001'

const shoeImages = [
  '/src/assets/images/shoes/ASIS_GOLD_1.png',
  '/src/assets/images/shoes/ASIS_GOLD_2.png',
  '/src/assets/images/shoes/ASIS_GOLD_3.png',
  '/src/assets/images/shoes/ASIS_GOLD_4.png',
  '/src/assets/images/shoes/ASIS_GOLD_5.png',
  '/src/assets/images/shoes/ASIS_GOLD_6.png'
]

const isFavorite = ref(false)
const favoriteLoading = ref(false)

async function handleToggleLike () {
  if (favoriteLoading.value) return

  favoriteLoading.value = true

  try {
    const response = await goodsService.toggleFavorite(productId, isFavorite.value)
    isFavorite.value = response.isFavorite

    ElMessage.success(response.isFavorite ? 'Added to favorites' : 'Removed from favorites')
  } catch (error) {
    ElMessage.error(error instanceof Error ? error.message : 'Failed to update favorites')
  } finally {
    favoriteLoading.value = false
  }
}

enum EHrDocumentPersonnelTabs {
  FOLDERS = 'folders',
  LIST_VIEW = 'list-view'
}

const activeTab = ref(EHrDocumentPersonnelTabs.FOLDERS)

const tabsConfig = {
  [EHrDocumentPersonnelTabs.FOLDERS]: {
    label: 'Folders'
  },
  [EHrDocumentPersonnelTabs.LIST_VIEW]: {
    label: 'List View'
  }
}
</script>
