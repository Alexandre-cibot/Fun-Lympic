<template>
  <div style="padding-bottom: 3vh;">
      <BasicButton class="challengeBtn animated hidden" title="défier un ami" btnColor="yellow" image="facebook" @click="chooseFriends" />
      <BasicButton class="challengeBtn animated hidden" title="défi à proximité" btnColor="yellow" image="place" />
      <h3 class="animated fadeInUp">Ils te défient</h3>
      <div v-for="chall in challengesNotDone" :key="chall.challName">
        <ChallengeButton class="animated hidden" :challengerName="chall.challName" :challengerPoints="chall.challPoints" logo="challenge" :image="chall.picture" :finish="notFinish" />
      </div>
      <h3 class="animated fadeInUp">Les défis terminés</h3>
      <div v-for="chall in challengesDone" :key="chall.challName">
        <ChallengeButton class="animated hidden" :challengerName="chall.challName" :challengerPoints="chall.challPoints" :currentName="curName" :currentPoints="chall.curPoints" :logo="chall.status" :image="chall.picture" :finish="finish" />
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
import ChallengeButton from '@/components/ChallengeButton';

export default {
  name: 'Challengepage',
  components: {
    Navbar,
    BasicButton,
    ChallengeButton
  },
  data() {
    return {
      msg: 'test',
      finish: false,
      notFinish: true,
      curName: "Véronique",
       challengesNotDone: [
        {
          challName: "Enora",
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
    chooseFriends() {
      this.$emit('chooseFriends');
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
  font-family: 'myfrida_bold';
  color: #ffffff;
  margin-top: 5vh;
}
.challengeBtn {
  margin-bottom: 5vh;
}
</style>
