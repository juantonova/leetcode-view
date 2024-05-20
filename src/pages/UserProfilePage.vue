<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageWrapper from '@/components/PageWrapper.vue'
import { useUserStore } from '@/stores/usersStore'
import { useRoute } from 'vue-router'
import { useSolutionsStore } from '@/stores/solutionsStore'
import SolutionsList from '@/components/SolutionsList.vue'

const userStore = useUserStore()
const solutionStore = useSolutionsStore()
const route = useRoute()

let isLoading = ref(false)
onMounted(() => {
  const id = route.params.id
  const userId = Array.isArray(id) ? id[0] : id
  isLoading.value = true
  userStore
    .getUser(userId)
    .then(() => solutionStore.getSolutions())
    .finally(() => (isLoading.value = false))
})
</script>

<template>
  <PageWrapper>
    <div v-if="isLoading" class="loadingSpinner">
      <span class="loading loading-spinner text-accent"></span>
    </div>
    <div class="wrapper" v-else>
      <div class="card w-96 bg-base-100 shadow-xl u">
        <figure class="userIconWrapper">
          <img src="../assets/userIcon.svg" alt="Avatar" class="userIcon" />
        </figure>
        <div class="card-body">
          <h2 class="card-title" v-if="userStore.user && 'name' in userStore.user">
            {{ userStore.user.name }}
          </h2>
          <div v-if="userStore.user">Rating: {{ userStore.user.rating }}</div>
        </div>
      </div>
      <SolutionsList />
    </div>
  </PageWrapper>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 100px;
  height: 100vh;
  color: oklch(var(--bc));
}

.userIcon {
  max-height: 15rem;
}

.userIconWrapper {
  padding: 4rem;
  border-radius: 1rem;
  background-color: oklch(var(--a));
}

.loadingSpinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
