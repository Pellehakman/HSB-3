import BookingView from '@/views/BookingView/BookingView.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BookingView
    }
  ]
})

export default router
