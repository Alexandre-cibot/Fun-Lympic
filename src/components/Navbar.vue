<template>
  <header class="bg_purple_dark animated slideInDown">
    <div class="button">
      <button class="bg_red" @click="goBack">
        <img src="@/assets/arrow.png" />
      </button>
    </div>
    <router-link v-if="money" :to="{ path: '/shopping'}">
      <div class="money">
        <img src="@/assets/coin.png" alt="jo_coin">
        {{money}}
      </div>
    </router-link>
    <h1 v-if="!shopping" class="titleAlone">{{text}}</h1>
    <img v-if="flag" :src="flag" class="flag" />
    <router-link v-if="secondBtn && secondBtn == 'shopping'" :to="{ path: '/shopping'}">
      <div class="button">
        <button class="bg_red">
          <img :src="secondBtnPath" />
        </button>
      </div>
    </router-link>
    <router-link v-else-if="secondBtn && secondBtn == 'podium'" :to="{ path: '/classement'}">
      <div class="button">
        <button class="bg_red">
          <img :src="secondBtnPath" />
        </button>
      </div>
    </router-link>
    <router-link v-else-if="secondBtn && secondBtn == 'none'" :to="{ path: '/classement'}" >
      <div class="button_none">
        <button class="bg_red" style="background: transparent">
          <img :src="secondBtnPath" />
        </button>
      </div>
    </router-link>

  </header>
</template>

<script>

export default {
  name: 'navMenu',
  props: {
    text: {
      type: String,
      required: false,
    },
    secondBtn: {
      type: String
    },
    flag: {
      type: String
    }  ,
    shopping: {
      type: Boolean
    },
    money: {
      type: Number
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
        case 'none':
          return;
        break;
        case 'shopping':
          return require('@/assets/big_money.png');
        break;
        case 'medal':
          return require('@/assets/medals.png');
        break;
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
  height: 52px;
  width: 63px;
  text-align: center;
  border-radius: 10px;
  border: none;
}
button_none{
  height: 50px;
  width: 50px;
}
.titleAlone {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -1;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #FFD360; */
  /* box-shadow: 0px 8px 0px 0px #F1B946; */
  /* margin-bottom: 5vh; */
  padding: 9px 9px 8px;
}
img{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  padding: 5px 5px;
}
.flag {
  padding-right:5vw;
  height: 4vh;
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
.money{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  font-family:"myfrida-bold";
  font-size: 1.4em;
  color: white;
  background: #422881;
  border-radius: 10px;
  margin: auto;
  padding-right: 1vh;
  letter-spacing: 1.5px;
}
</style>
