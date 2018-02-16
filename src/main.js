import 'pixi'
import 'p2'

import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import store from './store'
// Vue.config.productionTip = false;
/* eslint-disable no-new */

Vue.use(Vuex)
Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
