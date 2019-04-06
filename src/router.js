import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/Home/Home.vue')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('./pages/Recommend/Recommend.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./pages/Search/Search.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./pages/Chat/Chat.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./pages/Me/Me.vue')
    },
  ]
})
