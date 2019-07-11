// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GTemp from './components/template.vue'
import GPop from './components/PopConcat.vue'
import './../static/css/swiper.min.css'
Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)　　

const components = [
  GTemp,
  GPop
];
//全局组件注册
components.map(component => {
  Vue.component(component.name, component);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
