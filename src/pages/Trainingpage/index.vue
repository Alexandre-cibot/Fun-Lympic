<template>
<div class="page-wrapper">
  <Navbar text="Entrainement" secondBtn="medal" />
  <div class="wrapper">
    <h2>Meilleur score</h2>
    <p class="score">30</p>
    <Card text="Athlétisme" image="athletisme" @click="runAthletismeGame" />
    <Classement firstScore="237" secondScore="183" thirdScore="93" image="@/assets/alex.png"/>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import Classement from '@/components/Classement';
import DidYouKnow from '@/components/DidYouKnow';

export default {
  name: 'Training',
  components: {
    Card,
    Navbar,
    Classement,
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
}
h2, p {
  font-family: 'Roboto';
  font-weight: 100;
  text-align: center;
  padding: 0;
  margin: 0;
}
h2 {
  font-size: 1.1em;  
  text-transform: uppercase;
}
p {
  margin-top: 0;
}
.score {
  font-size: 2.2em;
  margin-bottom: 1vh;
}
</style>
