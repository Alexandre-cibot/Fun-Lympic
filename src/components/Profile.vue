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
    <h4>{{victory}} victoires / {{defeat}} défaites</h4>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
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
}
h4{
  margin-top: 1vh;
  margin-bottom: 5vh;
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
