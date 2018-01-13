<template>
  <div class="wrapper">
    <div class="info-content">
          <img src="@/assets/facebook-2.png" alt="">
          <p>Connectez-vous pour accéder au stade et défier vos amis</p>
      </div>
      <router-link :to="{ path: '/stade/challenge' }" style="width:100%;">
        <BasicButton class="connexionBtn" title="connexion" image="facebook" btnColor="btnBlue" />
      </router-link>
  </div>
</template>

<script>
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'ConnexionFB',
  components: {
    BasicButton
  },
}
</script>

<style scoped>
  .wrapper {
  height: 100%;
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
  height: 80%;
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

