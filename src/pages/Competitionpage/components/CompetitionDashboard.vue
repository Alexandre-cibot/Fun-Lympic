<template>
  <div style="padding-bottom: 3vh;">
      <Profile :firstName="currentUser.name" :flag="currentUser.flag" :picture="currentUser.picture" :other="true" :competition="true" :defeat="profile.defeats" :victory="profile.victories"/>
      <BasicButton class="challengeBtn animated hidden" title="défier un ami" btnColor="yellow" image="facebook" @click="chooseFlag" />
      <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="yellow" image="place" />
      <h3 class="animated fadeInUp">Ils te défient</h3>
      <div v-for="chall in challengesPending" :key="chall.index">
        <ChallengeButton class="animated hidden" :challengerName="chall.challengerName" :challengerPoints="chall.challengerScore" logo="challenge" :image="chall.challengerPicture" :finish="notFinish" />
      </div>
      <h3 class="animated fadeInUp">Les défis terminés</h3>
      <div v-for="chall in challengesCompleted" :key="chall.index">
        <ChallengeButton class="animated hidden" :challengerName="chall.challengerName" :challengerPoints="chall.challengerScore" :currentName="currentUser.name" :currentPoints="chall.myScore" :logo="chall.status" :image="chall.challengerPicture" :finish="finish" />
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
      msg: 'test',
      finish: false,
      notFinish: true,
      currentUser: 
        {
          name: this.profile.given_name,
          flag: require('@/assets/flag/France.png'),
          picture: this.profile.picture,
          victory : 90,
          defeat: 23
        },
      challengesPending: this.profile.challenges_pending || [],
      challengesCompleted: this.profile.challenges_completed || []
    };
  },
  methods: {
    chooseFlag() {
      this.$emit('chooseFlag');
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
</style>
