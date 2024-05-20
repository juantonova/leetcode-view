import UserProfilePage from '@/pages/UserProfilePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/TasksListPage.vue'),
      name: 'tasks'
    },
    {
      path: '/tasks/:id',
      component: () => import('../pages/TaskInfoPage.vue'),
      name: 'task',
      meta: {
        layout: ''
      }
    },
    {
      path: '/users/:id',
      name: 'userPage',
      component: UserProfilePage,
      meta: {
        layout: ''
      }
    },
    {
      // See: https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => '404' // import('@/pages/404/Main.vue')
    }
  ]
})

export default router
