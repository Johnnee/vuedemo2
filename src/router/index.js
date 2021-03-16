import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
const Graph = () => import('../views/Graph.vue')
const Vue3 = () => import('../views/Vue3.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/map',
    name: "Map",
    component: Map

  },
  {
    path: '/graph',
    name: 'Graph',
    component:Graph
  },
  {
    path: '/vue3',
    name: "Vue3",
    component:Vue3
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
