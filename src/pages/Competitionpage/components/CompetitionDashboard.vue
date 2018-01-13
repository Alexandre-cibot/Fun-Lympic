<template>
<div class="page-wrapper">
  <Navbar text="Le stade" secondBtn="medal" />
  <div class="wrapper">
      <BasicButton class="challengeBtn" title="defier un ami" btnColor="btnYellow" />
      <BasicButton class="challengeBtn" title="defi aleatoire" btnColor="btnYellow" />
      <h3>Ils te défient</h3>
      <h3>Les défis terminés</h3>
  </div>
</div>
</template>

<script>
import Navbar from '../../../components/Navbar';
import BasicButton from '../../../components/BasicButton';

export default {
  name: 'Challengepage',
  components: {
    Navbar,
    BasicButton
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
  overflow: hidden;
  height: calc(100% - 15vh);
  margin: 0 30px;
}
h3 {
  text-transform: uppercase;
  font-family: 'Helvetica';
}
.challengeBtn {
  margin-bottom: 5vh;
}
</style>
