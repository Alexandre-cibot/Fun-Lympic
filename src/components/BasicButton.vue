<!--
Exemple pour apeller ce composant : 
<B title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="BasicButton" :class="btnColor" @click="handleClick" v-bind:style="{ 'justify-content': image ? 'space-between' : 'center' }">
    <img v-if="image" :src="imagePath" alt="" class="btn-fLeft btn-icone">
    <p class="btn-fRight btn-title">
      {{title}}
    </p>
  </button>
</template>

<script>
export default {
  name: 'BasicButton',
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
      this.$emit('click');
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
        case 'place':
          return require('@/assets/place.svg');
        break;
        case 'lose': 
          return require('@/assets/lose.svg');
        break;
        case 'win': 
          return require('@/assets/win.svg');
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

  .BasicButton {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 8px 30px;
    margin-top: 3vh;
  }
  .BasicButton p {
    font-family: 'myfrida', sans-serif;
    margin: 0;
  }
  .btnBlue {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #2E00AB;
    background-color: #595BEE;
  }
  .btnYellow, .btnYellowLeft {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 6px 0px 0px #F1B946;
    background-color: #FFD360;
  }
  .btnYellowLeft{
    margin-top: 5vh;
    padding: 20px 10px;
  }
  .btn-fLeft {
    float:left;
  }
  .btn-Right {
    float:right;
  }
  .btn-title {
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    font-family: 'myfrida', sans-serif;
  }
  .btn-icone {
    width: auto;
    height: 40px;
    padding-right:10px;
  }
</style>
