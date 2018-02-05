<template>
  <button>
      <img :src="imagePath" alt="">
  </button>
</template>
<script>

export default {
  name: 'ClassementButton',
  props: {
    image: {
      type: String,
      required: true,
    }
  },
  data(){
    return {}
  },
  computed: {
    imagePath(){
      switch(this.image){
        case 'facebook':
          return require('@/assets/facebook2.svg');
        break;
        case 'flag':
          return require('@/assets/flag.svg');
        break;
        case 'planet':
          return require('@/assets/planet.svg');
        break;
        default: 
        break;
      }
    }
  }
};
</script>
<style scoped>
  button{
    border-radius: 50%;
    height: 4.7em;
    width: 4.7em;
    border: none
  }
</style>