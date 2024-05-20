<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
import PageWrapper from '@/components/PageWrapper.vue'
import { useTasksStore } from '@/stores/tasksStore'
import { onMounted, ref } from 'vue'
import TasksFilters from '@/components/TasksFilters.vue'

const tasksStore = useTasksStore()
const { getTasks } = tasksStore

let isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  getTasks().finally(() => (isLoading.value = false))
})

const handleClick = (taskId: number) => {
  window.location.href = `/tasks/${taskId}`
}
</script>

<template>
  <PageWrapper>
    <div class="overflow-x-auto">
      <TasksFilters />
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Score</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody v-if="!isLoading">
          <tr
            v-for="(task, index) in tasksStore.visibleTasks"
            :key="task.id"
            class="task"
            @click="() => handleClick(task.id)"
          >
            <TaskCard :task="task" :number="index + 1" />
          </tr>
        </tbody>
        <tbody v-else class="loader">
          <span class="loading loading-spinner text-accent"></span>
        </tbody>
      </table>
    </div>
  </PageWrapper>
</template>

<style scoped>
.table {
  color: oklch(var(--bc));
}

.task:hover {
  background-color: oklch(var(--b3));
  cursor: pointer;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
}
</style>
