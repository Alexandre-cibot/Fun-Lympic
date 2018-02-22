<template>
  <div id="wrapper">
    <div id="load" v-show="!gameLoaded"></div>
    <div id="content" v-show="gameLoaded"></div>
    <AthleticsTuto v-if="showTuto" @hideMe="hideTuto"/>
    <div v-show="gameLoaded" id="bg"></div>
    <ClassementGame v-if="gameIsFinished" />
  </div>
</template>

<script>

import Phaser from 'phaser'
import ClassementGame from './Competitionpage/components/ClassementGame.vue'
import BootState from '@/states/Athletics/Boot'
import responsive from '../states/responsive_helper'
import AthleticsTuto from '@/pages/TutoPage/Athletics.vue'
import store from '../store'

import config from '@/config'

export default {
  name: 'AthleticsGame',
  computed: {
    gameLoaded () {
      return store.state.sprintLoaded
    },
    gameIsFinished () {
      return store.state.isSprintFinish
    }
  },
  data () {
    return {
      showTuto: false,
    };
  },
  mounted () {
    store.commit('runSprintGame')
    store.commit('updateTutoOk', true)
    if (!window.localStorage.getItem('athleticsTutoShown')) {
      store.commit('updateTutoOk', false)
      window.localStorage.setItem('athleticsTutoShown', 'true')
      this.showTuto = true
    }
    this.runGame()
  },
  beforeDestroy () {
    store.commit('destroySprintGame')
  },
  components:{
    AthleticsTuto,
    ClassementGame
  },
  methods: {
    hideTuto(){
      store.commit('updateTutoOk', true)
      this.showTuto = false
    },
    runGame () {
      class Game extends Phaser.Game {
        constructor () {
          // super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'content', null)
          super(responsive.width, responsive.height, Phaser.AUTO, 'content', null)

          this.state.add('Boot', BootState, false)

          // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
          if (!window.cordova) {
            this.state.start('Boot')
          }
        }
      }
      window.game = new Game()
      if (window.cordova) {
        var app = {
          initialize: function () {
            document.addEventListener(
              'deviceready',
              this.onDeviceReady.bind(this),
              false
            )
          },

          // deviceready Event Handler
          //
          onDeviceReady: function () {
            this.receivedEvent('deviceready')

            // When the device is ready, start Phaser Boot state.
            window.game.state.start('Boot')
          },

          receivedEvent: function (id) {
            console.log('Received Event: ' + id)
          }
        }
        app.initialize()
      }
    },
  }
};

</script>

<style scoped>
#wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
#load {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url('../assets/exemple_chargement.gif');
  background-size: cover;
  background-position: center;
}
#bg{
  background: #66DF91;
  width: 100%;
  height: 200px;
}
#menu {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
</style>

