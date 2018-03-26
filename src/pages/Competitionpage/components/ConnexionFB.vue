<template>
  <div class="connexionFB">
    <div class="info-content">
          <img src="@/assets/facebook.svg" alt="">
          <p>Connecte-toi pour accéder au stade et défier tes amis</p>
      </div>
      <!-- <router-link :to="{ path: '/stade/challenge' }" style="width:100%;"> -->
        <BasicButton title="connexion" image="facebook" btnColor="blue" @click="auth.login()" />
      <!-- </router-link> -->
  </div>
</template>

<script>
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'ConnexionFB',
  props: ['authenticated', 'auth'],
  components: {
    BasicButton
  },
  methods: {
  },
}
</script>

<style scoped>
.connexionFB{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
p {
  color: #ffffff;
  font-family: 'Roboto';
  line-height: 1.3;
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
