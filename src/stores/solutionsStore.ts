import { ref } from 'vue'
import { defineStore } from 'pinia'
import { URL } from '@/const'
import type { Solution } from '@/models/solutions'
import { useUserStore } from './usersStore'

export const useSolutionsStore = defineStore('solution', () => {
  const solutions = ref<Solution[]>([])
  const currentSolution = ref<Solution | null>(null)

  const usersStore = useUserStore()

  const getSolutions = async () => {
    try {
      const userId = usersStore.user?.id
      const response = await fetch(`${URL}/solutions/${userId}`)
      const data = await response.json()
      solutions.value = data.solutions
    } catch (error) {
      console.error(error)
      solutions.value = []
    }
  }
  const getSolution = async (taskId: string) => {
    try {
      await usersStore.getUser()
      const userId = usersStore.user?.id
      const response = await fetch(`${URL}/solutions?user_id=${userId}&task_id=${taskId}`)
      const data = await response.json()
      if (data.solutions.length === 0) {
        currentSolution.value = null
        return
      }
      currentSolution.value = data.solutions.at(-1)
    } catch (error) {
      console.error(error)
      currentSolution.value = null
    }
  }

  const sendSolution = async (solution: { solution: string; task_id: number }) => {
    try {
      const userId = usersStore.user?.id
      const response = await fetch(`${URL}/solutions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...solution, user_id: userId })
      })
      const data = await response.json()
      solutions.value = [...solutions.value, data.solution]
    } catch (error) {
      console.error(error)
    }
  }

  return { solutions, currentSolution, getSolutions, sendSolution, getSolution }
})
