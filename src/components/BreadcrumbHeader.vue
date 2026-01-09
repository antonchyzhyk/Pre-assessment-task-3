<template>
  <nav>
    <ol class="flex items-center text-sm font-normal tracking-[0.25px]">
      <li
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        class="flex items-center"
      >
        <router-link
          :to="item.path"
          class="text-slate-gray-200 hover:text-secondary-600 underline"
          :class="{ '!text-secondary-600 no-underline font-semibold': index === breadcrumbItems.length - 1 }"
        >
          {{ item.label }}
        </router-link>

        <span
          v-if="index < breadcrumbItems.length - 1"
          class="mx-1 text-slate-gray-200"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
const breadcrumbItems = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Unisex Shoe',
    path: '/unisex-shoes'
  },
  {
    label: 'Unisex SportStyle Shoes',
    path: '/unisex-shoes/sportstyle'
  }
]
</script>

