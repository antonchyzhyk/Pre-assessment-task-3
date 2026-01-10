<template>
  <GoodsSkeleton v-if="loading" />

  <template v-else-if="goodsData">
    <div class="flex flex-col lg:items-start xl:flex-row gap-[50px]">
      <section class="max-w-[690px]">
        <ImageGallery
          :images="currentImages"
          :is-liked="goodsData.isFavorite"
          :like-loading="favoriteLoading"
          @toggle-like="handleToggleLike"
        />
      </section>

      <section class="flex-1 text-brand-800">
        <GoodsMainInfoSection
          :name="goodsData.name"
          :price="goodsData.price.value"
          :currency="goodsData.price.currency"
          :color="selectedColorName"
        />

        <div
          class="w-full flex justify-between lg:justify-start xxl:justify-between mb-[24px] flex-wrap sm:gap-3 gap-2"
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
          class="flex mt-[24px]"
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
      </section>
    </div>

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
const goodsData = ref<IGoodsResponse | null>(null)
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
  console.log('toggle compare')
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
