import Vue from 'vue'
import VueRouter from './krouter'
import Home from '../views/Home.vue'
console.log(VueRouter)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/Slotexample.vue')
  },
  {
    path: '/eform',
    name: 'Eform',
    component: () => import('../components/EinputComponent/index.vue')
  },
  {
    path: '*',
    name: 'Nofound',
    component: () => import('../views/Nofound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
