import { createRouter, createWebHistory } from 'vue-router'
import Auth_LoginPage from '@/components/auth_LoginPage.vue'
import Auth_RegisterPage from '@/components/auth_RegisterPage.vue'
import Client_HomePage from '@/components/client_HomePage.vue'
import Client_ProfilePage from '@/components/client_ProfilePage.vue'
import Client_CheckOutPage from '@/components/client_CheckOutPage.vue'
import Client_DeliveryPage from '@/components/client_DeliveryPage.vue'
import Client_SelectMealPage from '@/components/client_SelectMealPage.vue'
import Comm_HomePage from '@/components/comm_HomePage.vue'
import Comm_AccountsPage from '@/components/comm_AccountsPage.vue'
import Comm_Dashboard from '@/components/comm_DashboardPage.vue'
import Deliv_HomePage from '@/components/deliv_HomePage.vue'
import Deliv_ProfilePage from '@/components/deliv_ProfilePage.vue'
import Deliv_TrackingPage from '@/components/deliv_TrackingPage.vue'
import Dev_HomePage from '@/components/dev_HomePage.vue'
import Dev_ProfilePage from '@/components/dev_ProfilePage.vue'
import Rest_HomePage from '@/components/rest_HomePage.vue'
import Rest_ArticlesPage from '@/components/rest_ArticlesPage.vue'
import Rest_ProfilePage from '@/components/rest_ProfilePage.vue'
import Rest_StatsPage from '@/components/rest_StatsPage.vue'
import Rest_TrackingPage from '@/components/rest_TrackingPage.vue'
import Tech_HomePage from '@/components/tech_HomePage.vue'
import Tech_LogsDevPage from '@/components/tech_LogsDevPage.vue'
import Tech_LogsStatsPage from '@/components/tech_LogsStatsPage.vue'
import Tech_NewServicesPage from '@/components/tech_NewServicesPage.vue'
import Tech_ResolvePage from '@/components/tech_ResolvePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Auth_LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: Auth_RegisterPage
  },
  {
    path: '/client',
    name: 'home',
    component: Client_HomePage
  },
  {
    path: '/client/profile',
    name: 'profile',
    component: Client_ProfilePage
  },
  {
    path: '/client/checkout',
    name: 'checkout',
    component: Client_CheckOutPage
  },
  {
    path: '/client/delivery',
    name: 'delivery',
    component: Client_DeliveryPage
  },
  {
    path: '/client/selectmeal',
    name: 'selectmeal',
    component: Client_SelectMealPage
  },
  {
    path: '/comm',
    name: 'home',
    component: Comm_HomePage
  },
  {
    path: '/comm/accounts',
    name: 'accounts',
    component: Comm_AccountsPage
  },
  {
    path: '/comm/dashboard',
    name: 'dashboard',
    component: Comm_Dashboard
  },
  {
    path: '/deliv',
    name: 'home',
    component: Deliv_HomePage
  },
  {
    path: '/deliv/profile',
    name: 'profile',
    component: Deliv_ProfilePage
  },
  {
    path: '/deliv/tracking',
    name: 'tracking',
    component: Deliv_TrackingPage
  },
  {
    path: '/dev',
    name: 'home',
    component: Dev_HomePage
  },
  {
    path: '/dev/profile',
    name: 'profile',
    component: Dev_ProfilePage
  },
  {
    path: '/rest',
    name: 'home',
    component: Rest_HomePage
  },
  {
    path: '/rest/articles',
    name: 'articles',
    component: Rest_ArticlesPage
  },
  {
    path: '/rest/profile',
    name: 'profile',
    component: Rest_ProfilePage
  },
  {
    path: '/rest/stats',
    name: 'stats',
    component: Rest_StatsPage
  },
  {
    path: '/rest/tracking',
    name: 'tracking',
    component: Rest_TrackingPage
  },
  {
    path: '/tech',
    name: 'home',
    component: Tech_HomePage
  },
  {
    path: '/tech/logsdev',
    name: 'logsdev',
    component: Tech_LogsDevPage
  },
  {
    path: '/tech/logsstats',
    name: 'logsstats',
    component: Tech_LogsStatsPage
  },
  {
    path: '/tech/services',
    name: 'services',
    component: Tech_NewServicesPage
  },
  {
    path: '/tech/resolve',
    name: 'resolve',
    component: Tech_ResolvePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
