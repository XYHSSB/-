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
    path:'/login',
    component:()=>import('../components/Userlogin/Login.vue')  
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
    ]
  },
  {
    path: '/ShiPin',
    component:()=>import('../components/zujian/ShiPin.vue')
  },
  {
    path: '/YinPin',
    component:()=>import('../components/zujian/YinPin.vue')
  },
  {
    path: '/JiaJiao',
    component:()=>import('../components/zujian/JiaJiao.vue')
  },
  {
    path: '/ShuKan',
    component:()=>import('../components/zujian/ShuKan.vue')
  },
  {
    path: '/JiaJiaoOne',
    component:()=>import('../components/zujian/JiaJiaoOne.vue')
  },
  {
    path: '/JiaJiaoTwo',
    component:()=>import('../components/zujian/JiaJiaoTwo.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
