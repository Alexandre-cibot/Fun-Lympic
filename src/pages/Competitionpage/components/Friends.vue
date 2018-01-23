<template>
  <div class="wrapper">
  <h2>Lancer un défi à</h2>
  <FriendsButton name="Enora" image="enora" />
  </div>
</template>

<script>
import FriendsButton from '@/components/FriendsButton.vue';
export default {
  name: 'Friends',
  components: {
    FriendsButton
  },
  methods: {
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
}
h2, p {
  font-family: 'myfrida', sans-serif;
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

