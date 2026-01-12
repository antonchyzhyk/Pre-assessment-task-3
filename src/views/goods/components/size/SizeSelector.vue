<template>
  <div class="space-y-[8px]">
    <div class="text-base font-bold text-brand-800">
      Size:
      <span v-if="selectedSize" class="font-normal">
        {{ selectedSize[activeTab] }} {{ activeTab.toUpperCase() }}
      </span>
      <span v-else class="text-gray-400 font-normal">
        select size below
      </span>
    </div>

    <el-tabs v-model="activeTab" class="size-tabs">
      <el-tab-pane
        v-for="(tab, name) in tabsConfig"
        :key="name"
        :name="name"
        :label="tab.label"
      >
        <template #label>
          <span class="text-sm font-medium">
            {{ tab.label }}
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>

    <transition name="fade" mode="out-in">
      <div
        :key="activeTab"
        class="grid grid-cols-5 gap-2 sm:gap-[10px]"
      >
        <div
          v-for="size in sizeService.ALL_SNEAKERS_SIZES"
          :key="size.us"
          class="w-full"
        >
          <Compute
            #="{ data: isInStock }"
            :data="isSizeInStock(size)"
          >
            <SizeButton
              class="w-full"
              :label="size[activeTab]"
              :value="size.us"
              :is-selected="selectedSize?.us === size.us"
              :disabled="!isInStock"
              @select="handleSizeSelect(size)"
            />
          </compute>
        </div>
      </div>
    </transition>

    <span class="flex justify-end mt-[8px]">
      <button
        class="text-sm font-normal text-brand-500 hover:text-secondary-600"
        @click="openModal('SizeGuideModal')"
      >
        Size guide
      </button>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useModals } from '@/composables/useModals'
import { sizeService } from '../../size.service'

const props = defineProps<{
  availableSizes: IShoeSize[]
}>()

const selectedSize = defineModel<IShoeSize | null>('selectedSize', { required: true })

const { openModal } = useModals()

const tabsConfig: Record<TSizeSystem, { label: string }> = {
  uk: { label: 'UK' },
  us: { label: 'US' },
  eu: { label: 'EU' },
  cm: { label: 'Foot Length (cm)' }
}

const activeTab = ref<TSizeSystem>('uk')

const availableUsSizes = computed<number[]>(() => props.availableSizes.map(size => size.us))

function isSizeInStock (size: IShoeSize) {
  return availableUsSizes.value.includes(size.us)
}

function handleSizeSelect (size: IShoeSize) {
  selectedSize.value = size
}
</script>

<style scoped lang="scss">
.size-tabs :deep(.el-tabs__header) {
  @apply h-5 #{!important};
}

.size-tabs :deep(.el-tabs__item) {
  @apply px-[4px] tracking-[0.25px];

  &.is-active {
    @apply font-semibold;
  }
}
</style>
