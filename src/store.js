import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    sprintLoaded: false,
    sprintGame: false,
    swimmingLoaded: false,
    swimmingGame: false,
    tutoOK: true,
    isSwimmingFinish: false,
    isSprintFinish: false
  },
  mutations: {
    isSprintLoaded (state, boolean) {
      state.sprintLoaded = boolean
    },
    isSwimmingLoaded (state, boolean) {
      state.swimmingLoaded = boolean
    },
    destroySwimmingGame (state) {
      state.swimmingGame = false
    },
    runSwimmingGame (state) {
      state.swimmingGame = true
    },
    destroySprintGame (state) {
      state.sprintGame = false
    },
    runSprintGame (state) {
      state.sprintGame = true
    },
    updateTutoOk (state, boolean) {
      state.tutoOK = boolean
    },
    sprintFinish (state, boolean) {
      state.isSprintFinish = boolean
    },
    swimmingFinish (state, boolean) {
      state.isSwimmingFinish = boolean
    }
  }
})

export default store
