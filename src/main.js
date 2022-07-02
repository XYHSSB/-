import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { createApp } from 'vue';
import axios from 'axios'
Vue.prototype.$http=axios
Vue.use(Vant);

Vue.config.productionTip = false

axios.baseURL="http://localhost:8080/"

new Vue({
   router,
  store,
  render: h => h(App)
}).$mount('#app')
