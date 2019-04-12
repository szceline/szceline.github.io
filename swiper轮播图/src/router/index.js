import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/components/Swiper'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
