<template>
  <div id="tuto" @click="disappear"></div>
</template>
<script>
export default {
  name:"AthleticsTuto",
  methods:{
    disappear(){
      this.$emit('hideMe')
    }
  },
}
</script>
<style>
.container{
  position: relative;
  height: 100vh;
  width: 100%;
  background: black;
}
#tuto{
  position: absolute;
  background: url('../../../assets/images/sprint_tuto.jpg');
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* z-index: 99; */
}
</style>


