<template>
  <div id="wrapper">
    <div id="content" v-show="true"></div>
  </div>
</template>

<script>

import Phaser from 'phaser'

import BootState from '@/states/Swimming/Boot'
// import GameState from '@/states/Game'
import responsive from '../states/responsive_helper'

import config from '@/config'

export default {
  name: 'SwimmingGame',
  data() {
    return {};
  },
  mounted () {
    this.runGame()
  },
  methods: {
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
#menu {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
</style>

