<template>
  <div class="before">
    <div class="background"></div>
      <div class="circle_first">
        <Profile :firstName="profile.given_name" :flag="nationsObj[profile.locale].flag" :picture="profile.picture" :showStats="false" :other="false" :navbar="true"/>
      </div>
    <button class="animated hidden">
      <img src="@/assets/win_white.svg" alt="" class="icon_button">
      <h2 @click="runGame">Jouer</h2>
    </button>
    <div class="circle_first">
        <Profile :firstName="challenger.given_name" :flag="nationsObj[profile.locale].flag" :picture="challenger.picture" :showStats="false" :other="true" :navbar="true"/>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import store from '../../../store'

export default {
  name: 'BeforeGame',
  props:['game', 'challenger', 'profile'],
  components: {
    Profile
  },
  data() {
    return {
       nationsObj: {
        'fr-FR': {
          flag: require('@/assets/flag/France.png'),
        },
        'de_DE': {
          flag: require('@/assets/flag/Allemagne.png'),
        },
        'fr_CA': {
          flag: require('@/assets/flag/Canada.png'),
        },
        'zh_CN': {
          flag: require('@/assets/flag/Chine.png'),
        },
        'es_ES': {
          flag: require('@/assets/flag/Espagne.png'),
        },
        'en_US': {
          flag: require('@/assets/flag/Etats-Unis.png'),
        },
        'el_GR': {
          flag: require('@/assets/flag/Grece.png'),
        },
        'it_IT': {
          flag: require('@/assets/flag/Italie.png'),
        },
        'ja_JP': {
          flag: require('@/assets/flag/Japon.png'),
        },
        'pt_PT': {
          flag: require('@/assets/flag/Grece.png'),
        },
        'en_GB': {
          flag: require('@/assets/flag/Royaume-Uni.png'),
        },
        'ru_RU': {        
          flag: require('@/assets/flag/Russie.png'),
        },
        'ru_RU': {
          flag: require('@/assets/flag/Suede.png'),
        },
        PaysBas: {
          flag: require('@/assets/flag/Pays-Bas.png'),
        },
        Suisse: {
          flag: require('@/assets/flag/Suisse.png'),
        },
        Belgique: {
          flag: require('@/assets/flag/Belgique.png'),
        },
      }
    }
  },
  methods:{
    runGame(){
      this.$router.push({path: `/${this.game}`})
    },
    flagPath(userType) {
      switch(this[userType].locale) {
        case 'fr-FR': 
          return this.nationsObj.France.flag;
        break;
        default:
          return require('@/assets/flag/France.png');
        break;
      }
    }
  },
  mounted() {
    store.commit('updateGameOrigin', 'competition')
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        if (idx === 1) {
          btn.classList.add('slideInRight', 'visible')
        } else {
          btn.classList.add('zoomIn', 'visible')
        }
      }, idx * 200)
    })
  }
}
</script>

<style scoped>

button {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  color : white;
  border-radius: 15px;
  padding: 10px 5px;
  font-size: 1.4em;
  background: #ffd360;
  box-shadow: 0px 8px 0px 0px #F1B946;
  width: 65%;
}
button h2, h3 {
  float: right;
  text-transform: uppercase;
  padding-right: 1em;
}
.icon_button {
  float: left;
  height: 6vh;
  padding-left: 10px;
}
.infos {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20vh;
}
.infos img {
  display: inline-block;
  height: 3vh;
}
.infos h3 {
  float: left;
  padding-right: 10px;
}
.background{
  position: absolute;
  top: 60px;
  height: 47vh;
  width: 100%;
  border-radius: 0 0 30px 30px;
  background: #2d1862;
}
.before {
  display: flex;
  height: 100%;
  /* add - 3vh for the wrapper */
  margin-top: -3vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.circle_first{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
}
.circle_second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
}
.circle {
  height: 20vh;
}
.first_character {
  position: absolute;
  border: 7px solid #a997c9;
  border-radius: 50%;
  height: 11vh;
}
.second_character {
  position: absolute;
  border: 7px solid #a997c9;
  border-radius: 50%;
  height: 11vh;
}
</style>

