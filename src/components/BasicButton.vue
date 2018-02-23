<!--
Exemple pour apeller ce composant :
<BasicButton title="entrainement" image="" btnColor="blue" @doAction="handleClick" />
-->
<template>
  <button class="BasicButton" :class="btnClass" @click="handleClick" v-bind:style="{ 'justify-content': image ? 'space-between' : 'center' }">
    <img v-if="image" :src="imagePath" alt="" class="btn-fLeft btn-icone">
    <p v-if="title" class="btn-fRight btn-title">
      {{title}}
    </p>

    <Sound v-if="clicked" file="clic" :isMuted="isMuted" />
  </button>
</template>

<script>

import Sound from '@/components/Sound';

export default {
  name: 'BasicButton',
  components: { Sound },
  props: {
    btnColor: {
      type: String,
      required: false,
      default: '',
    },
    btnSize: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    isMuted: {
      type: Boolean,
      required: false,
      defautl: false
    }
  },
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    handleClick() {
      const self = this;
      this.$emit('click');
      this.clicked = true;
      setInterval( () => {self.clicked = false}, 100);
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
          return require('@/assets/natation.svg');
        break;
        case 'sound':
          return require('@/assets/sound.svg');
        break;
        case 'notif':
          return require('@/assets/tick.png');
        break;
        default:
          console.log('no image default found.');
        break;
      }
    },
    btnClass() {
      let color = '';
      let size = '';

      switch(this.btnColor) {
        case "yellow":
          color = "btnYellow";
        break;
        case "blue":
          color = "btnBlue";
        break;
        case "red":
          color = "btnRed";
        break;
      }

      switch(this.btnSize) {
        case "mid":
          size = "midSize";
        break;
        case "big":
          size = "bigSize";
        break;
      }

      return `${color}${size ? ' ' + size : ''}`;
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
    /* margin-top: 3vh; */
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
    box-shadow: 0px 8px 0px 0px #10B2C0;
    background-color: #2AD4E2;
    font-size: 0.8em;
    border-radius: 10px;
    min-height: 9vh;
  }
  .btnRed {
    box-shadow: 0px 8px 0px 0px #B42649;
    background-color: #F4426D;
    font-size: 0.8em;
    border-radius: 10px;
    min-height: 9vh;
  }
  .btnYellow .btn-fLeft {
    width: 30px;
    height: 30px;
  }
  .bg_red p, .bg_blue p, .btnBlue p, .btnRed p{
    font-size: 1.8em;
  }
  .btnYellow p {
    font-size: 0.9em;
  }
  .btnYellow {
    box-shadow: 0px 6px 0px 0px #E9AF15;
    background-color: #FCCB49;
    font-size: 1.7em;
    width: 100%;
    min-height: 9.5vh;
  }
  .midSize {
    min-height: 8vh;
  }
  .bigSize {
    min-height: 9.5vh;
  }
  .btn-title {
    text-transform: uppercase;
  }
  .btn-icone {
    width: 45px;
    height: 45px;
    object-fit: contain;
  }
</style>
