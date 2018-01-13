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
#app{
  height: 100vh;
}
</style>
