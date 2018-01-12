<template>
  <div class="container" v-show="show" @click="closeModal">
    <div class="know">
      <h2>Le saviez-vous ?</h2>
      <img :src="imagePath" />
      <p>À quelques centaines de mètres de l’arrivée, il accepte un verre de champagne qui le fait vomir.</p>
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
          return require('../assets/escrime.png');
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
  display: flex;
  position: absolute;
  flex-direction: column;
  align-content: space-between;
  position: relative;
  justify-content: center;
  width: 80%;
  height: 60vh;
  background: white;
  border-radius: 10px;
  z-index: 30;
}
.know:after {
  content: "";
  position: absolute;
  background: white;
  border-left: 25px solid #C09033;
  border-right: 25px solid #C09033;
  margin-left: -25px;
  top: 30px;
  height: 40px;
  width: 100%;
  z-index: -1;
}
img{
  width: 50%;
  margin: auto;
  height: auto;
}
h2, p {
  font-family: 'Helvetica';
  text-align: center;
}
h2{
  position: relative;
  padding: 10px 0;
  width: 110%;
  margin-left: -5% ;
  font-size: 1.3em;
  font-weight: 100;
  color: white;
  background: #F7BE51;
  text-transform: uppercase;
}
/* h2:after {
  content: "";
  position: absolute;
  left: 5px;
  height: 9px;
  width: 5%;
  top: 100%;
  bottom: 0; 
  background: #C09033;
  transform: rotate(30deg);
  z-index: -1;
} */
p{
  padding: 10px;
  font-size: 0.9em;
}
</style>