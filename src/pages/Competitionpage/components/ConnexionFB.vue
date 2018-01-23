<template>
  <div class="wrapper">
    <div class="info-content">
          <img src="@/assets/facebook.svg" alt="">
          <p>Connectez-vous pour accéder au stade et défier vos amis</p>
      </div>
      <!-- <router-link :to="{ path: '/stade/challenge' }" style="width:100%;"> -->
        <BasicButton class="connexionBtn" title="connexion" image="facebook" btnColor="btnYellow" @click="showChallenge" />
      <!-- </router-link> -->
  </div>
</template>

<script>
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'ConnexionFB',
  components: {
    BasicButton
  },
  methods: {
    connectionFb() {
      FB.getLoginStatus(function(response) {
        console.log(response)
          if (response.status !== "connected") {
            FB.login();
          }
      });
    },
    showChallenge () {
      this.$emit('showChallenge')
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
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
  height: 6
  0vh;
  align-items: center;
}
.info-content p {
  font-size: 18px;
  font-family: Arial;
}

.info-content img {
  margin-bottom: 35px;
}
</style>

