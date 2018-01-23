<!--
Ici, on testera l'implementation de phaser.
Plus tard il y aura une page de selection de jeux en amont, mais ce n'est pas interessant pour le moment.
Pour l'instant, nous testons ici.
-->
<template>
  <div class="wrapper-page">
    <Navbar text="compétition" secondBtn="podium"/>
      <ConnexionFB v-if="false" @showChallenge="showChallenge"/>
      <CompetitionDashboard v-if="false"/>
      <Friends v-if="friends"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
// Composants propre a cette page
import ConnexionFB from './components/ConnexionFB.vue';
import CompetitionDashboard from './components/CompetitionDashboard';
import Friends from './components/Friends.vue';

export default {
  name: 'Stade',
  components: {
    Navbar,
    Friends,
    BasicButton,
    ConnexionFB,
    CompetitionDashboard
  },
  data() {
    return {
      msg: 'test',
      connexion : false,
      friends : true,
    };
  },
  methods: {
    showChallenge() {
      this.connexion = !this.connexion;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {
  background: #F5F5F5;
  min-height:100%;
}
.wrapper {
  /* overflow: hidden; */
  min-height: calc(100% - 15vh);
  flex-direction: column;
  justify-content: space-around;
  margin: 0 30px;
}

</style>
