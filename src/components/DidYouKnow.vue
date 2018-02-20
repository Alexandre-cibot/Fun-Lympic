<template>
  <div class="container" v-show="show" @click="closeModal">
    <div class="know animated zoomIn">
      <div class="title">
        <img src="@/assets/title_know.png" alt="" class="title_img">
      </div>
      <img :src="imagePath" class="content_img" />
      <h3 class="titleDYK">Attention aux canards !</h3>
      <p>En 1928, Henry Pearce s'est arrêté de ramer lors du quart des finales de la compétition d'aviron pour tranquillement laisser passer une famille de canards devant son bateau.</p>
      <img src="@/assets/croix.svg" alt="" class="bottom_img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DidYouKnow',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    imagePath() {
      switch (this.image) {
        case 'athletisme':
          return require('@/assets/img_did.svg');
        break;
        case 'ducks':
          return require('@/assets/ducks.png');
        default:
          console.log('No default found');
        break;
      }
    },
  },
  methods: {
    closeModal () {
      const popin = this.$el.querySelector('.know')
      popin.classList.remove('zoomIn')
      popin.classList.add('bounceOut')
      let opacityLevel = 0.5;
      let clearOpacity = setInterval(()=>{
        this.$el.style.background = `rgba(0, 0, 0, ${opacityLevel})`
        opacityLevel -= 0.01
        if (opacityLevel <= 0) {
          clearInterval(clearOpacity)
        }
      },10)
      setTimeout(()=> {
        this.$emit('closeModal')
      },800)
    }
  }
};
</script>

<style scoped>
.dis {
  display: none;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
}
.know {
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  width: 80%;
  height: 75vh;
  background: white;
  border-radius: 10px;
  z-index: 30;
}
.title{
  position: absolute;
  display: block;
  width: 122%;
  left: -11%;
  top: 1vh;
  margin: auto;
}
.title_img {
  width: 100%;
}
.content_img{
  width: 45%;
  margin: 0 auto;
  margin-top: 20%;
  height: auto;
}
.bottom_img {
  position: absolute;
  bottom: -6vw;
  width:12vw;
  left: calc(50% - 6vw);
  margin: auto;
}
.titleDYK {
  font-size: 1.6em;
  color: #493B35;
  font-family: 'myfrida_bold', sans-serif;
  text-align: center;
  padding: 20px;
}
p {
  font-family: 'myfrida_bold', sans-serif;
  text-align: center;
  padding: 0 20px;
  line-height: 1.5em ;
  font-size: 0.9em;
  color: #493B35;
}
</style>
