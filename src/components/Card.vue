<template>
  <div class="card" @click="click">
    <h3>{{text}}</h3>
    <img :src="imagePath" class="car_img" />
    <div class="score">
      <img src="@/assets/medal.svg" alt="" class="medal">
      <h4>{{score}}</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    text: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
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
          return require('@/assets/athle.svg');
        break;
        default: 
          console.log('No default found');
        break;
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  background: #F4426D;
  border-radius: 15px;
  height: 55vh;
  z-index: 20;
  width: 70%;
  margin: auto;
  margin-top: 5vh;
  box-shadow: 0px 8px 0px 0px #B42649
}
.score {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  letter-spacing: 1.5px;
  height: 4vh;
  width: 20vw;
  color: white;
  font-family: 'myfrida-bold', sans-serif;
  font-size: 1.8em ;
  background:#B42649 ;
  border-radius: 15px;
  padding: 7px;
}
.medal {
  width: auto;
  height: 90%;
  margin:0;
}
.card:before {
  /* content: "";
  transform: rotate(-52deg) translateX(-20px) translateY(100px);
  z-index:0;
  position: absolute;
  height: 100%;
  width: 162%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.04); */
}
.car_img {
  display: block;
  position: relative;
  width: 70%;
  margin: auto;
  margin-top: 4vh;
}
h3{
  padding: 15px;
  font-size: 1.5em;
  font-family: 'myfrida-bold';
  letter-spacing: 1.5px;
  font-weight: 100;
  text-align: center;
  background: #D32C55;
  color: white;
  text-transform: uppercase;
  margin-top: 3vh;
}
</style>