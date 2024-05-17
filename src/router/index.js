import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Redakteure from '../views/Redakteure.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
  path: '/redakteure',
  name: 'redakteure',
  component: Redakteure
},
{
  path: '/impressum',
  name: 'impressum',
  component: Impressum
},
{
  path: '/datenschutz',
  name: 'datenschutz',
  component: Datenschutz
}
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
})

export default router
