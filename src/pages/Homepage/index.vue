<template>
<div class="background">
  <div class="wrapper">
    <!-- <div class="block">
      <div class="game-title">
        <p>Olympic's fingers</p>
      </div>
    </div> -->
    <!-- <DidYouKnow :show="show" image="athletisme" @closeModal="closeModal" /> -->
    <div class="content">
      <div class="block select-category">
        
        <router-link :to="{ path: '/training' }" style="width:100%;">
          <BasicButton title="Jouer" btnColor="btnYellow" image="megaphone"/>
        </router-link>
        
        <router-link :to="{ path: '/competition' }" style="width:100%">
          <BasicButton title="Compétition" btnColor="btnYellow" image="olympique"/>
        </router-link>
      </div>

      <div class="block">
        <div class="other-buttons">
          <button>
            <img src="@/assets/first.svg" alt="">
          </button>
          <button>
            <img src="@/assets/second.svg" alt="">
          </button>
          <button>
            <img src="@/assets/third.svg" alt="">
          </button>
          <button>
            <img src="@/assets/fourth.svg" alt="">
          </button>
          <button>
            <img src="@/assets/fiveth.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BasicButton from '@/components/BasicButton';
import DidYouKnow from '@/components/DidYouKnow';

export default {
  name: 'Homepage',
  components: {
    BasicButton,
    DidYouKnow
  },
  data() {
    return {
      msg: 'test',
      show: true,
    };
  },
  methods: {
    closeModal () {
      this.show = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  height: 100%;
  width: 100%;
  background: url('../../assets/bakground.png');
  background-size: cover;
  background-position: center;
}
.wrapper{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 30px;
}
.wrapper .block {
  display: flex;
  align-items: center;
  flex:1;
}
.content { 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
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
  font-family: 'myfrida', sans-serif;
  color: white;
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
  background-color: transparent;
  border: none;
}
.other-buttons button img {
  height: 120%;
  width: 120%;
}
.other-buttons button:nth-child(3) img {
  height: 150%;
  width: 150%;
  margin-left: -1.1em;
  margin-top: -1em;
}
.other-buttons button:nth-child(1) img, .other-buttons button:nth-child(2) img {
  margin-left: -1em;
}


</style>
