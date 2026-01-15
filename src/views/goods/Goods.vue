<template>
  <GoodsSkeleton v-if="loading" />

  <template v-else-if="goodsData">
    <section class="flex flex-col items-center xl:items-start xl:flex-row xl:gap-[50px] gap-[24px]">
      <div class="xl:max-w-[690px] w-full mx-auto">
        <ImageGallery
          :images="currentImages"
          :is-liked="goodsData.isFavorite"
          :like-loading="favoriteLoading"
          @toggle-like="handleToggleLike"
        />
      </div>

      <div class="w-full xl:max-w-[690px] mx-auto lg:max-w-none xl:flex-1 text-brand-800">
        <GoodsMainInfoSection
          :name="goodsData.name"
          :price="goodsData.price.value"
          :currency="goodsData.price.currency"
          :color="selectedColorName"
        />

        <div
          class="w-full flex mb-[24px] flex-wrap sm:gap-[13px] gap-[9px]"
        >
          <GoodsColorCard
            v-for="(variant, index) in goodsData.colorVariants"
            :key="index"
            :thumbnail="variant.thumbnail"
            :is-selected="selectedColorIndex === index"
            :is-in-stock="variant.inStock"
            @select="handleColorSelect(index)"
          />
        </div>

        <SizeSelector
          v-model:selected-size="selectedSize"
          :availableSizes="currentAvailableSizes"
        />

        <div
          v-if="!isMobile"
          class="flex mt-[36px]"
        >
          <AddToCartButton
            class="flex-1"
            :loading="addToCartLoading"
            :quantity="currentColorCartQuantity"
            @add-to-cart="handleAddToCart"
          />

          <LikeButton
            :is-liked="goodsData.isFavorite"
            :loading="favoriteLoading"
            @toggle-like="handleToggleLike"
          />

          <CompareButton
            class="ml-3"
            @toggle-compare="handleToggleCompare"
          />
        </div>
      </div>
    </section>

    <section class="w-full mt-[48px] pb-[100px]">
      <GoodsInfoCard
        :product-id="goodsData.productId"
        :description="goodsData.description"
        :details="goodsData.details"
        :shipping-information="goodsData.shippingInformation"
      />
    </section>

    <GoodsBottomBar
      v-if="isMobile"
      :cartQuantity="currentColorCartQuantity"
      :addToCartLoading="addToCartLoading"
      @add-to-cart="handleAddToCart"
      @toggle-compare="handleToggleCompare"
    />
  </template>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const { isMobile } = useScreenBreakpoints()

const loading = ref(true)
const goodsData = ref<IGoods | null>(null)
const selectedColorIndex = ref(0)
const cartQuantities = ref<Map<string, number>>(new Map())

const favoriteLoading = ref(false)
const addToCartLoading = ref(false)
const selectedSize = ref<IShoeSize | null>(null)

const selectedColorName = computed(() => {
  return goodsData.value?.colorVariants[selectedColorIndex.value]?.color ?? ''
})

const currentColorCartQuantity = computed(() => {
  const key = selectedColorName.value
  return cartQuantities.value.get(key) || 0
})

const currentImages = computed(() => {
  const variant = goodsData.value?.colorVariants[selectedColorIndex.value]
  return variant?.images.length ? variant.images : goodsData.value?.images ?? []
})

const currentAvailableSizes = computed(() => {
  return goodsData.value?.colorVariants[selectedColorIndex.value]?.availableSizes ?? []
})

function handleColorSelect (index: number) {
  selectedColorIndex.value = index
  selectedSize.value = null
}

async function handleToggleLike () {
  if (favoriteLoading.value || !goodsData.value) return

  favoriteLoading.value = true

  try {
    const response = await goodsService.toggleFavorite(goodsData.value.productId, goodsData.value.isFavorite)
    goodsData.value.isFavorite = response.isFavorite

    ElMessage.success(response.isFavorite ? 'Added to favorites' : 'Removed from favorites')
  } catch {
    ElMessage.error('Failed to update favorites')
  } finally {
    favoriteLoading.value = false
  }
}

async function handleAddToCart () {
  if (!selectedSize.value) {
    ElMessage.info('Please select a size')
    return
  }

  if (!goodsData.value) return

  try {
    addToCartLoading.value = true

    await goodsService.addToCart({
      productId: goodsData.value.productId,
      size: selectedSize.value,
      color: selectedColorName.value
    })

    cartQuantities.value.set(selectedColorName.value, currentColorCartQuantity.value + 1)

    ElMessage.success('Added to cart')
  } catch {
    ElMessage.error('Failed to add to cart')
  } finally {
    addToCartLoading.value = false
  }
}

function handleToggleCompare () {
  ElMessage.info('This feature is not available yet')
}

async function fetchGoodsData () {
  loading.value = true

  try {
    goodsData.value = await goodsService.getGoods()

    const firstInStockIndex = goodsData.value.colorVariants.findIndex(v => v.inStock)
    selectedColorIndex.value = firstInStockIndex !== -1 ? firstInStockIndex : 0
  } catch {
    ElMessage.error('Failed to load product data')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchGoodsData()
})
</script>
