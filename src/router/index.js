import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/pages/Homepage/index.vue'
import Trainingpage from '@/pages/Trainingpage/index.vue'
import Competitionpage from '@/pages/Competitionpage/index.vue'
import Athleticspage from '@/pages/Athleticspage.vue'
import Swimmingpage from '@/pages/Swimmingpage.vue'
import Parameter from '@/pages/ParameterPage/index.vue'
import Classement from '@/pages/ClassementPage/index.vue'
import Shopping from '@/pages/ShoppingPage/index.vue'
import Character from '@/pages/CharacterPage/index.vue'
import SwimmingTuto from '@/pages/TutoPage/Swimming.vue'

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
      path: '/swimming',
      name: 'Swimming',
      component: Swimmingpage
    },
    {
      path: '/athletics',
      name: 'Athletics',
      component: Athleticspage
    },
    {
      path: '/parameter',
      name: 'Parameter',
      component: Parameter
    },
    {
      path:'/classement',
      name: 'Classement',
      component: Classement
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path:'/character',
      name: 'Character',
      component: Character
    },
    {
      path:'/swimming/tuto',
      name: 'SwimmingTuto',
      component: SwimmingTuto
    }
  ]
})
