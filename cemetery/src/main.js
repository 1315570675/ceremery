// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GTemp from './components/template.vue'
import GPop from './components/PopConcat.vue'
import GPopInfo from './components/PopInfo.vue'
import GPage from './components/paginator.vue'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './../static/css/reset.css'
Vue.config.productionTip = false


Vue.use(VueAwesomeSwiper)　　

const components = [
  GTemp,
  GPop,
  GPage,
  GPopInfo
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
