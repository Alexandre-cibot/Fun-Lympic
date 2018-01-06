<template>
  <div id="app">
    <p>{{text}}</p>
    <div id="content" v-show="true"></div>
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
