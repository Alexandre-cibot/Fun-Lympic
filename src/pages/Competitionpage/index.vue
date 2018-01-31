<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="compétitions" secondBtn="podium" @goBack="goBack"/>
    <div class="wrapper">
      <!-- <ConnexionFB v-if="currentState === 'notConnected'" @showChallenge="showChallenge"/>
      <CompetitionDashboard v-if="currentState === 'competitionDashboard'" @chooseFriends="chooseFriends"/>
      <Friends v-if="currentState === 'chooseFriends'" @friend="friend"/> 
      <ChallengeFriend v-if="currentState === 'friend'" /> -->
      <BeforeGame /> 
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
// Composants propre a cette page
import ConnexionFB from './components/ConnexionFB.vue';
import CompetitionDashboard from './components/CompetitionDashboard';
import Friends from './components/Friends.vue';
import ChallengeFriend from './components/ChallengeFriend.vue';
import BeforeGame from './components/BeforeGame.vue';

export default {
  name: 'Stade',
  components: {
    Navbar,
    Friends,
    BasicButton,
    ConnexionFB,
    ChallengeFriend,
    CompetitionDashboard,
    BeforeGame
  },
  data() {
    return {
      currentState: 'competitionDashboard', //notConnected, competitionDashboard, chooseFriends
      history: [],
      connexion : false,
      friends : true,
    };
  },
  methods: {
    showChallenge() {
      this.connexion = !this.connexion;
    },
    chooseFriends() {
      this.updateHistory(this.currentState);
      this.currentState = "chooseFriends"
    },
    friend() {
      this.updateHistory(this.currentState);
      this.currentState = "friend";
    },
    updateHistory(previousState) {
      this.history.push(previousState);
    },
    goBack(){
      let previousState = this.history[this.history.length-1];
      if (!previousState || this.currentState === 'competitionDashboard') {
        this.$router.push('/')
      } else {
        this.currentState = previousState; // Go to the previous state
        this.history.pop(); // Remove the last one
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {
  height: 100%;
  overflow-y: hidden;
}
.wrapper {
  display:block;
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 15vh);
  padding: 0 30px;
  margin-top: 8px; /* Because header has a box-shadow bottom of 8px */
  padding-top: 3vh;
}
/* Remove the scrollbar  */
.wrapper::-webkit-scrollbar { width: 0 !important }
</style>
