<!--
Ici, on testera l'implementation de phaser.
Plus tard il y aura une page de selection de jeux en amont, mais ce n'est pas interessant pour le moment.
Pour l'instant, nous testons ici.
-->
<template>
  <div class="wrapper-page">
    <Navbar text="stade" secondBtn="podium"/>
    <div class="wrapper">
      <div class="info-content">
          <img src="../assets/facebook-2.png" alt="">
          <p>Connectez-vous pour accéder au stade et défie tes amis</p>
      </div>
      <BasicButton class="connexionBtn" title="connexion" image="facebook" btnColor="btnBlue" />

    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import BasicButton from '../components/basicButton';

export default {
  name: 'Stade',
  components: {
    Navbar,
    BasicButton
  },
  data() {
    return {
      msg: 'test',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {
  background: #F5F5F5;
  height:100vh;
}
.wrapper {
  overflow: hidden;
  height: calc(100% - 14vh);
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h2, p {
  font-family: 'Roboto';
  font-weight: 100;
  text-align: center;
}
h2 {
  font-size: 1.2em;  
  text-transform: uppercase;
  padding-bottom: 1vh;
}
.score {
  font-size: 2.2em;
  margin-bottom: 1vh;
}

.info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  align-items: center;
}

.info-content p {
  font-size: 18px;
  font-family: Arial;
}

.info-content img {
  margin-bottom: 10px;
}

</style>
