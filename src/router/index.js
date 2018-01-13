import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/pages/Homepage/index.vue'
import Trainingpage from '@/pages/Trainingpage/index.vue'
import Competitionpage from '@/pages/Competitionpage/index.vue'
import Athleticspage from '@/pages/Athleticspage.vue'

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
      path: '/competition',
      name: 'Competitionpage',
      component: Competitionpage
    },
    {
      path: '/athletics',
      name: 'Athletics',
      component: Athleticspage
    }
  ]
})
