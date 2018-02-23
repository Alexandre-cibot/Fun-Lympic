<template>
  <div class="before">
    <div class="background"></div>
      <div class="circle_first">
        <Profile :firstName="users.winner.name" flag="fr-FR" :score="users.winner.score" :picture="users.winner.picture" :money="20" :showStats="false" :other="false"/>
      </div>
    <button class="animated hidden">
      <h2>BOOOOOOUUH !</h2>
    </button>
    <div class="circle_first">
        <Profile :firstName="users.looser.name" flag="fr-FR" :picture="users.looser.picture" :score="users.looser.score" :showStats="false" :other="true"/>
    </div>
    <button class="next" @click="pushRoute">
      <img src="@/assets/arrow_right.png" alt="">
    </button>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';

export default {
  name: 'WinGame',
  props: ['challenge'],
  data() {
    return {
    }
  },
  components: {
    Profile
  },
  computed: {
    users() {
      const originIsTheWinner = this.challenge.scores.origin > this.challenge.scores.target;
      return {
        winner: {
          name: originIsTheWinner ? this.challenge.originGivenName : this.challenge.targetGivenName,
          picture: originIsTheWinner ? this.challenge.originPicture : this.challenge.targetPicture,
          score: originIsTheWinner ? this.challenge.scores.origin : this.challenge.scores.target
        },
        looser: {
          name: originIsTheWinner ? this.challenge.targetGivenName : this.challenge.originGivenName,
          picture: originIsTheWinner ? this.challenge.targetPicture : this.challenge.originPicture,
          score: originIsTheWinner ? this.challenge.scores.target : this.challenge.scores.origin 
        } 
      }
    }
  },
  methods:{
    pushRoute(){
      this.$emit('pushRoute');
    }
  },
  mounted() {
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
  border-radius: 10px;
  padding: 15px 10px;
  font-size: 1.2em;
  background: white;
  width: 80%;
  margin-top: -4vh;
}
button h2, h3 {
  color : #2D1862;
  float: right;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
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
  top: 0;
  height: 50vh;
  width: 100%;
  border-radius: 0 0 30px 30px;
  background: #2d1862;
}
.before {
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  display: flex;
  /* add - 3vh for the wrapper */
  margin-top: -3vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.circle_first{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5vh 0;
}
.money{
  margin-top: 3vh;
}
.circle_second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
}
.next{
  width: auto;
  background: #ffd360;
  float: right;
  position: absolute;
  right: 7vw;
  bottom: 3vh;
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

