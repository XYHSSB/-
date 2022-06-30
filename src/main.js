import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import  "./mock/mock1/mock.js"

import axios from "axios";
Vue.prototype.$http = axios

import "./assets/icon/font_7f1v8491hgu/iconfont"
import "./assets/icon/font_u654ozfh0w/iconfont"
import "./assets/icon/font_d7bgg0zkd05/iconfont"
import "./assets/icon/font_zskbwucjr2g/iconfont"

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
   router,
   store,
  render: h => h(App)
}).$mount('#app')


