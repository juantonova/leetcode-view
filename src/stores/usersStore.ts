import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/models/users'
import { URL } from '@/const'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const getUser = async (id: string) => {
    try {
      const response = await fetch(`${URL}/users/${id}`)
      const data = await response.json()
      user.value = data.user
    } catch (error) {
      console.error(error)
      user.value = null
    }
  }

  return { user, getUser }
})
