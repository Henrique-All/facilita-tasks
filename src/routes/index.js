import { createRouter, createWebHashHistory } from 'vue-router'
import LoginScreen from '@/view/auth/LoginScreen.vue'
import DashboardScreen from '@/view/home/DashboardScreen.vue'
const routes = [
  { path: '/', component: LoginScreen, name: 'login' },
  { path: '/dashboard', component: DashboardScreen, name: 'dashboard' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
