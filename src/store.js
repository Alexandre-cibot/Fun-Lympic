import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    sprintLoaded: false,
    swimmingLoaded: false
  },
  mutations: {
    isSprintLoaded (state, boolean) {
      state.sprintLoaded = boolean
    },
    isSwimmingLoaded (state, boolean) {
      state.swimmingLoaded = boolean
    }
  }
})

export default store
