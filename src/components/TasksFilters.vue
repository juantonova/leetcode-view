<script setup lang="ts">
import { CategoryType, type Score } from '@/models/tasks'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const handleSetScore = (score: string) => {
  if (score === 'All') {
    tasksStore.setScore(null)
  } else {
    tasksStore.setScore(Number(score) as Score)
  }
}

const handleSetCategory = (category: string) => {
  if (category === 'All') {
    tasksStore.setCategory(null)
  } else {
    tasksStore.setCategory(category as CategoryType)
  }
}

const difficultyOptions = Array.from({ length: 10 }, (_, i) => i + 1)
</script>

<template>
  <div class="filters">
    <div>
      Category:
      <select @change="(e: Event) => handleSetCategory((e.target as HTMLSelectElement).value)">
        <option>All</option>
        <option v-for="option in CategoryType" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      Difficulty:
      <select @change="(e: Event) => handleSetScore((e.target as HTMLSelectElement).value)">
        <option>All</option>
        <option v-for="difficulty in difficultyOptions" :key="difficulty">
          {{ difficulty }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filters {
  color: oklch(var(--bc));
  display: flex;
  gap: 20px;
  padding: 10px;
}
</style>
