import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import FastClick from 'fastclick';
import LyTab from 'ly-tab';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'mint-ui/lib/style.css';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);
Vue.use(LyTab);
FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
