<template>
  <div id="wrapper">
    <p style="color: black" v-show="!gameLoaded">ça charge</p>
    <div id="content" v-show="gameLoaded"></div>
  <!-- <ClassementGame v-if="gameLoaded"/> -->
  </div>
</template>

<script>

import Phaser from 'phaser'

import BootState from '@/states/Swimming/Boot'
// const BootState = () => import(/* webpackChunkName: "BootState" */ '@/states/Swimming/Boot')
// import GameState from '@/states/Game'
import responsive from '../states/responsive_helper'
import ClassementGame from './Competitionpage/components/ClassementGame.vue'
import store from '../store'

import config from '@/config'

export default {
  name: 'SwimmingGame',
  data() {
    return {
      show: false,
      first: true
    };
  },
  computed: {
    gameLoaded () {
      return store.state.swimmingLoaded
    }
  },
  components:{
    ClassementGame
  },
  mounted () {
    this.runGame()
  },
  methods: {
    disappear(){
      this.first =false;
    },
    runGame () {
      class Game extends Phaser.Game {
        constructor () {
          // super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'content', null)
          super(responsive.width, responsive.height, Phaser.AUTO, 'content', null, false)

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
  },
  watch:{
    first(){
      console.log('coucou')
    }
  }
};

</script>

<style scoped>
#wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
#menu {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
#content{
  display: flex;
  flex-direction: row;
}
#content p {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 5em;
  width: 40px;
  margin: auto;
}
</style>

