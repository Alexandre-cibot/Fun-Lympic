<template>
  <button class="challengeButton" :class="btnColor">
    <img :src="imagePath" class="btnIcone btnLeft"/>
      <div v-if="true" class="name">
        <p>{{currentName}} : <span class="points">{{currentPoints}} points</span></p> 
        <p>{{challengerName}} : <span class="points">{{challengerPoints}} points</span></p> 
      </div>
      
      <div v-if="false">
        <p>{{challengerName}} <br> {{challengerPoints}}</p> 
      </div>
    <img :src="imagePath" class="btnIcone" >
  </button>  
</template>

<script>
export default {
  name: 'ChallengeButton',
  props: {
    btnColor: {
      type: String,
      required: true
    },
    currentName: {
      type: String,
    },
    currentPoints: {
      type: Number
    },
    challengerName: {
      type: String,
      required: true
    },
    challengerPoints: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return{}
  },
  computed: {
    imagePath() {
      switch (this.image) {
        case 'lose': 
          return require('@/assets/lose.svg');
        break;
        case 'win': 
          return require('@/assets/win.svg');
        break;
        case 'challenge':
          return require('@/assets/challenge.png');
        break;
        default: 
          console.log('No image found');
        break;
      }
    }
  }
}
</script>


<style scoped>
.challengeButton {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 5vh;
}
.btnRed {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #D76A6A;
    background-color: #FB7C7C;
}
.btnGreen {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 0px 0px #70B281;
    background-color: #88D094;
}
.name {
  flex-grow: 2;
}
.name p{
  font-family: 'myfrida';
  font-size: 1.3em;
  color: white;
}
.points {
  font-size: 1em;
}
.btnIcone {
  flex-grow: 1;
  height: 40px;
  width: auto;
}
.btnLeft {
  float: left;
}
.btnRight {
  float: right;
}
</style>

