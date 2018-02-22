<template>
  <div style="padding-bottom: 3vh;">
      <Profile :firstName="currentUser.name" :flag="currentUser.flag" :picture="currentUser.picture" :other="true" :competition="true" :defeat="currentUser.defeats" :victory="currentUser.victories" @chooseFlag="$emit('chooseFlag')"/>
      <div class="blockChallengesBtn">
        <BasicButton class="challengeBtn animated hidden" title="défie un ami" btnColor="yellow" image="facebook" @click="chooseFriends" />
        <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="yellow" image="place" /> 
      </div>
      <h3 class="animated fadeInUp">Tes défis</h3>
      <div v-for="chall in challengesPending" :key="chall.index">
        <ChallengeButton class="animated hidden" :challengerName="chall.challengerName" :challengerPoints="chall.challengerScore" logo="challenge" :image="chall.challengerPicture" :finish="false"  @click.native="playWithFriend" />
      </div>
      <h3 class="animated fadeInUp">Tes défis terminés</h3>
      <div v-for="chall in challengesCompleted" :key="chall.index">
        <ChallengeButton v-if="chall.status == 'victory'" class="animated hidden" :challengerName="chall.challengerName" :challengerPoints="chall.challengerScore" :currentName="currentUser.name" :currentPoints="chall.myScore" :logo="chall.status" :image="chall.challengerPicture" :finish="true" @click.native="winGame"/>
        <ChallengeButton v-else class="animated hidden" :challengerName="chall.challengerName" :challengerPoints="chall.challengerScore" :currentName="currentUser.name" :currentPoints="chall.myScore" :logo="chall.status" :image="chall.challengerPicture" :finish="true"  @click.native="loseGame"/>
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
  methods: {
    chooseFriends() {
      this.$emit('chooseFriends');
    },
    playWithFriend(){
      this.$emit('playWithFriend');
    },
    winGame(){
      this.$emit('winGame');
    },
    loseGame(){
      this.$emit('loseGame');
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
