<template>
  <div id="tuto" class="athletics" @click="disappear"></div>
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

#tuto.athletics {
  background: url('../../../assets/images/sprint_tuto.jpg');
  background-size: contain;
}
</style>
