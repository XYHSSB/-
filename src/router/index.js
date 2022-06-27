import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/mainframe'
  }
  ,
  {
    path: '/mainframe',
    name: 'home',
    component: ()=> import ('../components/mainpart/Maing.vue'),
    redirect:'/mainframe/homepage',
    children:[
      {path:'/mainframe/homepage', component: ()=> import('../components/mainpart/Homepage.vue')},
      {path:'/mainframe/taskpage', component: ()=> import('../components/mainpart/Taskpage.vue')},
      {path:'/mainframe/personalcenter', component: ()=> import('../components/mainpart/Personalcenter.vue')},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
