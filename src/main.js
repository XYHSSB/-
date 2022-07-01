import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/cours.css';
import axios from 'axios'



Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
   router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
