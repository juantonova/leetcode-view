<script setup lang="ts">
import { useSolutionsStore } from '@/stores/solutionsStore'

const solutionsStore = useSolutionsStore()
</script>

<template>
  <div v-if="solutionsStore.solutions" class="solutionsWrapper">
    <div class="title">Solutions list</div>
    <div v-for="solution in solutionsStore.solutions" :key="solution.id" class="solutionsList">
      <div>{{ solution.solution }}</div>
    </div>
  </div>
</template>

<style scoped>
.solutionsWrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
}

.title {
  color: oklch(var(--a));
}

.solutionsList {
  display: flex;
  flex-direction: column;
}
</style>
