<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar v-if="currentState != 'winGame' && currentState != 'loseGame' && currentState != 'playWithFriend'" text="Défie tes amis" secondBtn="podium" @goBack="goBack"/>
    <div class="wrapper">
      <ConnexionFB v-if="!authenticated" :authenticated="authenticated" :auth="auth" />
      <div v-else style="height:100%">
        <CompetitionDashboard v-if="currentState === 'competitionDashboard' || currentState === 'chooseFlag'" :profile="profile" @chooseFlag="chooseFlag" @playWithFriend="playWithFriend" @winGame="winGame" @loseGame="loseGame"/>
        <ChallengeGame v-if="currentState === 'playWithFriend'" @pushRoute="pushRoute"/>
        <WinGame v-if="currentState === 'winGame'" @pushRoute="pushRoute"/>
        <LoseGame  v-if="currentState === 'loseGame'" @pushRoute="pushRoute"/>
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
import API from '@/api/index.js'
// Composants propre a cette page
import BeforeGame from './components/BeforeGame.vue';
import ClassementGame from './components/ClassementGame.vue';
import CompetitionDashboard from './components/CompetitionDashboard';
import ConnexionFB from './components/ConnexionFB.vue';
import ChallengeFriend from './components/ChallengeFriend.vue';
import Friends from './components/Friends.vue';
import Nation from './components/Nation';
import ChallengeGame from './components/ChallengeGame';
import WinGame from './components/WinGame';
import LoseGame from './components/LoseGame';

export default {
  name: 'Stade',
  props: ['auth', 'authenticated'],
  components: {
    Navbar,
    Friends,
    BasicButton,
    WinGame,
    LoseGame,
    ConnexionFB,
    ChallengeGame,
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
  computed: {
    profile() {
      if (this.authenticated) {
        console.log('Données du cache utilsé')
        return this.auth.getUserProfileFromCache();
      } else {
        console.log("Connecté, en attente de syncronisation des données avec le serveurs.")
      }
    }
  },
  methods: {
    closeModal() {
      this.updateHistory(this.currentState);
      this.currentState = "competitionDashboard";
    },
    pushRoute(){
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
    playWithFriend(){
      this.updateHistory(this.currentState);
      this.currentState = "playWithFriend"
    },
    chooseFlag() {
      this.updateHistory(this.currentState);
      this.currentState = "chooseFlag"
    },
    loseGame(){
      this.updateHistory(this.currentState);
      this.currentState = "loseGame";
    },
    winGame(){
      this.updateHistory(this.currentState);
      this.currentState = "winGame";
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
  },
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
