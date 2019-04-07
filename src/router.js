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
      component: () => import('./pages/Home/Home.vue'),
      children:[
        {
          path:'/',
          redirect:'hot'
        },
        {
          path:'hot',
          name:'hot',
          component:()=>import('./pages/Home/Children/Hot/Hot.vue')
        },
        {
          path:'dress',
          name:'dress',
          component:()=>import('./pages/Home/Children/Dress.vue')
        },
        {
          path:'box',
          name:'box',
          component:()=>import('./pages/Home/Children/Box.vue')
        },{
          path:'ele',
          name:'ele',
          component:()=>import('./pages/Home/Children/Ele.vue')
        },{
          path:'food',
          name:'food',
          component:()=>import('./pages/Home/Children/Food.vue')
        },{
          path:'general',
          name:'general',
          component:()=>import('./pages/Home/Children/General.vue')
        },{
          path:'man',
          name:'man',
          component:()=>import('./pages/Home/Children/Man.vue')
        },{
          path:'mbaby',
          name:'mbaby',
          component:()=>import('./pages/Home/Children/Mbaby.vue')
        },{
          path:'shirt',
          name:'shirt',
          component:()=>import('./pages/Home/Children/Shirt.vue')
        },
      ]
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
