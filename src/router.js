import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//Paths and their segments
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/register',
      component: () => import('./views/Registration.vue')
    },
    {
      path: '/sign_in',
      component: () => import('./views/SignIn.vue')
    },
    {
      path: '/pet/:pet_id',
      component: () => import('@/views/Pet.vue'),
      props: true
    }
  ]
})