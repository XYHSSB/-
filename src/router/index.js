import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 //开屏
  {
    path:'/',
    component:()=>import('../components/Userlogin/Openscreen.vue')
  },
  //登录
  {
    path:'/User/Login',
    component:()=>import('../components/Userlogin/Login.vue') ,
    beforeEnter: (to, from, next) => {
      // ...
      next();
    }
  },
  //注册
  {
    path:'/register',
    component:()=>import('../components/Userlogin/Register.vue')
  }
  ,
  // 主页
  {
    path: '/mainframe',
    name: 'home',
    component: ()=> import ('../components/mainpart/Maing.vue'),
    redirect:'/mainframe/homepage',
    children:[
      {path:'/mainframe/homepage', component: ()=> import('../components/mainpart/Homepage.vue')},
      {path:'/mainframe/MyCourser', component: ()=> import('../components/mainpart/Taskpage.vue')},
      {path:'/mainframe/personalcenter', component: ()=> import('../components/mainpart/Personalcenter.vue')},
      {path:'/mainframe/search',component:()=>import('../components/mainpart/Search.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
