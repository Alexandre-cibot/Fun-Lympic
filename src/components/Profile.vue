<template>
  <div class="wrapper_profile">
    <div class="circle_first animated hidden">
        <img v-if="other" src="@/assets/second_circle.svg" alt="" class="circle">
        <img v-else src="@/assets/first_circle.svg" alt="" class="circle">
        <img :src="picture" alt="" class="first_character">
    </div>
    <div v-if="navbar" class="infos2">
        <h3>{{firstName}}</h3><img :src="flag" alt="" class="flag"/><br/>
    </div>
    <div v-if="!navbar" class="infos">
        <h3>{{firstName}}</h3><img :src="flag" alt="" class="flag"/><br/>
    </div>
    <h4 v-if="victory">{{victory}} victoires / {{defeat}} défaites</h4>
    <h4 v-if="score" class="score">{{score}}</h4>
    <div v-if="money" class="money">
      <img src="@/assets/coin.png" alt="jo_coin">
      +{{money}}
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    infos: {
      type: Boolean
    },
    money: {
      type: Number
    },
    score: {
      type: String,
    },
    picture:{
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    other: {
      type: Boolean,
      required: false,
    },
    competition: {
      type: Boolean,
      required: false,
    },
    defeat: {
      type: Number
    },
    victory: {
      type: Number
    },
    navbar:{
      type: Boolean
    }
  },
  
}
</script>

<style scoped>

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.score {
  color: white;
  font-size: 2em;
  opacity: 1;
}
.wrapper_profile{
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between;
}
.infos {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
}
.infos2 {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8vh;
}
.infos img {
  display: inline-block;
  height: 3vh;
}
.infos h3 {
  float: left;
  padding-right: 10px;
}
.circle_first{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.circle_second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.circle {
  height: 20vh;
  -webkit-animation: rotating 60s linear infinite;
  -moz-animation: rotating 60s linear infinite;
  -ms-animation: rotating 60s linear infinite;
  -o-animation: rotating 60s linear infinite;
  animation: rotating 60s linear infinite;
}
h4{
  letter-spacing: 1.5px;
  opacity: 0.5;
  text-transform: uppercase;
}
.first_character {
  position: absolute;
  border: 7px solid #a997c9;
  border-radius: 50%;
  height: 11vh;
}
.money{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 19vw;
  font-family:"myfrida_bold";
  font-size: 1em;
  color: white;
  background: #4F2F90;
  border-radius: 5px;
  margin: auto;
  padding: 0 4px;
  letter-spacing: 1.5px;
  margin-top: 3vh;
}
.money img {
  transform: scale(0.7)
}
</style>
