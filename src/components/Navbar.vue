<template>
  <header>
    <div class="button">
    <router-link :to="{ path: '/' }">
      <button>
        <img src="@/assets/arrow.png" />
      </button>
    </router-link>
    </div>
    <div class="title">
      <h1>{{text}}</h1>
    </div>
    <div class="button">
      <button>
        <img :src="secondBtnPath" />
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'menu',
  props: {
    text: {
      type: String,
      required: true,
    },
    secondBtn: {
      type: String,
      required: true
    }  
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    secondBtnPath() {
      switch(this.secondBtn) {
        case 'podium':
          return require('@/assets/podium.png');
          break;
        case 'medal':
          return require('@/assets/medals.png');
      }
    }
  }
};
</script>

<style scoped>

button{
  background: #F1B946;
  height: 50px;
  border-radius: 10px;
  border: none;
}
header {
  height: 9vh;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  background-color: #FFD360;
  box-shadow: 0px 8px 0px 0px #F1B946;
  margin-bottom: 5vh;
  padding: 5px;
}
img{
  display: block;
  position: relative;
  margin: auto;
  padding: 5px 5px;
}
h1{
  text-align:center;
  font-size: 1.2em;
  font-family: 'myfrida', sans-serif;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
}
</style>