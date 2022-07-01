import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import "echarts";
import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts);
import { Dialog } from 'vant';

Vue.use(Vant);
Vue.prototype.$dialog=Dialog;

Vue.config.productionTip = false
Vue.prototype.$http=axios;
new Vue({
   router,
  store,
  render: h => h(App)
}).$mount('#app')
