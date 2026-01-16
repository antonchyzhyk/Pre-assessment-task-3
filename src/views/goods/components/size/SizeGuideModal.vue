<template>
  <el-dialog
    :model-value="isOpen.SizeGuideModal"
    :before-close="() => closeModal('SizeGuideModal')"
    destroy-on-close
    class="min-w-[360px] lg:min-w-[800px] max-w-[800px]"
    :show-close="false"
  >
    <template #header>
      <div class="flex items-center justify-between text-brand-800">
        <p class="text-[28px] leading-[36px] font-bold">Size Guide</p>

        <button
          class="w-[24px] h-[24px] flex items-center justify-center"
          @click="closeModal('SizeGuideModal')"
        >
          <IconClose />
        </button>
      </div>
    </template>

    <p class="text-[22px] leading-[28px] font-bold text-brand-800 mb-[12px]">How to measure shoe size?</p>

    <div class="flex lg:flex-row flex-col text-brand-800 items-center justify-between">
      <div class="flex flex-col gap-[22px] order-2 lg:order-1">
        <p>
          Follow the simple steps below to determine your shoe size.
          Make sure you do this during or at the end of day to ensure
          the right size (feet typically swell during the day).
        </p>

        <ol class="list-decimal list-inside text-sm tracking-[0.25px] font-normal">
          <li>
            Put a piece of blank paper under your feet.
            Stand up straight and have your heel lightly touching against the wall.
          </li>

          <li>
            Have someone mark the end of the longest toe and the back of your heel on the sheet with a pen or pencil.
            Afterwards measure the length of your feet from heel to toe.
          </li>

          <li>
            Repeat the steps for your other foot and compare it with our size chart below.
          </li>
        </ol>
      </div>

      <div class="w-[225px] h-[156px] flex-shrink-0 order-1 lg:order-2">
        <el-image
          class="w-full h-full"
          alt="size guide image"
          src="/src/assets/images/other/leg-with-size.png"
          fit="contain"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import IconClose from '~icons/icon/close'

const { isOpen, closeModal } = useModals()
</script>
