<template>
  <div class="before">
    <div class="background"></div>
      <div v-for="user in currentUser" :key="user.index" class="circle_first">
        <Profile :firstName="user.firstname" :flag="user.flag" :picture="user.picture" :other="false" :navbar="true"/>
      </div>
    <button class="animated hidden">
      <img src="@/assets/win_white.svg" alt="" class="icon_button">
      <h2 @click="runGame">Jouer</h2>
    </button>
    <div v-for="user in otherUser" :key="user.index" class="circle_first">
        <Profile :firstName="user.firstname" :flag="user.flag" :picture="user.picture" :other="true" :navbar="true"/>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import store from '../../../store'

export default {
  name: 'BeforeGame',
  props:['game'],
  data() {
    return {
      currentUser: [
        {
          firstname: "Alexandre",
          flag: require('@/assets/flag/France.png'),
          picture: require('@/assets/alex.png'),
        },
      ],
      otherUser: [
        {
          firstname: "Enora",
          flag: require('@/assets/flag/France.png'),
          picture: require('@/assets/enora.jpg'),
        },
      ]
    }
  },
  components: {
    Profile
  },
  methods:{
    runGame(){
      console.log(this.game)
      this.$router.push({path: `/${this.game}`})
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

