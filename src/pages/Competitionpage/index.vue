<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="compétitions" secondBtn="podium" @goBack="goBack"/>
    <div class="wrapper">
      <ConnexionFB v-if="!authenticated" :authenticated="authenticated" :auth="auth" />
      <div v-else>
        <CompetitionDashboard v-if="currentState === 'competitionDashboard' || currentState === 'chooseFlag'" @chooseFlag="chooseFlag"/>
        <Nation v-if="currentState === 'chooseFlag'"  @closeModal="closeModal" @chooseFriends="chooseFriends" />
        <Friends v-if="currentState === 'chooseFriends'" @friend="friend"/> 
        <ChallengeFriend v-if="currentState === 'friend'" @before="before" /> 
        <BeforeGame v-if="currentState === 'before'" />
        <!-- <ClassementGame /> -->
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
// Composants propre a cette page
import BeforeGame from './components/BeforeGame.vue';
import ClassementGame from './components/ClassementGame.vue';
import CompetitionDashboard from './components/CompetitionDashboard';
import ConnexionFB from './components/ConnexionFB.vue';
import ChallengeFriend from './components/ChallengeFriend.vue';
import Friends from './components/Friends.vue';
import Nation from './components/Nation';

export default {
  name: 'Stade',
  props: ['auth', 'authenticated'],
  components: {
    Navbar,
    Friends,
    BasicButton,
    ConnexionFB,
    ChallengeFriend,
    CompetitionDashboard,
    BeforeGame,
    ClassementGame,
    Nation
  },
  data() {
    return {
      currentState: 'competitionDashboard', // competitionDashboard, chooseFriends
      history: [],
      connexion : false,
      friends : true,
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.updateHistory(this.currentState);
      this.currentState = "competitionDashboard";
    },
    // connection() {
    //   this.connexion = !this.connexion;
    // },
    chooseFriends() {
      this.updateHistory(this.currentState);
      this.currentState = "chooseFriends"
    },
    chooseFlag() {
      this.updateHistory(this.currentState);
      this.currentState = "chooseFlag"
    },
    friend() {
      this.updateHistory(this.currentState);
      this.currentState = "friend";
    },
    before() {
      this.updateHistory(this.currentState);
      this.currentState = "before";
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
  overflow-y: scroll;
  height: calc(100% - 13vh);
  padding: 0 30px;
  padding-top: 3vh;
}
/* Remove the scrollbar  */
.wrapper::-webkit-scrollbar { width: 0 !important }
</style>
