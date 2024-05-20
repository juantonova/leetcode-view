import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CategoryType, Score, Task } from '@/models/tasks'
import { URL } from '@/const'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const visibleTasks = computed(() =>
    tasks.value.filter((task) => {
      let isVisibleTask = true
      if (category.value) {
        isVisibleTask = task.category === category.value
      }
      if (score.value) {
        isVisibleTask = task.score === score.value
      }
      return isVisibleTask
    })
  )
  const currentTask = ref<Task | null>(null)
  const category = ref<CategoryType | null>(null)
  const score = ref<Score | null>(null)

  const setCategory = (value: CategoryType | null) => {
    category.value = value
  }

  const setScore = (value: Score | null) => {
    score.value = value
  }

  const getTasks = async () => {
    try {
      const response = await fetch(`${URL}/tasks`)
      const data = await response.json()
      tasks.value = data.tasks
    } catch (error) {
      console.error(error)
      tasks.value = []
    }
  }

  const getCurrentTask = async (id: string | string[]) => {
    try {
      const response = await fetch(`${URL}/tasks/${id}`)
      const data = await response.json()
      currentTask.value = data.task
    } catch (error) {
      console.error(error)
      currentTask.value = null
    }
  }

  return {
    visibleTasks,
    getTasks,
    getCurrentTask,
    currentTask,
    setCategory,
    setScore,
    category,
    score
  }
})
