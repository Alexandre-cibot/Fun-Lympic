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


#app{
  height: 100vh;
}
</style>
