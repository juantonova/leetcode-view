<script setup lang="ts">
import { type Task } from '@/models/tasks'
import TagsList from './TagsList.vue'

type Props = {
  task: Task
  number: number
}

defineProps<Props>()
</script>

<template>
  <th>{{ number }}</th>
  <td>{{ task.title }}</td>
  <td>{{ task.category }}</td>
  <td>{{ task.score }}</td>
  <td>
    <TagsList :tags="task.tags" />
  </td>
</template>

<style scoped>
.tableRow {
  width: 100%;
}
</style>
