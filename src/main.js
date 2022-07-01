import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
// import './mock/demo.js'
import axios from 'axios'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(Vant);

// 导入mock
import './mock/demo.js'


Vue.config.productionTip = false
Vue.prototype.$http=axios;


new Vue({
   router,
  store,
  render: h => h(App)
}).$mount('#app')
