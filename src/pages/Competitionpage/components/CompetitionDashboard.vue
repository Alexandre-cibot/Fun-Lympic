<template>
  <div class="wrapper">
      <BasicButton class="challengeBtn" title="défier un ami" btnColor="btnYellow" image="facebook" />
      <BasicButton class="challengeBtn" title="défi à proximité" btnColor="btnYellow" image="place" />
      <h3>Ils te défient</h3>
        <ChallengeButton challengerName="Enora" :challengerPoints="120" btnColor="btnGreen" logo="win" image="julien" :finish="true" />
      <h3>Les défis terminés</h3>
        <ChallengeButton challengerName="Enora" :challengerPoints="120" currentName="Véronique" :currentPoints="150" btnColor="btnGreen" logo="win" image="enora" :finish="false" />
        <ChallengeButton challengerName="Enora" :challengerPoints="100" currentName="Véronique" :currentPoints="50" btnColor="btnRed" logo="lose" image="enora" :finish="false"/>
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
    };
  },
  methods: {
    runAthletismeGame () {
      console.log('run game');
      this.$router.push({path: '/athletics'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.page-wrapper {
  background: #F5F5F5;
  height: 100vh;
}
.wrapper {
  background: #F5F5F5;
  /* overflow: hidden;
  height: calc(100% - 15vh); */
  margin: 0 30px;
}
h3 {
  text-transform: uppercase;
  font-family: 'myfrida';
  color: #393939;
  margin-top: 5vh;
}
.challengeBtn {
  margin-bottom: 5vh;
}
</style>
