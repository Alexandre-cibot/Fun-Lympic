import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../pages/Homepage.vue'
import Trainingpage from '../pages/Trainingpage.vue'
import Stadepage from '../pages/Stadepage.vue'
import Athleticspage from '../pages/Athleticspage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/training',
      name: 'Training',
      component: Trainingpage
    },
    {
      path: '/stade',
      name: 'Stadepage',
      component: Stadepage
    },
    {
      path: '/athletics',
      name: 'Athletics',
      component: Athleticspage
    }
  ]
})
