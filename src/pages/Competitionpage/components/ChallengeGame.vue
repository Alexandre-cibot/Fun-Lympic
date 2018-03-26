<template>
  <div class="before">
    <div class="background"></div>
      <div class="circle_first">
        <Profile :firstName="challenge.originGivenName" flag="fr-FR" :picture="challenge.originPicture" :score="challenge.scores.origin" :money="20" :showStats="false" :other="false" />
      </div>
    <button class="animated hidden">
      <h2 @click="runGame">ESSAYES DE ME BATTRE</h2>
    </button>
    <div class="circle_first">
      <Profile :firstName="challenge.targetGivenName" flag="fr-FR" :picture="challenge.targetPicture" :showStats="false" :other="true" />
    </div>
    <button class="next" @click="pushRoute">
      <img src="@/assets/arrow_right.png" alt="">
    </button>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import store from '@/store';

export default {
  name: 'ChallengeGame',
  props: ['challenge'],
  data() {
    return {
      currentUser: [
        {
          firstname: "Alexandre",
          flag: require('@/assets/flag/France.png'),
          picture: require('@/assets/alex.png'),
          score: "2:54"
        },
      ],
      otherUser: [
        {
          firstname: "Enora",
          flag: require('@/assets/flag/France.png'),
          picture: require('@/assets/enora.jpg'),
          score: " "
        },
      ]
    }
  },
  components: {
    Profile
  },
  methods:{
    runGame(){
      store.commit('setChallengeIdToRespond', this.challenge.challengeId)
      this.$router.push({path: `/${this.challenge.gameName}`})
    },
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
  color : white;
  border-radius: 10px;
  padding: 15px 10px;
  font-size: 1.2em;
  background: #ffd360;
  box-shadow: 0px 8px 0px 0px #F1B946;
  width: 80%;
  margin-top: -4vh;
}
button h2, h3 {
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
.next{
  width: auto;
  background: #ffd360;
  float: right;
  position: absolute;
  right: 7vw;
  bottom: 3vh;
  box-shadow: none;
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

