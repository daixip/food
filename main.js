import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios.js';
import swiper from 'swiper'
import '../public/css/swiper.min.css'
import '../public/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入字体图标的css
import "./font/iconfont.css"

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
// Vue.prototype.swiper=swiper;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
