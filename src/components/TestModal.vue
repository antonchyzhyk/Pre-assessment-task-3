<template>
  <el-dialog
    :model-value="isOpen.TestModal"
    :before-close="() => closeModal('TestModal')"
    destroy-on-close
    class="max-w-[800px]"
    :show-close="false"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <p>Header</p>
        <span>Close</span>
      </div>
    </template>

    <div>Test Modal Content</div>

    <template #footer>
      <el-button type="primary" class="w-[100px]" @click="closeModal('TestModal')">
        Cancel
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
const { isOpen, closeModal } = useModals()
</script>
