import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import SignupView from '../views/SignupView'
import DeleteUser from '../views/DeleteUser'
import LandingView from '../views/LandingView'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/aboutView',
    name: 'aboutView',
    component: AboutView
  },
  {
    path: '/loginView',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/signupView',
    name: 'signupView',
    component: SignupView
  },
  {
    path: '/deleteUser',
    name: 'deleteUser',
    component: DeleteUser
  },
  {
    path: '/landingView',
    name: 'landingView',
    component: LandingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
