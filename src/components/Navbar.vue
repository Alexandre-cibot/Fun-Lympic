<template>
  <header class="bg_purple_dark animated slideInDown">
    <div class="button">
      <button class="bg_red" @click="goBack">
        <img src="@/assets/arrow.png" />
      </button>
    </div>
    <h1 class="titleAlone">{{text}}</h1>
    <img v-if="flag" :src="flag" class="flag" />
    <router-link v-if="secondBtn" :to="{ path: '/classement'}">
      <div class="button">
        <button class="bg_red">
          <img :src="secondBtnPath" />
        </button>
      </div>
    </router-link>

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
      required: false
    },
    flag: {
      type: String,
      required: false
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
  },
  methods: {
    goBack() {
      this.$emit('goBack');
    }
  }
};
</script>

<style scoped>

button{
  height: 50px;
  border-radius: 10px;
  border: none;
}
.titleAlone {
  position: absolute;
  width: 100%;
  z-index: -1;
}
header {
  height: 9vh;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  /* background-color: #FFD360; */
  /* box-shadow: 0px 8px 0px 0px #F1B946; */
  /* margin-bottom: 5vh; */
  padding: 5px;
}
img{
  display: block;
  position: relative;
  padding: 5px 5px;
}
.flag {
  padding-right:5vw;
  transform: scale(1.4);
}
h1{
  text-align:center;
  font-size: 1.5em;
  font-family: 'myfrida_bold', sans-serif;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2.5px;
}
</style>