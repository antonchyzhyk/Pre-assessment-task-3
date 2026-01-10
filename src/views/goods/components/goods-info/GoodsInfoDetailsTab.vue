<template>
  <div class="w-full text-brand-800 font-normal flex flex-col gap-[24px]">
    <div
      v-for="(block, i) in details"
      :key="i"
    >
      <template v-if="block.type === 'title-with-subtitle'">
        <h3 class="font-semibold">{{ block.title }}</h3>

        <p>{{ block.subtitle }}</p>
      </template>

      <p
        v-else-if="block.type === 'paragraph'"
        class="font-semibold"
      >
        {{ block.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  details: IGoodsDetails[]
}>()
</script>
