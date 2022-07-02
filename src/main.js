import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/cours.css';
import axios from 'axios'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)



Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
   router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
