<template>
  <div style="padding-bottom: 3vh;">
      <div v-for="user in currentUser" :key="user.index">
        <Profile :firstName="user.firstname" :flag="user.flag" :picture="user.picture" :other="true" :competition="true" :defeat="profile.defeats" :victory="profile.victories"/>
      </div>
      <BasicButton class="challengeBtn animated hidden" title="défie un ami" btnColor="yellow" image="facebook" @click="chooseFlag" />
      <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="yellow" image="place" />
      <h3 class="animated fadeInUp">Tes défis</h3>
      <div v-for="chall in challengesNotDone" :key="chall.index">
        <ChallengeButton class="animated hidden" :challengerName="chall.challName" :challengerPoints="chall.challPoints" logo="challenge" :image="chall.picture" :finish="notFinish" />
      </div>
      <h3 class="animated fadeInUp">Tes défis terminés</h3>
      <div v-for="chall in challengesDone" :key="chall.index">
        <ChallengeButton class="animated hidden" :challengerName="chall.challName" :challengerPoints="chall.challPoints" :currentName="curName" :currentPoints="chall.curPoints" :logo="chall.status" :image="chall.picture" :finish="finish" />
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
      curName: "Véronique",
      currentUser: [
        {
          firstname: this.profile.name,
          flag: require('@/assets/flag/France.png'),
          picture: this.profile.picture,
          victory : 90,
          defeat: 23
        },
      ],
       challengesNotDone: [
        {
          challName: "Julien",
          challPoints: 120,
          picture: "enora",
        },
        {
          challName: "Enora",
          challPoints: 150,
          picture: "enora",
        },
      ],
      challengesDone: [
        {
          challName: "Enora",
          challPoints: 120,
          curPoints: 150,
          status: "lose",
          picture: "enora",
        },
        {
          challName: "Enora",
          challPoints: 150,
          curPoints: 120,
          status: "win",
          picture: "enora",
        },
        {
          challName: "Enora",
          challPoints: 120,
          curPoints: 150,
          status: "win",
          picture: "enora",
        },
        {
          challName: "Enora",
          challPoints: 300,
          curPoints: 150,
          status: "win",
          picture: "enora",
        },
        {
          challName: "Enora",
          challPoints: 120,
          curPoints: 150,
          status: "lose",
          picture: "enora",
        }
      ]
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
