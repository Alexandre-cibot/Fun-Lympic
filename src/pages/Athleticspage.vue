<template>
  <div id="wrapper">
    <div id="load" v-show="!gameLoaded"><img src="../../assets/images/Ecran_chargement-min.gif" alt=""></div>
    <div id="content" v-show="gameLoaded"></div>
    <AthleticsTuto v-if="showTuto" @hideMe="hideTuto"/>
    <div v-show="gameLoaded" id="bg"></div>
    <HistoryScores v-if="gameIsFinished" :history='getHistory' />
    <div class="gif" v-if="gameIsFinished && gif"><Sound file="artifice"/></div>
    <div v-if="gameIsFinished" class="money">
      <img src="@/assets/coin.png" alt="jo_coin">
      +{{money}}
    </div>


  </div>
</template>

<script>

import Phaser from 'phaser'
import HistoryScores from '@/pages/Trainingpage/components/HistoryScores.vue'
import BootState from '@/states/Athletics/Boot'
import Sound from '@/components/Sound'
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
      if(store.state.isSprintFinish){
        setTimeout(()=>{
        this.gif = false;
      }, 2000)
      }
      return store.state.isSprintFinish
    },
    getHistory () {
      return window.localStorage.hasOwnProperty('athelicsPersonnalScore')
      ? JSON.parse(window.localStorage.getItem('athelicsPersonnalScore')) : []
    }
  },
  data () {
    return {
      gif: true,
      showTuto: false,
      money: 10
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
    store.commit('sprintFinish', true)
    store.commit('destroySprintGame')
  },
  components:{
    AthleticsTuto,
    HistoryScores,
    Sound
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
  width: 100%;
  overflow: hidden;
}
#load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background:#e35673;
}
#load img {
  height: 20vh;
}
.gif {
  position: absolute;
  z-index: 999;
  top:0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url('../assets/confettis.gif');
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
