<script setup lang="ts">
import type { Tag } from '@/models/tasks'
import TaskTag from '@/components/TaskTag.vue'

type Props = {
  tags?: Tag[]
}

defineProps<Props>()
</script>

<template>
  <div v-if="tags" class="tagList">
    <div v-for="tag in tags" :key="tag">
      <TaskTag :tag="tag" />
    </div>
  </div>
</template>

<style scoped>
.tagList {
  display: flex;
  gap: 10px;
}
</style>
