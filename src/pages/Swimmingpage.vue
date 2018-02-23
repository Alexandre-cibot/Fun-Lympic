<template>
  <div id="wrapper">
    <div id="load" v-show="!gameLoaded"></div>
    <SwimmingTuto v-if="showTuto" @hideMe="hideTuto"/>
    <div id="content" v-show="gameLoaded"></div>
    <HistoryScores v-if="gameIsFinished" :history='getHistory' />
    <div v-if="gameIsFinished" class="money">
      <img src="@/assets/coin.png" alt="jo_coin">
      +{{money}}
    </div>
    <div v-if="gameIsFinished"><Sound file="artifice"/></div>
  </div>
</template>

<script>

import Phaser from 'phaser'

import BootState from '@/states/Swimming/Boot'
// const BootState = () => import(/* webpackChunkName: "BootState" */ '@/states/Swimming/Boot')
// import GameState from '@/states/Game'
import responsive from '../states/responsive_helper'
import ClassementGame from './Competitionpage/components/ClassementGame.vue'
import Sound from '@/components/Sound'
import SwimmingTuto from '@/pages/TutoPage/Swimming.vue'
import HistoryScores from '@/pages/Trainingpage/components/HistoryScores.vue'
import store from '../store'

import config from '@/config'

export default {
  name: 'SwimmingGame',
  components:{
    ClassementGame,
    SwimmingTuto,
    HistoryScores,
    Sound
  },
  data() {
    return {
      show: false,
      first: true,
      money: 10,
      showTuto: false,
    };
  },
  computed: {
    gameLoaded () {
      return store.state.swimmingLoaded
    },
    gameIsFinished () {
      console.log('gameIsFinished');
      return store.state.isSwimmingFinish
    },
    getHistory () {
      const history = window.localStorage.hasOwnProperty('natationPersonnalScore')
      ? JSON.parse(window.localStorage.getItem('natationPersonnalScore')) : []
      return history.slice(0,19)
    }
  },
  mounted () {
    store.commit('runSwimmingGame')
    store.commit('updateTutoOk', true)
    if (!window.localStorage.getItem('swimmingTutoShown')) {
      store.commit('updateTutoOk', false)
      window.localStorage.setItem('swimmingTutoShown', 'true')
      this.showTuto = true
    }
    this.runGame()
  },
  beforeDestroy () {
    store.commit('sprintFinish', true)
    store.commit('destroySwimmingGame')
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
.money {
  position: absolute;
  z-index: 999;
  top: 30vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 19vw;
  font-family:"myfrida_bold";
  font-size: 1em;
  color: white;
  background: #4F2F90;
  border-radius: 5px;
  margin: auto;
  padding: 0 4px;
  letter-spacing: 1.5px;
  margin-top: 3vh;
}
.money img {
  transform: scale(0.7)
}
#wrapper {
  height: 100vh;
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
#load {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url('../assets/exemple_chargement.gif');
  background-size: cover;
  background-position: center;
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
