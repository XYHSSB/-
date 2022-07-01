import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/home.css'
import './assets/download/font_3489274_jvl92gjrjj/iconfont.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(Vant);
new Vue({
   router,
  store,
  render: h => h(App)
}).$mount('#app')
