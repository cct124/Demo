import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import FastClick from 'fastclick';
import LyTab from 'ly-tab';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '@/common/css/style.css';
import 'mint-ui/lib/style.css';
import 'swiper/dist/css/swiper.css';
import { Actionsheet, DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);

Vue.component(Actionsheet.name, Actionsheet);

Vue.use(VueAwesomeSwiper);
Vue.use(LyTab);
FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
