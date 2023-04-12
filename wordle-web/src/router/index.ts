import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Wordle from '../views/WordleView.vue'
import GameView from '../views/GameView.vue'
import WordleView from '../views/WordleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wordle',
      name: 'wordle',
      component: Wordle
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/wordle',
      name: 'wordle',
      component: WordleView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
