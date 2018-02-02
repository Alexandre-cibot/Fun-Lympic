<!--
Exemple pour apeller ce composant : 
<B title="entrainement" image="" btnColor="btnBlue" @doAction="handleClick" />
-->
<template>
  <button class="BasicButton" :class="btnClass" @click="handleClick" v-bind:style="{ 'justify-content': image ? 'space-between' : 'center' }">
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
        case 'play':
          return require('@/assets/play_logo.svg');
        break;
        case 'olympique':
          // return require('@/assets/olympique.png');
          return require('@/assets/olympic_logo.svg');
        break;
        case 'facebook':
          // return require('@/assets/facebook.png');
          return require('@/assets/fb_logo.svg');
        break;
        case 'run':
          return require('@/assets/run.png');
        break;
        case 'place':
          return require('@/assets/place.svg');
        break;
        case 'lose': 
          return require('@/assets/lose_white.svg');
        break;
        case 'win': 
          return require('@/assets/win_white.svg');
        break;
        default:
          console.log('no image default found.');
        break;
      }
    },
    btnClass() {
      switch(this.btnColor) {
        case "yellow":
          return "btnYellow";
        break;
        case "red": 
          return "bg_red";
        break;
        case "blue": 
          return "bg_blue";
        break;
      }
    }
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
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    min-height: 11vh;
  }
  .BasicButton p {
    font-family: 'myfrida_bold', sans-serif;
    text-align: right;
    letter-spacing: 1.5px;
    margin: 0;
  }
  .btnBlue {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #2E00AB;
    background-color: #595BEE;
  }
  .btnYellow .btn-fLeft {
    width: 30px;
    height: 30px;
  }
  .bg_red p, .bg_blue p {
    font-size: 1.6em;
  }
  .btnYellow p {
    font-size: 0.9em;
  }
  .btnYellow {
    box-shadow: 0px 6px 0px 0px #F1B946;
    background-color: #FFD360;
    font-size: 1.7em;
    width: 100%;
    min-height: 9vh;
  }
  .btn-title {
    text-transform: uppercase;
    color: white;
    font-family: 'myfrida_bold', sans-serif;
  }
  .btn-icone {
    width: 45px;
    height: 45px;
    object-fit: contain;
  }
</style>
