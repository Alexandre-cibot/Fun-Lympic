<template>
  <div class="card" :class="colorBackground" @click="click">
    <h3>{{text}}</h3>
    <img :src="imagePath" class="car_img" />
    <div class="score" v-if="!islock">
      <img src="@/assets/medal.svg" alt="" class="medal">
      <h4>{{score}}</h4>
    </div>
    <div class="score" v-else>
      <img src="@/assets/lock.svg" alt="" class="medal">
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
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true
    },
    islock: {
      type: Boolean,
      required: false
    }
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
          return require('@/assets/athle.png');
        break;
        case 'swimming':
          return require('@/assets/accueil_swim.png');
        break;
        case 'grandbleu':
          return require('@/assets/grandbleu.png');
        break;
        case 'schwarzy':
          return require('@/assets/coolschwarzy.png');
        break;
        case 'sabres':
          return require('@/assets/guerredessabres.png');
        break;
        default:
          console.log('No default found');
        break;
      }
    },
    colorBackground() {
      switch(this.background) {
        case 'blue':
          return 'blueBg';
          break;
        case 'red':
          return 'redBg';
          break;
        case 'rose':
          return 'roseBg';
          break;
        case 'yellow':
          return 'yellowBg';
          break;
        case 'green':
          return 'greenBg';
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
  margin: 5vh 0 0 10vw;
  box-shadow: 0px 8px 0px 0px #B42649
}
.card:first-child{
  margin: 5vh 0 0 15vw;
}
.card:nth-child(2){
}
.blueBg{
  background: #57C9D7;
  box-shadow: 0px 8px 0px 0px #6CA5B5;
}
.blueBg h3, .blueBg .score {
  background: #3B8A9F;
}
.roseBg{
  background: #FFA3F6;
  box-shadow: 0px 8px 0px 0px #D57DCC;
}
.roseBg h3, .roseBg .score {
  background: #A5569D;
}
.yellowBg{
  background: #FFC842;
  box-shadow: 0px 8px 0px 0px #D3A536;
}
.yellowBg h3, .yellowBg .score {
  background: #D3A536;
}
.greenBg{
  background: #6AFFC7;
  box-shadow: 0px 8px 0px 0px #4ED4A1;
}
.greenBg h3, .greenBg .score {
  background: #4ED4A1;
}
.score {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-bottom: 2vh;
  padding: 7px 10px;
  height: 4vh;
  min-width: 20vw;
  font-size: 1.8em;
  letter-spacing: 1.5px;
  background:#B42649;
  border-radius: 15px;
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
  width: 50vw;
  margin: 3vh 10vw;
  margin-top: 4vh;
}
h3{
  padding: 15px 0;
  font-size: 1.25em;
  letter-spacing: 1.5px;
  font-weight: 100;
  text-align: center;
  background: #D32C55;
  text-transform: uppercase;
  margin-top: 3vh;
}
h4{
  margin-left: 10px;
}
</style>
