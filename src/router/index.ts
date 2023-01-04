import BookingView from '@/views/BookingView/BookingView.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView
    }
  ]
})

export default router
