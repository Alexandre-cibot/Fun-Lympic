<template>
  <div id="app">
    <!-- <p>{{text}}</p>
    <div id="content" v-show="true"></div> -->
    <router-view/>
  </div>
</template>

<script>

if (location.protocol != 'https:' && !location.origin.includes('localhost')) {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
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
@import './css/main.css';

@font-face {
  font-family: 'myfrida_bold';
  src: url('./assets/fonts/myfrida/Myfrida_Bold.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'myfrida';
  src: url('./assets/fonts/myfrida/Myfride_Regular.otf');
  font-weight: normal;
  font-style: normal;
}

#app{
  height: 100vh;
}
</style>
