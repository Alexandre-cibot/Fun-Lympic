<template>
  <div style="padding-bottom: 3vh;">
      <Profile :firstName="currentUser.name" :flag="currentUser.flag" :picture="currentUser.picture" :other="true" :competition="true" :defeat="currentUser.defeats" :victory="currentUser.victories" @chooseFlag="$emit('chooseFlag')"/>
      <div class="blockChallengesBtn">
        <BasicButton class="challengeBtn animated hidden" title="défie un ami" btnColor="yellow" image="facebook" @click="chooseFriends" />
        <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="yellow" image="place" /> 
      </div>
      <h3 class="animated fadeInUp">
        <span v-if="hasPendingChallenges">Tes défis</span>
        <span v-else>Auncun défis en cours !</span>
      </h3>
      <div v-for="chall in challengesPending" v-if="chall.originUserId !== currentUser.id" :key="chall.index">
        <ChallengeButton class="animated hidden"
          :challengerName="chall.originGivenName" 
          :challengerPoints="chall.scores.origin"
          status="pending"
          :image="chall.originPicture"
          :finish="false" 
          @click.native="playWithFriend(chall)"
        />
      </div>
      <h3 class="animated fadeInUp">
        <span v-if="hasCompletedChallenges">Tes défis terminés</span>
      </h3>
      <div v-for="chall in challengesCompleted" :key="chall.index">
        <ChallengeButton class="animated hidden" 
          :challengerName="chall.originGivenName" 
          :challengerPoints="chall.scores.origin"
          :currentName="chall.targetGivenName" 
          :currentPoints="chall.scores.target"
          :status="getChallengeStatus(chall)"
          :image="chall.originPicture"
          :finish="true" 
          @click.native="showResult(chall)"
        />
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile.vue';
import BasicButton from '@/components/BasicButton';
import ChallengeButton from '@/components/ChallengeButton';

export default {
  name: 'Challengepage',
  props:['profile'],
  components: {
    Navbar,
    BasicButton,
    ChallengeButton,
    Profile
  },
  data() {
    console.log("profile", this.profile);
    return {
      msg: 'CompetitionDashboard',
      currentUser: 
        {
          id: this.profile.id,
          name: this.profile.given_name,
          flag: require('@/assets/flag/France.png'),
          picture: this.profile.picture,
          victories : this.profile.victories,
          defeats: this.profile.defeats,
        },
      challengesPending: this.profile.challenges_pending || [],
      challengesCompleted: this.profile.challenges_completed || []
    };
  },
  computed: {
    hasPendingChallenges() {
      return this.challengesPending.filter(chall => {
          return chall.originUserId !== this.currentUser.id
        }).length
    },
    hasCompletedChallenges() {
      // We also show defis when we are the origin.
      return this.challengesCompleted.length
    }
  },
  methods: {
    chooseFriends() {
      this.$emit('chooseFriends');
    },
    playWithFriend(chall){
      this.$emit('playWithFriend', chall);
    },
    showResult(chall) {
      if(this.getChallengeStatus(chall) === 'victory') {
        this.$emit('winGame', chall);
      } else {
        this.$emit('loseGame', chall);
      }
    },
    getChallengeStatus(challenge) {
      const myScore = challenge.originUserId === this.currentUser.id ? challenge.scores.origin : challenge.scores.target;
      const challengerScore = challenge.originUserId !== this.currentUser.id ? challenge.scores.origin : challenge.scores.target;
      return myScore > challengerScore ? 'victory' : 'defeat'
    }
  },
  mounted() {
    let buttons = this.$el.querySelectorAll('.hidden');
    buttons.forEach((btn, idx) => {
      setTimeout(()=>{
        if ([0,1].includes(idx)) {
          btn.classList.add('slideInLeft', 'visible');
        } else {
          btn.classList.add('zoomIn', 'visible')
        }
      }, idx * 100)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-wrapper {
  background: #F5F5F5;
  height: 100vh;
}
h3 {
  text-transform: uppercase;
  color: #ffffff;
  margin: 8vh 0 2vh 0;
}
.challengeBtn {
  margin-bottom: 3vh;
}
.blockChallengesBtn {
  margin-top:8vh;
}
</style>
