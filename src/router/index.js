import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //开屏
  {
    path: '/users',
    component: () => import('../components/Userlogin/Openscreen.vue')
  },
  //视频详情
  {
    path: '/',
    component: () => import('../components/detailpage/Coursedetails.vue')
  },
  //支付
  {
    path: '/pay',
    component: () => import('../components/payment/Payment.vue')
  },
  {
    path: '/success',
    component: () => import('../components/payment/Paymentsuccess.vue')

  },

  //登录
  {
    path: '/login',
    component: () => import('../components/Userlogin/Login.vue')
  },
  //注册
  {
    path: '/register',
    component: () => import('../components/Userlogin/Register.vue')
  }
  ,
  // 主页
  {
    path: '/mainframe',
    name: 'home',
    component: () => import('../components/mainpart/Maing.vue'),
    redirect: '/mainframe/homepage',
    children: [
      { path: '/mainframe/homepage', component: () => import('../components/mainpart/Homepage.vue') },
      { path: '/mainframe/MyCourser', component: () => import('../components/mainpart/Taskpage.vue') },
      { path: '/mainframe/personalcenter', component: () => import('../components/mainpart/Personalcenter.vue') },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
