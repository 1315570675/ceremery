import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/home.vue'
import News from './../views/news.vue'
import Show from './../views/show.vue'
import Service from './../views/service.vue'
import Progress from './../views/progress.vue'
import NewsDtl from './../views/newsDtl.vue'
import About from './../views/about.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/byprogress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/newsdtl',
      name: 'NewsDtl',
      component: NewsDtl
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
