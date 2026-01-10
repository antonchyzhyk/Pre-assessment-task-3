<template>
  <div class="bg-neutral-100 rounded-xl">
    <div class="py-[24px] px-[24px] border-b border-neutral-400">
      <el-tabs v-model="activeTab">
        <el-tab-pane
          v-for="tab in tabsConfig"
          :key="tab.value"
          :name="tab.value"
        >
          <template #label>
            <span class="text-base">
              {{ tab.label }}
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="p-[24px]">
      <GoodsInfoDescriptionTab
        v-if="activeTab === 'description'"
        :description="description"
      />

      <GoodsInfoDetailsTab
        v-if="activeTab === 'details'"
        :details="details"
      />

      <GoodsInfoShipping v-if="activeTab === 'shipping'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  description: string
  details: IGoodsDetails[]
}>()

const activeTab = ref('description')

const tabsConfig = [
  {
    label: 'Description',
    value: 'description'
  },
  {
    label: 'Details',
    value: 'details'
  },
  {
    label: 'Shipping',
    value: 'shipping'
  }
]
</script>
