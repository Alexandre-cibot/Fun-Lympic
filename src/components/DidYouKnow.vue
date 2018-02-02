<template>
  <div class="container" v-show="show" @click="closeModal">
    <div class="know">
      <div class="title">
        <img src="@/assets/title_know.png" alt="" class="title_img">
      </div>
      <img :src="imagePath" class="content_img" />
      <p>À quelques centaines de mètres de l’arrivée, il accepte un verre de champagne qui le fait vomir.</p>
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
        default: 
          console.log('No default found');
        break;
      }
    },
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
  height: 60vh;
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
  width: 56%;
  margin: 0 auto;
  margin-top: 25%;
  height: auto;
}
.bottom_img {
  position: absolute;
  bottom: -6vw;
  width:12vw;
  left: calc(50% - 6vw);
  margin: auto;
}
p {
  font-family: 'myfrida_bold', sans-serif;
  text-align: center;
  padding: 27px;
  line-height: 1.5em ;
  font-size: 0.9em;
  color: #493B35;
}
</style>