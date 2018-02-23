<template>
  <div id="tuto" class="swimming" @click="disappear"></div>
</template>
<script>
export default {
  name:"SwimmingTuto",
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
}
#tuto{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* z-index: 99; */
}

#tuto.swimming {
background: url('../../../assets/images/Tuto_swim.jpg');
background-size: contain;
}
</style>
