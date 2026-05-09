import { createWebHistory, createRouter } from 'vue-router'

import Goods from '@/components/Goods.vue'
import StartScreen from '@/components/StartScreen.vue'
import Wallets from '@/components/Wallets.vue'
import Bags from '@/components/Bags.vue'
import Card from '@/components/Card.vue'


const routes = [
  { path: '/goods', redirect: '/'},
  {
  path: '/',
    component: StartScreen,
    children: [
  { path: '', 
    component: Goods,
    children: [
      {
      path: '/goods/bags',
      component: Bags
      },
      {
        path: '/goods/card',
        component: Card
      }
    ]
  },
   { path: '/wallets', component: Wallets },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
