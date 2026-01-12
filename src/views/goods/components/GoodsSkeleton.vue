<template>
  <div class="flex flex-col lg:items-start xl:flex-row xl:gap-[50px] gap-[24px]">
    <div class="max-w-[690px] w-full">
      <el-skeleton animated>
        <template #template>
          <el-skeleton-item
            class="w-full aspect-square rounded-xl"
          />
        </template>
      </el-skeleton>

      <div class="flex gap-2 mt-4">
        <el-skeleton
          v-for="i in 6"
          :key="i"
          animated
        >
          <template #template>
            <el-skeleton-item
              class="sm:w-[80px] sm:h-[60px] w-[60px] h-[45px] rounded-lg"
            />
          </template>
        </el-skeleton>
      </div>
    </div>

    <!-- Product Info Skeleton -->
    <div class="flex-1">
      <el-skeleton animated>
        <template #template>
          <!-- Title -->
          <el-skeleton-item
            variant="h1"
            class="w-3/4 h-10 mb-4"
          />

          <!-- Price -->
          <el-skeleton-item
            variant="text"
            class="w-1/4 h-8 mb-9"
          />

          <!-- Color label -->
          <el-skeleton-item
            variant="text"
            class="w-1/3 h-5 mb-3"
          />
        </template>
      </el-skeleton>

      <!-- Color variants -->
      <div class="flex gap-3 mb-6">
        <el-skeleton
          v-for="i in 5"
          :key="i"
          animated
        >
          <template #template>
            <el-skeleton-item
              class="sm:w-[100px] sm:h-[70px] w-[65px] h-[60px] rounded-lg"
            />
          </template>
        </el-skeleton>
      </div>

      <!-- Size selector -->
      <el-skeleton animated>
        <template #template>
          <el-skeleton-item
            variant="text"
            class="w-1/4 h-5 mb-3"
          />
        </template>
      </el-skeleton>

      <!-- Size tabs -->
      <div class="flex gap-4 mb-4">
        <el-skeleton
          v-for="i in 4"
          :key="i"
          animated
        >
          <template #template>
            <el-skeleton-item
              variant="text"
              class="w-[60px] h-6"
            />
          </template>
        </el-skeleton>
      </div>

      <!-- Size grid -->
      <div class="grid grid-cols-5 gap-2 sm:gap-[10px]">
        <el-skeleton
          v-for="i in 15"
          :key="i"
          animated
        >
          <template #template>
            <el-skeleton-item
              variant="button"
              class="w-full h-10 rounded"
            />
          </template>
        </el-skeleton>
      </div>

      <!-- Buttons (desktop) -->
      <div class="flex mt-[24px] gap-2">
        <el-skeleton animated class="flex-1">
          <template #template>
            <el-skeleton-item
              variant="button"
              class="w-full h-12 rounded-lg"
            />
          </template>
        </el-skeleton>

        <el-skeleton animated>
          <template #template>
            <el-skeleton-item
              variant="button"
              class="w-12 h-12 rounded-lg"
            />
          </template>
        </el-skeleton>

        <el-skeleton animated>
          <template #template>
            <el-skeleton-item
              variant="button"
              class="w-12 h-12 rounded-lg"
            />
          </template>
        </el-skeleton>
      </div>
    </div>
  </div>

  <!-- Info Card Skeleton -->
  <div class="w-full mt-[48px] pb-[100px]">
    <div class="bg-neutral-100 rounded-xl">
      <div class="py-[24px] px-[24px] border-b border-neutral-400">
        <div class="flex gap-6">
          <el-skeleton
            v-for="i in 3"
            :key="i"
            animated
          >
            <template #template>
              <el-skeleton-item
                variant="text"
                class="w-[80px] h-6"
              />
            </template>
          </el-skeleton>
        </div>
      </div>

      <div class="p-[24px]">
        <el-skeleton animated :rows="4" />
      </div>
    </div>
  </div>
</template>

