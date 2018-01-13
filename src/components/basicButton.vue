<!--
Exemple pour apeller ce composant : 
<BasicButton title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="basicButton" :class="btnColor" @click="handleClick" v-bind:style="{ 'justify-content': image ? 'space-between' : 'center' }">
    <img v-if="image" :src="imagePath" alt="" class="btn-fLeft btn-icone">
    <p class="btn-fRight btn-title">
      {{title}}
    </p>
  </button>
</template>

<script>
export default {
  name: 'basicButton',
  props: {
    btnColor: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('doAction');
    }
  },
  computed: {
    imagePath() {
      switch(this.image) {
        case 'megaphone':
          return require('@/assets/loud.png');
        break;
        case 'olympique':
          return require('@/assets/olympique.png');
        break;
        case 'facebook':
          return require('@/assets/facebook.png');
        break;
        case 'run':
          return require('@/assets/run.png');
        break;
        default:
          console.log('no image default found.');
        break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  

  .basicButton {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px 30px;
    max-height: 65px;
  }
  .basicButton p {
    font-family: roboto, sans-serif;
    font-weight: lighter;
    margin: 0;
  }
  .btnBlue {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #2E00AB;
    background-color: #595BEE;
  }
  .btnYellow {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #C09033;
    background-color: #F7BE51;
  }
  .btn-fLeft {
    float:left;
  }
  .btn-Right {
    float:right;
  }
  .btn-dFlex {
    
  }
  .btn-title {
    font-size: 20px;
    text-transform: uppercase;
    color: white;
  }
  .btn-icone {
    width: auto;
    height: 30px;
    padding-right:10px;
  }
</style>
