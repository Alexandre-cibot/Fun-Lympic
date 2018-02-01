<template>
  <div class="wrapper-page bg_purple_light">
    <Navbar text="Paramètres" @goBack="()=>{this.$router.push('/')}"/>
    <div class="wrapper">
      <p>Page de parametres</p>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BasicButton from '@/components/BasicButton';

export default {
  name: 'Stade',
  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.wrapper-page {
  height: 100%;
  overflow-y: hidden;
}
.wrapper {
  display:block;
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 15vh);
  padding: 0 30px;
  padding-top: 3vh;
}

</style>

