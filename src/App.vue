<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

if (location.protocol != 'https:' && !location.origin.includes('localhost') && !location.origin.includes('192.168')) {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
export default {
  name: 'app',
  data () {
    return {

    }
  }
};
</script>

<style>
@import './css/vendor/reset.css';
@import './css/main.css';


#app {
  height: 100vh;
}
</style>
