<template>
  <button :class="btnColor === 'yellow' ? 'btnYellow' : 'btnBlue' ">
      <img :src="imagePath" alt="">
  </button>
</template>
<script>

export default {
  name: 'ClassementButton',
  props: {
    btnColor: {
      type: String,
      required: true,
    },
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
  .btnYellow {
    background: #F9C947;
    box-shadow: 0px 4px 0px 0px #D8AD41;
  }
  .btnBlue{
    background: #57C9D7;
    box-shadow: 0px 4px 0px 0px #10B2C0;
  }
</style>


