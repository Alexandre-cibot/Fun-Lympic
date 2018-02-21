<template>
  <div class="wrapper_profile">
    <div class="circle_first animated hidden">
        <img v-if="other" src="@/assets/second_circle.svg" alt="" class="circle">
        <img v-else src="@/assets/first_circle.svg" alt="" class="circle">
        <img :src="picture" alt="" class="first_character">
    </div>
    <div class="infos">
        <h3>{{firstName}}</h3><img :src="flag" alt="" class="flag"/><br/>
    </div>
    <h4 v-if="victory">{{victory}} victoires / {{defeat}} défaites</h4>
    <h4 v-if="score" class="score">{{score}}</h4>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    infos: {
      type: Boolean
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
  margin-top: 13vh;
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
  height: 20vh;
}
.circle_second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
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
  margin-top: 2vh;
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
</style>
