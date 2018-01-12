import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld.vue'
import Homepage from '../pages/Homepage.vue'
import Trainingpage from '../pages/Trainingpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/training',
      name: 'Training',
      component: Trainingpage
    }
  ]
})
