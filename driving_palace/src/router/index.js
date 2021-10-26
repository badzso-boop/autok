import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/utak',
    name: 'Roads',
    component: () => import('../views/Roads.vue')
  },
  {
    path: '/utfeltoltes',
    name: 'RoadUpload',
    component: () => import('../views/RoadUpload.vue')
  },
  {
    path: '/helyszinek',
    name: 'Places',
    component: () => import('../views/Places.vue')
  },
  {
    path: '/helyfeltoltes',
    name: 'PlaceUpload',
    component: () => import('../views/PlaceUpload.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/kapcsolat',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/szabalyzat',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
