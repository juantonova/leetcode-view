<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import PageWrapper from '@/components/PageWrapper.vue'
import TagsList from '@/components/TagsList.vue'
import { useRoute } from 'vue-router'
import TaskSolutionTextarea from '@/components/TaskSolutionTextarea.vue'
import { useTasksStore } from '@/stores/tasksStore'
import { useSolutionsStore } from '@/stores/solutionsStore'

const route = useRoute()
const tasksStore = useTasksStore()
const solutionStore = useSolutionsStore()

const task = computed(() => tasksStore.currentTask)
const solution = computed(() => solutionStore.currentSolution)

let isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  const id = route.params.id
  const taskId = Array.isArray(id) ? id[0] : id
  tasksStore
    .getCurrentTask(taskId)
    .then(() => solutionStore.getSolution(taskId))
    .finally(() => (isLoading.value = false))
})
</script>

<template>
  <PageWrapper>
    <div v-if="isLoading" class="loadingSpinner">
      <span class="loading loading-spinner text-accent"></span>
    </div>
    <div class="wrapper" v-else>
      <div class="basis">
        <div v-if="task?.category">Category: {{ task.category }}</div>
        <div class="taskTitle">
          <div>{{ task?.title || '' }}</div>
          <TagsList :tags="task?.tags" />
        </div>
        <div v-if="task?.description" class="taskDescription">
          {{ task.description }}
        </div>
        <div v-if="task?.incoming_example">
          <span class="pinkText">Incoming example:</span>
          {{ task.incoming_example }}
        </div>
        <div v-if="task?.outgoing_example">
          <span class="pinkText">Outgoing example:</span>
          {{ task.outgoing_example }}
        </div>
        <div v-if="task?.additional_info">
          <span class="pinkText">Additional info:</span>
          {{ task.additional_info }}
        </div>
        <div v-if="task?.score"><span class="pinkText">Score:</span> {{ task.score }}</div>
      </div>

      <TaskSolutionTextarea v-if="!solution" />
      <div v-else>
        <div>Your last solution:</div>
        <span>{{ solution.solution }}</span>
      </div>
    </div>
  </PageWrapper>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  color: oklch(var(--bc));
  padding: 8px;
  gap: 12px;
  box-sizing: border-box;
}

.basis {
  flex-basis: 50%;
}

.taskTitle {
  font-size: 24px;
  color: oklch(var(--a));
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.taskDescription {
  padding: 16px 0;
}

.pinkText {
  color: oklch(var(--a));
}

.loadingSpinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
