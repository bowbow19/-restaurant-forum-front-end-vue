import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'root',
    redirect:'/restaurants'
  },
  {
    path:'/signin',
    name:'sign-in',
    component:SignIn
  },
  {
    path:'/signup',
    name:'sign-up',
    component:SignUp
  },
  {
    path:'/restaurants',
    name:'restaurants',
    component: () => import('../views/Restaurants.vue')
  },
  
  {
    path:'/restaurants/feeds',
    name:'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path:'/restaurants/Top',
    name:'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path:'/users/top',
    name:'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {  
    path:'/restaurants/:id',
    name:'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path:'/users/:id',
    name:'users',
    component: () => import('../views/User.vue')
  },
  {  
    path:'/restaurants/:id/dashboard',
    name:'restaurant-dashboard',
    component: () => import('../views/RestaurantDashborad.vue')
  },
  
  {
    path:'*',
    name:'not-found',
    component:NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
