<!--
Ici, on testera l'implementation de phaser.
Plus tard il y aura une page de selection de jeux en amont, mais ce n'est pas interessant pour le moment.
Pour l'instant, nous testons ici.
-->
<template>
  <div class="wrapper-page">
    <Navbar text="compétition" secondBtn="podium"/>
    <div class="wrapper">
      <ConnexionFB v-if="connexion"/>
      <CompetitionDashboard v-if="competition"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';
// Composants propre a cette page
import ConnexionFB from './components/ConnexionFB.vue';
import CompetitionDashboard from './components/CompetitionDashboard';

export default {
  name: 'Stade',
  components: {
    Navbar,
    BasicButton,
    ConnexionFB,
    CompetitionDashboard
  },
  data() {
    return {
      msg: 'test',
      competition : true,
      connexion : false
    };
  },
  methods: {
    showCompetition() {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {

  background: #F5F5F5;
  height: 100%;
  overflow-y: hidden;
}
/* .wrapper {
  
  min-height: calc(100% - 15vh);
  flex-direction: column;
  justify-content: space-around;
} */
.wrapper {
  display:block;
  background: #F5F5F5;
  overflow-y: scroll;
  height: calc(100% - 15vh);
  margin: 0 30px;
  margin-top: 8px; /* Because header has a box-shadow bottom of 8px */
  padding-top: 3vh;
}
/* Remove the scrollbar  */
.wrapper::-webkit-scrollbar { width: 0 !important }
</style>
