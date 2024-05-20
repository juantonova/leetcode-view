<script setup lang="ts">
import { useSolutionsStore } from '@/stores/solutionsStore'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const solution = ref('')

const solutionsStore = useSolutionsStore()
const route = useRoute()

const handleSend = () => {
  const id = route.params.id
  const taskId = Array.isArray(id) ? id[0] : id
  solutionsStore
    .sendSolution({
      task_id: Number(taskId),
      solution: solution.value
    })
    .then(() => {
      solutionsStore.getSolution(taskId)
    })
}
</script>

<template>
  <div class="basis">
    <label class="form-control">
      <div class="label">
        <span class="label-text">Your answer</span>
      </div>
      <textarea
        v-model="solution"
        className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        placeholder="Write answer here..."
      ></textarea>
    </label>
    <button class="btn" @click="handleSend">Send</button>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
  padding-right: 8px;
}
</style>
