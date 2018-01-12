<template>
<div class="wrapper">
  <div class="block">
    <div class="game-title">
      <p>Olympic's fingers</p>
    </div>
  </div>
  <DidYouKnow :show="false" image="athletisme"/>
  <div class="block select-category">
    
    <router-link :to="{ path: '/training' }" style="width:100%;">
      <BasicButton title="Jouer" btnColor="btnBlue" image="megaphone"/>
    </router-link>
    
    <router-link :to="{ path: '/stade' }" style="width:100%">
      <BasicButton title="Le stade" btnColor="btnBlue" image="olympique"/>
    </router-link>
  </div>

  <div class="block">
    <div class="other-buttons">
      <button>
        <img src="../assets/icone.png" alt="">
      </button>
      <button>
        <img src="../assets/icone.png" alt="">
      </button>
      <button>
        <img src="../assets/icone.png" alt="">
      </button>
      <button>
        <img src="../assets/icone.png" alt="">
      </button>
      <button>
        <img src="../assets/icone.png" alt="">
      </button>
    </div>
  </div>
</div>
</template>

<script>
import BasicButton from '../components/BasicButton';
import DidYouKnow from '../components/DidYouKnow';

export default {
  name: 'Homepage',
  components: {
    BasicButton,
    DidYouKnow
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
.wrapper{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 30px;
}
.wrapper .block {
  display: flex;
  align-items: center;
  flex:1;
}

.game-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex:1;
  height: 50%;
  border-radius: 60px;
  margin:20px;
}

.game-title p {
  color: white;
  font-family: sans-serif;
  font-size: 21px;
}

.category {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex:1;
  width: 100%;
  margin:20px;
  font-family: sans-serif;
  font-size: 21px;
  background-color: #E0E0E0;
  border: none;
  padding: 0;
}

.other-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex:1;
  font-family: sans-serif;
  font-size: 21px;
}

.select-category {
  flex-direction: column;
  justify-content: space-evenly;
}

.other-buttons button {
  height: 55px;
  background-color: #E0E0E0;
  border: none;
}
.other-buttons button img {
  height: 60%;
  width: 60%;
}
</style>
