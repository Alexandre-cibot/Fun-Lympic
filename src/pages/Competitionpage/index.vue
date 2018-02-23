<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar v-if="currentState != 'winGame' && currentState != 'loseGame' && currentState != 'playWithFriend'" text="Défie tes amis" secondBtn="podium" @goBack="goBack"/>
    <div class="wrapper">
      <ConnexionFB v-if="!authenticated" :authenticated="authenticated" :auth="auth" />
      <div v-else style="height:100%">
        <CompetitionDashboard v-if="currentState === 'competitionDashboard' || currentState === 'chooseFlag'" :profile="profile" @chooseFriends="chooseFriends" @chooseFlag="showFlags" @playWithFriend="playWithFriend" @winGame="winGame" @loseGame="loseGame"/>
        <ChallengeGame v-if="currentState === 'playWithFriend'" @pushRoute="pushRoute"/>
        <WinGame v-if="currentState === 'winGame'" :challenge="statsCurrChallenge" @pushRoute="pushRoute"/>
        <LoseGame  v-if="currentState === 'loseGame'" :challenge="statsCurrChallenge" @pushRoute="pushRoute"/>
        <Nation v-if="currentState === 'chooseFlag'"  @closeModal="closeModal" @updateFlag="updateFlag" />
        <Friends v-if="currentState === 'chooseFriends'" :friends="profile.friends" @selectFriend="selectFriend"/>
        <ChallengeFriend v-if="currentState === 'friend'" :challenger="selectedFriend" @before="before" />
        <BeforeGame v-if="currentState === 'before'" :game="selectedGame" :profile="profile" :challenger="selectedFriend" />
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
      selectedFriend: {},
      reloadMode: false,
      updatedProfile: null,
      selectedGame: "atlhetics",
      statsCurrChallenge: {}
    };
  },
  computed: {
    profile() {
      if (this.authenticated) {
        console.log('Données du cache utilsé')
        return this.reloadMode ? this.updatedProfile : this.auth.getUserProfileFromCache();
      } else {
        console.log("Connecté, en attente de syncronisation des données avec le serveurs.")
      }
    }
  },
  methods: {
    showFlags() {
      this.currentState = "chooseFlag";
    },
    closeModal() {
      this.updateHistory(this.currentState);
      this.currentState = "competitionDashboard";
    },
    updateFlag() {
      console.log('TODO: Send request to update flag')
    },
    pushRoute(){
      this.updateHistory(this.currentState);
      this.currentState = "competitionDashboard";
    },
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
    loseGame(chall){
      this.updateHistory(this.currentState);
      this.statsCurrChallenge = chall
      this.currentState = "loseGame";
    },
    winGame(chall){
      this.updateHistory(this.currentState);
      this.statsCurrChallenge = chall
      this.currentState = "winGame";
    },
    selectFriend(friend) {
      this.selectedFriend = friend;
      this.updateHistory(this.currentState);
      this.currentState = "friend";
    },
    before(gameName) {
      this.updateHistory(this.currentState);
      this.selectedGame = gameName
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
    },
    reloadProfile() {
      API.getProfile(this.profile.id).then((response) => {
        // If user doesn't exist, logout
        if(!Object.keys(response.data).length) {
          this.auth.logout();
          return;
        }
        console.log('Profile updated');
        this.reloadMode = true;
        this.updatedProfile = response.data;
        this.auth.setLocalStorage(response);
        console.log('Coins', this.profile.coins)
        setTimeout(() => {
          this.reloadProfile()
        }, 6000);
      })
    }
  },
  mounted() {
      if(this.authenticated && this.profile) {
        this.reloadProfile()
      } else {
        console.log('reloadProfile blocked');
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
