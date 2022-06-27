import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../components/Dashboard.vue'
import DisplayDetails from '../views/DisplayDetails.vue'
import SearchShow from '../views/SearchShow.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  { name: 'DisplayDetails', path: '/details', component: DisplayDetails },
  { name: 'SearchShow', path: '/search/:name', component: SearchShow },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
