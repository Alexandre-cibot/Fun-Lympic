import 'pixi'
import 'p2'

import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import store from './store'

import isMobile from '@/helpers/isMobile'
Vue.use(Vuex)
Vue.config.devtools = true
Vue.config.performance = true

if (isMobile.any()) {
  new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
  })
} else {
  alert('Please use a mobile phone')
}
