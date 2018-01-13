<template>
  <div id="app">
    <!-- <p>{{text}}</p>
    <div id="content" v-show="true"></div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: "I'm from Vue JS"
    }
  }
};
</script>

<style>
@import './css/vendor/reset.css';

@font-face {
  font-family: 'myfrida';
  src: url('./assets/fonts/myfrida/Myfrida_Bold.otf');
  font-weight: normal;
  font-style: normal;
}

#app{
  height: 100vh;
}
</style>
